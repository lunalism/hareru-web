import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Noto_Sans_JP, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import "../globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const meta: Record<string, { title: string; description: string }> = {
  ja: {
    title: "ハレル — 本当の支出が、見える。",
    description:
      "銀行間の振替を自動除外し、本当の支出だけを表示するパーソナルファイナンスアプリ",
  },
  en: {
    title: "Hareru — See your real spending.",
    description:
      "A personal finance app that automatically excludes bank transfers to show your real expenses.",
  },
  ko: {
    title: "하레루 — 진짜 지출을 확인하세요.",
    description:
      "은행 간 이체를 자동으로 제외하고 진짜 지출만 보여주는 가계부 앱",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.ja;
  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${notoSansJP.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
