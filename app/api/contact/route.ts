import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { Resend } from "resend";

const MAX_BODY_SIZE = 10 * 1024;

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createRateLimiter() {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 m"),
    analytics: true,
    prefix: "portfolio-contact",
  });
}

async function readRequestBody(request: Request): Promise<unknown> {
  const contentLength = request.headers.get("content-length");

  if (contentLength !== null) {
    const size = Number(contentLength);

    if (!Number.isFinite(size) || size < 0 || size > MAX_BODY_SIZE) {
      throw new Error("INVALID_BODY_SIZE");
    }
  }

  if (!request.body) {
    throw new Error("EMPTY_BODY");
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalSize = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalSize += value.byteLength;

      if (totalSize > MAX_BODY_SIZE) {
        await reader.cancel();
        throw new Error("INVALID_BODY_SIZE");
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalSize);
  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder().decode(body));
}

export async function POST(request: Request) {
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return NextResponse.json(
      { error: "The contact service is not configured." },
      { status: 500 },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 },
    );
  }

  let body: unknown;

  try {
    body = await readRequestBody(request);
  } catch (error) {
    if (error instanceof Error && error.message === "INVALID_BODY_SIZE") {
      return NextResponse.json(
        { error: "Request body is too large." },
        { status: 413 },
      );
    }

    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("name" in body) ||
    !("email" in body) ||
    !("message" in body) ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string"
  ) {
    return NextResponse.json(
      { error: "Please provide valid contact details." },
      { status: 400 },
    );
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json(
      { error: "One or more fields exceed the allowed length." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-real-ip")?.trim() ||
    (process.env.NODE_ENV === "development" ? "127.0.0.1" : null);

  if (!ip) {
    return NextResponse.json(
      { error: "Unable to verify the request source." },
      { status: 400 },
    );
  }

  try {
    const ratelimit = createRateLimiter();
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error: "Too many messages. Please try again in 10 minutes.",
        },
        {
          status: 429,
          headers: { "Retry-After": "600" },
        },
      );
    }
  } catch (error) {
    console.error("Rate limit service unavailable:", error);

    return NextResponse.json(
      { error: "The contact service is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["muhammad.adam4078@gmail.com"],
      subject: `Portfolio contact message from ${name}`,
      text: [
        `Name: ${name}`,
        `Sender email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      replyTo: email,
    });

    if (error) {
      console.error("Resend email error:", error.name);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while sending the message." },
      { status: 500 },
    );
  }
}
