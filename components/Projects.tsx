"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectStatus = "completed" | "in-progress" | "planned";

type Project = {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  status: ProjectStatus;
  technologies: string[];
  image: string;
  liveDemo?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: {
      en: "Personal Portfolio",
      ar: "الموقع الشخصي",
    },
    description: {
      en: "A responsive personal portfolio website showcasing my projects, technical skills, and development journey. It features Arabic and English language support, light and dark themes, and a contact form with backend integration.",
      ar: "موقع شخصي متجاوب لعرض مشاريعي ومهاراتي التقنية ورحلتي في تطوير البرمجيات. يدعم اللغتين العربية والإنجليزية، والوضعين الفاتح والداكن، ويتضمن نموذج تواصل متصلًا بالخلفية البرمجية.",
    },
    status: "completed",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Resend",
      "Upstash Redis",
    ],
    image: "/images/projects/personal-portfolio.jpeg",
    liveDemo: "https://muhammadadam.vercel.app/",
    githubUrl: "https://github.com/devmuhammadadam/my-portfolio",
  },
  {
    id: "tanaghum",
    title: {
      en: "Tanaghum",
      ar: "تَناغُم",
    },
    description: {
      en: "A SaaS project and team management platform for small software teams. It is being developed to bring workspaces, projects, task management, Kanban boards, and team collaboration together in one organized platform.",
      ar: "منصة SaaS لإدارة المشاريع وفرق العمل الصغيرة، يجري تطويرها لتجمع مساحات العمل والمشاريع وإدارة المهام ولوحات Kanban والتعاون بين أعضاء الفريق داخل منصة واحدة منظمة.",
    },
    status: "in-progress",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    image: "/images/projects/tanaghum.jpeg",
  },
  {
    id: "ecommerce",
    title: {
      en: "E-Commerce",
      ar: "متجر إلكتروني",
    },
    description: {
      en: "A planned e-commerce focused on providing an organized online shopping experience, with product browsing and purchasing features.",
      ar: "مشروع مستقبلي لمتجر إلكتروني يهدف إلى توفير تجربة تسوق منظمة، مع إمكانية استعراض المنتجات وشرائها.",
    },
    status: "planned",
    technologies: [],
    image: "/images/projects/e-commerce.jpeg",
  },
];

const content = {
  en: {
    eyebrow: "SELECTED WORK",
    title: "My Projects",
    description:
      "A selection of projects that reflect my technical skills, practical experience, and journey toward building useful web applications.",
    statuses: {
      completed: "Completed",
      "in-progress": "In Progress",
      planned: "Planned",
    },
    technologies: "Technologies",
    liveDemo: "Live Demo",
    github: "GitHub",
  },
  ar: {
    eyebrow: "أعمال مختارة",
    title: "مشاريعي",
    description:
      "مجموعة من المشاريع التي تعكس مهاراتي التقنية وتطبيقي العملي لما أتعلمه ورحلتي نحو بناء تطبيقات ويب مفيدة.",
    statuses: {
      completed: "مكتمل",
      "in-progress": "قيد التطوير",
      planned: "مخطط له",
    },
    technologies: "التقنيات المستخدمة",
    liveDemo: "معاينة المشروع",
    github: "GitHub",
  },
};

const statusStyles: Record<ProjectStatus, string> = {
  completed: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
  "in-progress": "border-blue-500/20 bg-blue-500/10 text-blue-400",
  planned: "border-border bg-surface-secondary text-muted",
};

export default function Projects() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
          {text.eyebrow}
        </p>

        <h2
          id="projects-title"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {text.title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {text.description}
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:bg-surface-secondary/50 motion-reduce:transition-none sm:p-6">
              <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl bg-surface-secondary">
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title[language]}
                  </h3>

                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
                  >
                    {text.statuses[project.status]}
                  </span>
                </div>

                <p className="text-sm leading-7 text-muted">
                  {project.description[language]}
                </p>

                {project.technologies.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-3 text-xs font-medium text-muted">
                      {text.technologies}
                    </p>

                    <ul
                      aria-label={text.technologies}
                      className="flex flex-wrap gap-2"
                    >
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-lg border border-border bg-background/50 px-2.5 py-1.5 text-xs font-medium text-foreground/80"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(project.liveDemo || project.githubUrl) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3.5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {text.liveDemo}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-background/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {text.github}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
