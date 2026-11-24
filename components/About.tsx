"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "A LITTLE ABOUT ME",
      title: "About Me",
      paragraphs: [
        "I'm Muhammad Adam, a Full-Stack Developer passionate about building modern web applications and understanding how software works from frontend to backend.",
        "I enjoy turning ideas into practical products, writing clean and maintainable code, and continuously improving my skills through hands-on projects. I'm particularly interested in software engineering principles, application architecture, and creating reliable experiences that deliver real value to users.",
      ],
      highlights: [
        {
          title: "What I Focus On",
          description:
            "Building full-stack web applications with clean architecture and maintainable code.",
          icon: "code",
        },
        {
          title: "How I Learn",
          description:
            "Learning through building real projects and solving practical engineering problems.",
          icon: "projects",
        },
        {
          title: "My Approach",
          description:
            "Creating reliable, accessible, and user-focused software through continuous improvement.",
          icon: "target",
        },
      ],
    },
    ar: {
      eyebrow: "نبذة عني",
      title: "من أنا",
      paragraphs: [
        "أنا محمد آدم، مطور Full-Stack مهتم ببناء تطبيقات ويب حديثة وفهم كيفية عمل البرمجيات بدءًا من الواجهات الأمامية وحتى الأنظمة الخلفية.",
        "أستمتع بتحويل الأفكار إلى منتجات عملية، وكتابة كود نظيف وقابل للصيانة، وتطوير مهاراتي باستمرار من خلال تنفيذ المشاريع. أهتم بشكل خاص بمبادئ هندسة البرمجيات، وتصميم معمارية التطبيقات، وبناء تجارب موثوقة تقدم قيمة حقيقية للمستخدمين.",
      ],
      highlights: [
        {
          title: "ما أركز عليه",
          description:
            "بناء تطبيقات ويب متكاملة بكود منظم ومعمارية قابلة للصيانة.",
          icon: "code",
        },
        {
          title: "كيف أتعلم",
          description:
            "التعلم من خلال بناء المشاريع والتعامل مع المشكلات الهندسية العملية.",
          icon: "projects",
        },
        {
          title: "منهجي في العمل",
          description:
            "بناء برمجيات موثوقة وسهلة الاستخدام مع التطوير والتحسين المستمر.",
          icon: "target",
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
            {text.eyebrow}
          </p>

          <h2
            id="about-title"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {text.title}
          </h2>

          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
          {text.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {text.highlights.map((item, index) => (
          <article
            key={item.icon}
            className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 hover:bg-surface-secondary motion-reduce:transition-none sm:p-7"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-primary">
              {index === 0 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <path d="m8 8-4 4 4 4" />
                  <path d="m16 8 4 4-4 4" />
                  <path d="m14 5-4 14" />
                </svg>
              )}

              {index === 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 4v16M3 9h5M3 14h5" />
                  <path d="m12 11 2 2 4-4" />
                </svg>
              )}

              {index === 2 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
