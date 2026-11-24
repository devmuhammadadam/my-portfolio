"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type FormStatus = "idle" | "error" | "sending" | "success";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const content = {
    title: isArabic
      ? "لنبنِ شيئًا مميزًا معًا"
      : "Let's Build Something Great Together",
    description: isArabic
      ? "هل لديك مشروع أو فكرة ترغب في تحويلها إلى واقع؟ يسعدني أن أسمع منك ونستكشف معًا كيف يمكننا تنفيذها."
      : "Have a project in mind or an idea you'd like to bring to life? I'd love to hear from you and explore how we can make it happen.",
    name: isArabic ? "الاسم" : "Name",
    namePlaceholder: isArabic ? "أدخل اسمك" : "Enter your name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    emailPlaceholder: "name@example.com",
    message: isArabic ? "الرسالة" : "Message",
    messagePlaceholder: isArabic
      ? "اكتب رسالتك هنا..."
      : "Write your message here...",
    submit: isArabic ? "إرسال الرسالة" : "Send Message",
    sending: isArabic ? "جارٍ الإرسال..." : "Sending...",
    success: isArabic
      ? "تم إرسال رسالتك بنجاح. شكرًا لتواصلك!"
      : "Your message was sent successfully. Thank you for reaching out!",
    required: isArabic ? "هذا الحقل مطلوب." : "This field is required.",
    invalidEmail: isArabic
      ? "يرجى إدخال بريد إلكتروني صحيح."
      : "Please enter a valid email address.",
    genericError: isArabic
      ? "تعذّر إرسال الرسالة. يرجى المحاولة مرة أخرى."
      : "Unable to send your message. Please try again.",
    validationError: isArabic
      ? "يرجى مراجعة البيانات المدخلة والمحاولة مرة أخرى."
      : "Please check your submitted information and try again.",
    payloadError: isArabic
      ? "حجم الطلب أكبر من الحد المسموح به. يرجى تقليل حجم الرسالة."
      : "Your request is too large. Please shorten your message.",
    contentTypeError: isArabic
      ? "تعذّر معالجة الطلب. يرجى تحديث الصفحة والمحاولة مرة أخرى."
      : "The request format is not supported. Please refresh the page and try again.",
    rateLimitError: isArabic
      ? "لقد تجاوزت الحد المسموح للرسائل. يرجى المحاولة بعد 10 دقائق."
      : "Too many messages. Please try again in 10 minutes.",
    serviceError: isArabic
      ? "خدمة التواصل غير متاحة مؤقتًا. يرجى المحاولة لاحقًا."
      : "The contact service is temporarily unavailable. Please try again later.",
    emailError: isArabic
      ? "تعذّر إرسال البريد الإلكتروني حاليًا. يرجى المحاولة لاحقًا."
      : "Unable to deliver your message right now. Please try again later.",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("idle");
    setErrorMessage("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nextFieldErrors: FieldErrors = {
      name: !trimmedName ? content.required : undefined,
      email: !trimmedEmail
        ? content.required
        : !emailPattern.test(trimmedEmail)
          ? content.invalidEmail
          : undefined,
      message: !trimmedMessage ? content.required : undefined,
    };

    setFieldErrors(nextFieldErrors);

    if (Object.values(nextFieldErrors).some(Boolean)) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      const result: { success?: boolean } | null = await response
        .json()
        .catch(() => null);

      if (!response.ok || result?.success !== true) {
        let error = content.genericError;

        switch (response.status) {
          case 400:
            error = content.validationError;
            break;
          case 413:
            error = content.payloadError;
            break;
          case 415:
            error = content.contentTypeError;
            break;
          case 429:
            error = content.rateLimitError;
            break;
          case 502:
            error = content.emailError;
            break;
          case 503:
            error = content.serviceError;
            break;
        }

        setErrorMessage(error);
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setFieldErrors({});
    } catch {
      setErrorMessage(content.genericError);
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    if (status !== "sending") {
      setStatus("idle");
    }

    setErrorMessage("");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="px-5 py-10 sm:px-8 sm:py-14"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary">
            {isArabic ? "تواصل معي" : "GET IN TOUCH"}
          </span>

          <h2
            id="contact-title"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {content.title}
          </h2>

          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
            {content.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {content.name}
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  clearFieldError("name");
                }}
                placeholder={content.namePlaceholder}
                className={inputClasses}
                disabled={status === "sending"}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={
                  fieldErrors.name ? "contact-name-error" : undefined
                }
              />

              {fieldErrors.name && (
                <p
                  id="contact-name-error"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                >
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {content.email}
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearFieldError("email");
                }}
                placeholder={content.emailPlaceholder}
                className={inputClasses}
                disabled={status === "sending"}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={
                  fieldErrors.email ? "contact-email-error" : undefined
                }
              />

              {fieldErrors.email && (
                <p
                  id="contact-email-error"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                >
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {content.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  clearFieldError("message");
                }}
                placeholder={content.messagePlaceholder}
                className={`${inputClasses} min-h-36 resize-y`}
                disabled={status === "sending"}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={
                  fieldErrors.message ? "contact-message-error" : undefined
                }
              />

              {fieldErrors.message && (
                <p
                  id="contact-message-error"
                  className="mt-2 text-sm text-red-600 dark:text-red-400"
                >
                  {fieldErrors.message}
                </p>
              )}
            </div>
          </div>

          {status === "success" && (
            <p
              role="status"
              aria-live="polite"
              className="mt-5 rounded-xl border border-green-600/30 bg-green-600/5 p-3 text-sm leading-6 text-foreground"
            >
              {content.success}
            </p>
          )}

          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-red-500/40 p-3 text-sm leading-6 text-red-600 dark:text-red-400"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-on-primary transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? content.sending : content.submit}

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isArabic ? (
                <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
              ) : (
                <path d="M5 12h14m0 0-7-7m7 7-7 7" />
              )}
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
