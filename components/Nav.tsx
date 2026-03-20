"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const locales = ["ja", "en", "ko"] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-navy font-bold text-xl">&#9670;</span>
          <span className="text-navy font-bold text-lg tracking-tight">
            Hareru
          </span>
        </div>

        {/* Lang switcher — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                l === locale
                  ? "bg-navy text-white"
                  : "text-gray-400 hover:text-navy"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CTA — hidden on mobile */}
        <a
          href="#"
          className="hidden md:inline-flex bg-navy text-cream rounded-full px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {t("download")}
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className="block w-5 h-0.5 bg-navy" />
          <span className="block w-5 h-0.5 bg-navy" />
          <span className="block w-5 h-0.5 bg-navy" />
        </button>
      </div>
    </nav>
  );
}
