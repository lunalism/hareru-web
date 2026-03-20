"use client";

const screens = ["01", "02", "03", "04", "05", "06"];

export default function Screenshots() {
  return (
    <section className="bg-cream py-24 w-full overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-navy mb-12">
        Screenshots
      </h2>

      <div
        className="flex gap-5 pb-6 snap-x snap-mandatory"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          paddingLeft: "calc(50vw - 560px)",
          paddingRight: "calc(50vw - 560px)",
        }}
      >
        {screens.map((num) => (
          <div
            key={num}
            className="snap-start shrink-0 w-[200px] h-[420px] rounded-[2.5rem] bg-gradient-to-b from-[#1B3A6B] to-[#0D1F3C] border-2 border-white/20 shadow-xl flex flex-col items-center justify-center"
          >
            <span className="text-white/40 text-4xl font-bold">{num}</span>
            <span className="text-white/40 text-sm mt-2">Screen</span>
          </div>
        ))}
      </div>

      <p className="text-center mt-4 text-gray-400 text-sm">
        &larr; スワイプ / Swipe / 스와이프 &rarr;
      </p>
    </section>
  );
}
