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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden" style={{ background: "#050D1A" }}>
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: -100, left: -100, width: 500, height: 500,
          background: "radial-gradient(circle, rgba(27,58,107,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: 200, right: -150, width: 600, height: 600,
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          bottom: -50, left: "30%", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(27,58,107,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <span
          className="rounded-full px-4 py-1.5 text-white/50 text-sm mb-8"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
          }}
        >
          {t("badge")}
        </span>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="max-w-3xl text-center text-white leading-tight"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textShadow: "0 0 80px rgba(96,165,250,0.3)",
          }}
        >
          {t("tagline")}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-white/50 max-w-lg text-center mt-4"
          style={{ fontSize: "1.125rem" }}
        >
          {t("sub")}
        </motion.p>

        {/* CTA */}
        <motion.a
          {...fadeUp(0.4)}
          href="#"
          className="inline-flex items-center gap-2 rounded-full font-semibold mt-8"
          style={{
            background: "white",
            color: "#050D1A",
            padding: "14px 32px",
            boxShadow: "0 0 40px rgba(255,255,255,0.15)",
            transition: "all 0.2s ease",
          }}
          whileHover={{ scale: 1.02, backgroundColor: "#F0F0F0" }}
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
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[220px] h-[460px]"
            style={{
              borderRadius: "2.5rem",
              background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 32px 64px rgba(0,0,0,0.4), 0 0 80px rgba(27,58,107,0.3)",
            }}
          >
            {/* Inner screen */}
            <div
              className="m-[10px] flex flex-col items-center justify-between overflow-hidden"
              style={{
                height: "calc(100% - 20px)",
                borderRadius: "2rem",
                background: "#050D1A",
              }}
            >
              {/* Status bar */}
              <div className="flex items-center gap-1.5 pt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>

              {/* Center content */}
              <div className="flex flex-col items-center">
                <span className="text-blue-400 text-2xl">&#9670;</span>
                <span className="text-white text-2xl font-bold mt-3">
                  ¥ 124,800
                </span>
                <span className="text-white/40 text-xs mt-1">今月の支出</span>
              </div>

              {/* Fake chart bars */}
              <div className="flex items-end gap-3 pb-8">
                <div className="w-10 h-16 rounded-lg bg-blue-900/60" />
                <div className="w-10 h-24 rounded-lg bg-blue-700/60" />
                <div className="w-10 h-12 rounded-lg bg-blue-500/60" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce z-10">
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
