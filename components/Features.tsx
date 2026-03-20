"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const icons = [
  // Transfer exclusion: two horizontal arrows
  <svg key="f1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDF8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>,
  // AI: sparkles / 3 stars
  <svg key="f2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDF8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
    <path d="M5 19l1.5-3L10 15l-3.5-1L5 11l-1.5 3L0 15l3.5 1L5 19z" />
    <path d="M20 19l1-2 2-1-2-1-1-2-1 2-2 1 2 1 1 2z" />
  </svg>,
  // PDF: document with lines
  <svg key="f3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDF8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <line x1="8" y1="9" x2="10" y2="9" />
  </svg>,
];

const featureKeys = ["f1", "f2", "f3"] as const;

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-center text-3xl font-bold text-navy mb-16">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {featureKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
          >
            <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
              {icons[i]}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t(`${key}_title`)}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t(`${key}_desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
