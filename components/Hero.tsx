"use client";

import { useTranslations, useLocale } from "next-intl";
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

const headlines: Record<string, [string, string]> = {
  ja: ["本当の支出が、", "見える。"],
  en: ["See your", "real spending."],
  ko: ["진짜 지출을", "확인하세요."],
};

export default function Hero() {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const [line1, line2] = headlines[locale] ?? headlines.ja;

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: -100, left: -100, width: 500, height: 500,
          background: "radial-gradient(circle, rgba(27,58,107,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute z-0"
        style={{
          bottom: -50, right: -100, width: 400, height: 400,
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.span
            {...fadeUp(0)}
            className="rounded-full px-4 py-1.5 text-sm mb-8"
            style={{
              border: "1px solid rgba(27,58,107,0.15)",
              background: "rgba(27,58,107,0.05)",
              color: "rgba(13,31,60,0.6)",
            }}
          >
            {t("badge")}
          </motion.span>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontSize: "clamp(3rem, 5vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#0D1F3C",
            }}
          >
            {line1}
            <br />
            {line2}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-gray-400 text-lg max-w-md mt-6"
          >
            {t("sub")}
          </motion.p>

          {/* CTA */}
          <motion.a
            {...fadeUp(0.4)}
            href="#"
            className="inline-flex items-center gap-2 rounded-full font-semibold mt-10 text-white"
            style={{
              background: "#1B3A6B",
              padding: "16px 32px",
              boxShadow: "0 8px 32px rgba(27,58,107,0.25)",
              transition: "all 0.2s ease",
            }}
            whileHover={{ scale: 1.02, backgroundColor: "#0D1F3C" }}
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

          {/* Trust line */}
          <motion.p
            {...fadeUp(0.5)}
            className="text-gray-300 text-xs mt-8"
          >
            ✦ 無料プランあり &nbsp; ✦ 広告なし &nbsp; ✦ データは端末内のみ
          </motion.p>
        </div>

        {/* Right: phone */}
        <div className="hidden md:flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[260px] h-[520px]"
              style={{
                borderRadius: "3rem",
                background: "linear-gradient(145deg, #1B3A6B, #0D1F3C)",
                boxShadow: "0 40px 80px rgba(27,58,107,0.25), 0 0 0 1px rgba(27,58,107,0.1)",
              }}
            >
              {/* Inner screen */}
              <div
                className="m-2 flex flex-col overflow-hidden"
                style={{
                  height: "calc(100% - 16px)",
                  borderRadius: "2.5rem",
                  background: "#060E1C",
                }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-5 pt-4">
                  <span className="text-white/30 text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pt-6 flex-1 flex flex-col">
                  <span className="text-white/30 text-xs">今月の支出</span>
                  <span className="text-white text-2xl font-bold tracking-tight mt-1">
                    ¥ 124,800
                  </span>
                  <span className="text-white/20 mt-1" style={{ fontSize: 10 }}>
                    振替除外後
                  </span>

                  <div className="border-t border-white/5 my-4" />

                  {/* Category rows */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-xs">🍽 食費</span>
                      <span className="text-white/40 text-xs">¥32,400</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/5">
                      <div className="h-1 rounded-full bg-blue-400/50" style={{ width: "70%" }} />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-xs">🚃 交通費</span>
                      <span className="text-white/40 text-xs">¥12,800</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/5">
                      <div className="h-1 rounded-full bg-blue-400/50" style={{ width: "30%" }} />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-xs">🛒 日用品</span>
                      <span className="text-white/40 text-xs">¥18,600</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/5">
                      <div className="h-1 rounded-full bg-blue-400/50" style={{ width: "45%" }} />
                    </div>
                  </div>

                  {/* Bottom pill */}
                  <div className="mt-auto mb-6 flex justify-center">
                    <span
                      className="rounded-full px-3 py-1"
                      style={{
                        fontSize: 9,
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        color: "rgba(52,211,153,0.7)",
                      }}
                    >
                      振替 ¥50,000 を自動除外
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
