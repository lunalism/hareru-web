"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

const locales = ["ja", "en", "ko"] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <footer className="bg-navy py-16 px-8 text-white">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-cream text-2xl font-bold">&#9670;</span>
          <span className="text-cream text-2xl font-bold tracking-tight">
            Hareru
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm flex-wrap justify-center">
          <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
            {tNav("privacy")}
          </Link>
          <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
            {tNav("terms")}
          </Link>
          <a
            href="mailto:hareru.info11@gmail.com"
            className="text-white/60 hover:text-white transition-colors"
          >
            hareru.info11@gmail.com
          </a>
        </div>

        {/* Lang switcher */}
        <div className="flex items-center gap-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                l === locale
                  ? "bg-white/20 text-white"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-xs">{t("copyright")}</p>
      </div>
    </footer>
  );
}
