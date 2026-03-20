"use client";

import { useTranslations } from "next-intl";

function Check() {
  return (
    <span className="text-navy font-bold mr-2" aria-hidden="true">
      &#10003;
    </span>
  );
}

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-center text-3xl font-bold text-navy mb-4">
        {t("title")}
      </h2>
      <p className="text-center text-gray-400 mb-16">
        シンプルな料金体系
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start">
        {/* Free */}
        <div className="rounded-2xl p-8 border border-gray-200 bg-white">
          <h3 className="text-lg font-bold text-gray-900">Free</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">¥0</span>
            <span className="text-gray-400 text-sm ml-1">/月</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">{t("free_desc")}</p>
          <ul className="space-y-3 text-sm text-gray-700 mb-8">
            <li><Check />支出・収入・振替記録</li>
            <li><Check />振替自動除外</li>
            <li><Check />基本カテゴリ分類</li>
          </ul>
          <button className="w-full py-3 rounded-full border border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors">
            {t("title") === "Pricing" ? "Get Started" : t("title") === "요금제" ? "시작하기" : "はじめる"}
          </button>
        </div>

        {/* Clear — highlighted */}
        <div className="rounded-2xl p-8 border-2 border-navy bg-white shadow-xl md:scale-105 relative">
          <span className="absolute top-0 right-0 bg-navy text-cream rounded-bl-xl rounded-tr-2xl px-3 py-1 text-xs font-medium">
            {t("popular")}
          </span>
          <h3 className="text-lg font-bold text-gray-900">Clear</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">¥380</span>
            <span className="text-gray-400 text-sm ml-1">/月</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">{t("clear_desc")}</p>
          <ul className="space-y-3 text-sm text-gray-700 mb-8">
            <li><Check />Freeの全機能</li>
            <li><Check />AIインサイト</li>
            <li><Check />財務ヘルススコア</li>
            <li><Check />節約ポテンシャル分析</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-navy text-cream font-medium hover:bg-navy-dark transition-colors">
            {t("title") === "Pricing" ? "Get Started" : t("title") === "요금제" ? "시작하기" : "はじめる"}
          </button>
        </div>

        {/* ClearPro */}
        <div className="rounded-2xl p-8 border border-gray-200 bg-white">
          <h3 className="text-lg font-bold text-gray-900">ClearPro</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-extrabold text-gray-900">¥700</span>
            <span className="text-gray-400 text-sm ml-1">/月</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">{t("pro_desc")}</p>
          <ul className="space-y-3 text-sm text-gray-700 mb-8">
            <li><Check />Clearの全機能</li>
            <li><Check />AIコーチングBot</li>
            <li><Check />PDFレポート出力</li>
            <li><Check />多言語対応</li>
          </ul>
          <button className="w-full py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition-colors">
            {t("title") === "Pricing" ? "Get Started" : t("title") === "요금제" ? "시작하기" : "はじめる"}
          </button>
        </div>
      </div>
    </section>
  );
}
