"use client";

const screens = ["01", "02", "03", "04", "05", "06"];

export default function Screenshots() {
  return (
    <section className="py-24" style={{ background: "#050D1A" }}>
      <h2 className="text-center text-3xl font-bold text-white mb-12">
        Screenshots
      </h2>

      <div
        className="flex gap-5 overflow-x-auto px-8 pb-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {screens.map((num) => (
          <div
            key={num}
            className="snap-start shrink-0 w-[200px] h-[420px] flex flex-col items-center justify-center"
            style={{
              borderRadius: "2.5rem",
              background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 32px 64px rgba(0,0,0,0.4), 0 0 80px rgba(27,58,107,0.3)",
            }}
          >
            <span className="text-white/40 text-4xl font-bold">{num}</span>
            <span className="text-white/40 text-sm mt-2">Screen</span>
          </div>
        ))}
      </div>

      <p className="text-center mt-4 text-white/30 text-sm">
        &larr; スワイプ / Swipe / 스와이프 &rarr;
      </p>
    </section>
  );
}
