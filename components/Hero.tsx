"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const content = {
    en: {
      greeting: "Hi, I'm",
      name: "Muhammad Adam",
      role: "Full-Stack Developer",
      description:
        "I build modern web applications using React, Next.js, TypeScript, and Supabase. I focus on writing clean, maintainable code and creating responsive, user-friendly experiences while continuously developing my software engineering and full-stack skills.",
      projects: "Explore My Projects",
      contact: "Contact Me",
      resume: "Download Resume (PDF)",
      codeName: "Muhammad Adam",
      codeRole: "Full-Stack Developer",
      codePassion: "Building web applications",
      codeFocus: "Frontend & Backend",
    },
    ar: {
      greeting: "مرحبًا، أنا",
      name: "محمد آدم",
      role: "مطور Full-Stack",
      description:
        "أعمل على بناء تطبيقات ويب حديثة باستخدام React وNext.js وTypeScript وSupabase. أهتم بكتابة كود نظيف يسهل صيانته، وتطوير تجارب استخدام متجاوبة وسهلة، مع مواصلة تطوير مهاراتي في هندسة البرمجيات وتطوير التطبيقات المتكاملة.",
      projects: "استكشف مشاريعي",
      contact: "تواصل معي",
      resume: "تنزيل السيرة الذاتية (PDF)",
      codeName: "محمد آدم",
      codeRole: "مطور Full-Stack",
      codePassion: "بناء تطبيقات ويب",
      codeFocus: "الواجهات والخلفية",
    },
  };

  const text = content[language];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-12 md:py-24 lg:gap-16 lg:px-10 lg:py-20"
    >
      <div>
        <h1
          id="hero-title"
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {text.greeting}
          <span className="mt-2 block text-primary">{text.name}</span>
        </h1>

        <p className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {text.role}
        </p>

        <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
          {text.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-on-primary transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            {text.projects}
            <span aria-hidden="true">{isEnglish ? "→" : "←"}</span>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong bg-surface px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            {text.contact}
          </a>
        </div>

        <a
          href="/Muhammad_Adam_Resume.pdf"
          download="Muhammad_Adam_Resume.pdf"
          className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
        >
          {text.resume}
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div
        aria-hidden="true"
        className="relative hidden min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-border bg-linear-to-br from-hero-glow via-background to-surface-secondary p-6 sm:p-8 md:flex"
      >
        <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated shadow-2xl shadow-slate-950/10">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </div>

            <span className="font-mono text-xs text-muted">developer.js</span>

            <span className="text-xs text-muted">JS</span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-xs leading-7 text-slate-200 sm:p-5 sm:text-sm">
              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{"}
              </p>

              <p className="pl-4">
                <span className="text-sky-200">name</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codeName)}
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-200">role</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codeRole)}
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-200">passion</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codePassion)}
                </span>
                ,
              </p>

              <p className="pl-4">
                <span className="text-sky-200">focus</span>:{" "}
                <span className="text-emerald-300">
                  {JSON.stringify(text.codeFocus)}
                </span>
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
