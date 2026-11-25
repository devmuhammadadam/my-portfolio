"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      eyebrow: "A LITTLE ABOUT ME",
      title: "About Me",
      paragraphs: [
        "I'm Muhammad Adam, a Frontend Developer passionate about building modern web applications and creating seamless user experiences through well-designed interfaces and effective backend integration.",
        "I enjoy turning ideas into complete, functional products, working across frontend development and backend services, and writing clean, maintainable code. I'm particularly interested in software engineering principles, application architecture, and building reliable applications that deliver real value to users.",
      ],
      highlights: [
        {
          title: "What I Focus On",
          description:
            "Building complete web applications through modern frontend development and effective backend integration.",
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
            "Creating reliable, maintainable, and user-focused software through continuous improvement.",
          icon: "target",
        },
      ],
    },
    ar: {
      eyebrow: "نبذة عني",
      title: "من أنا",
      paragraphs: [
        "أنا محمد آدم، مطور واجهات أمامية شغوف ببناء تطبيقات ويب حديثة وتقديم تجارب استخدام متكاملة من خلال واجهات مصممة بعناية وتكامل فعّال مع الخدمات الخلفية.",
        "أستمتع بتحويل الأفكار إلى منتجات عملية ومتكاملة، والعمل على تطوير الواجهات وربطها بالخدمات الخلفية، وكتابة كود منظم وقابل للصيانة. أهتم بشكل خاص بمبادئ هندسة البرمجيات، ومعمارية التطبيقات، وبناء تطبيقات موثوقة تقدم قيمة حقيقية للمستخدمين.",
      ],
      highlights: [
        {
          title: "ما أركز عليه",
          description:
            "بناء تطبيقات ويب متكاملة من خلال تطوير واجهات حديثة وربطها بالخدمات الخلفية.",
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
            "بناء برمجيات موثوقة وقابلة للصيانة وتركز على احتياجات المستخدمين مع التطوير المستمر.",
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
