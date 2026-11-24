"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 size={36} color="#E34F26" />,
  },
  {
    name: "CSS",
    icon: <SiCss size={36} color="#1572B6" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={36} color="#F7DF1E" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={36} color="#3178C6" />,
  },
  {
    name: "React",
    icon: <SiReact size={36} color="#61DAFB" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={36} color="currentColor" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={36} color="#06B6D4" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={36} color="#3FCF8E" />,
  },
  {
    name: "Git",
    icon: <SiGit size={36} color="#F05032" />,
  },
  {
    name: "GitHub",
    icon: <SiGithub size={36} color="currentColor" />,
  },
];

const content = {
  en: {
    eyebrow: "WHAT I WORK WITH",
    title: "My Skills",
    description:
      "Technologies and tools I use to build modern web applications.",
  },
  ar: {
    eyebrow: "التقنيات التي أستخدمها",
    title: "مهاراتي",
    description: "التقنيات والأدوات التي أستخدمها لبناء تطبيقات ويب حديثة.",
  },
};

export default function Skills() {
  const { language } = useLanguage();
  const text = content[language];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-primary">
          {text.eyebrow}
        </p>

        <h2
          id="skills-title"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {text.title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {text.description}
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="group flex min-h-28 items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/50 hover:bg-surface-secondary motion-reduce:transition-none sm:min-h-32 sm:flex-col sm:justify-center sm:gap-3 sm:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center sm:size-12">
                {skill.icon}
              </span>

              <span className="text-sm font-semibold text-foreground sm:text-base">
                {skill.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
