"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type MotionProps = {
  initial: { opacity: number; y: number; scale?: number };
  animate: { opacity: number; y: number; scale?: number };
  transition: { duration: number; delay: number };
};

const fadeUp = (delay: number): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy-dark px-6">
      {/* Badge */}
      <span className="border border-white/20 rounded-full px-4 py-1.5 text-white/70 text-sm mb-8">
        {t("badge")}
      </span>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.1)}
        className="max-w-3xl text-center text-white font-extrabold leading-tight"
        style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
      >
        {t("tagline")}
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        {...fadeUp(0.25)}
        className="text-white/60 text-lg max-w-xl text-center mt-4"
      >
        {t("sub")}
      </motion.p>

      {/* CTA */}
      <motion.a
        {...fadeUp(0.4)}
        href="#"
        className="inline-flex items-center gap-2 bg-cream text-navy rounded-full px-8 py-3.5 font-semibold mt-8 hover:bg-white transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 814 1000"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.3-105.9-207.6-105.9-328.2 0-193 125.5-295.6 249-295.6 65.7 0 120.4 43.1 161.6 43.1 39.2 0 100.2-45.7 174.5-45.7 28.2 0 129.6 2.6 196.4 99.8zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.4 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.2 32.4-55.1 83.6-55.1 135.5 0 7.8.6 15.6 1.3 18.1 2.6.6 6.4 1.3 10.2 1.3 45.4 0 103.5-30.4 139.5-71.2z" />
        </svg>
        {tNav("download")}
      </motion.a>

      {/* iPhone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-16 w-[260px] h-[540px] rounded-[3rem] border-2 border-white/15 bg-gradient-to-b from-navy to-navy-dark shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
      >
        <div className="m-2 h-[calc(100%-16px)] rounded-[2.5rem] bg-[#0A1628] flex flex-col items-center justify-center">
          <span className="text-cream text-2xl">&#9670;</span>
          <span className="text-cream text-lg mt-2">Hareru</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
