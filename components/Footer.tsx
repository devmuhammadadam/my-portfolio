"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const currentYear = new Date().getFullYear();

  const linkClassName =
    "rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <footer className="border-t border-border bg-background px-5 py-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 sm:flex-row">
        <p className="text-center text-sm leading-6 text-muted">
          {isArabic
            ? `© ${currentYear} محمد آدم، جميع الحقوق محفوظة.`
            : `© ${currentYear} Muhammad Adam. All rights reserved.`}
        </p>

        <nav
          aria-label={isArabic ? "روابط التواصل" : "Contact and social links"}
          className="flex items-center gap-5"
        >
          <a
            href="mailto:muhammad.adam4078@gmail.com"
            aria-label={isArabic ? "البريد الإلكتروني" : "Email"}
            className={linkClassName}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
          <a
            href="https://wa.me/+2001068547132"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isArabic ? "واتساب" : "WhatsApp"}
            className={linkClassName}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M12.04 2a9.87 9.87 0 0 0-8.49 14.9L2.5 22l5.27-1.38A9.96 9.96 0 1 0 12.04 2Zm0 18.18a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 1 1 6.96 3.85Zm4.49-6.13c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.11s.91 2.45 1.04 2.62c.13.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.19.21-.59.21-1.09.15-1.19-.06-.1-.23-.16-.49-.29Z" />
            </svg>
          </a>
          <a
            href="https://github.com/devmuhammadadam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={linkClassName}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.1-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.6 1.54.22 2.68.1 2.96.72.78 1.16 1.78 1.16 3 0 4.27-2.62 5.21-5.11 5.49.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/devmuhammadadam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={linkClassName}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9.1h2.97v9.35ZM6.45 7.82a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.63h-2.97v-4.55c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.63H9.28V9.1h2.85v1.28h.04c.4-.74 1.37-1.52 2.81-1.52 3 0 3.56 1.97 3.56 4.53v5.06Z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
