import { getLocale } from "next-intl/server";
import Link from "next/link";

const content = {
  ja: {
    back: "← ホーム",
    title: "利用規約",
    updated: "最終更新日: 2026年2月28日",
    sections: [
      {
        heading: "第1条（適用）",
        body: "本利用規約はHareru（ハレル）の利用に適用されます。",
      },
      {
        heading: "第2条（サービス内容）",
        body: "本アプリは個人の支出管理を支援するアプリです。銀行口座への直接アクセスは行いません。",
      },
      {
        heading: "第3条（禁止事項）",
        body: "本アプリの逆アセンブル・改ざん・商業利用は禁止します。",
      },
      {
        heading: "第4条（免責事項）",
        body: "本アプリの情報は参考目的であり、財務アドバイスではありません。データ損失について開発者は責任を負いません。",
      },
      {
        heading: "第5条（有料サービス）",
        body: "Clear（¥380/月）・ClearPro（¥700/月）はApp Store経由で課金されます。返金はAppleのポリシーに従います。",
      },
      {
        heading: "第6条（知的財産）",
        body: "本アプリのコンテンツの著作権は開発者に帰属します。",
      },
      {
        heading: "第7条（サービスの変更）",
        body: "開発者は事前通知なくサービスを変更・終了できます。",
      },
      {
        heading: "第8条（規約の変更）",
        body: "変更はアプリ内公開をもって効力を持ちます。",
      },
      {
        heading: "第9条（準拠法）",
        body: "本規約は日本法に準拠します。",
      },
      {
        heading: "第10条（お問い合わせ）",
        body: "hareru.info11@gmail.com / Lunalism",
      },
    ],
    contactLabel: "お問い合わせ",
    developer: "開発者",
  },
  en: {
    back: "← Home",
    title: "Terms of Service",
    updated: "Last Updated: February 28, 2026",
    sections: [
      {
        heading: "Article 1 (Scope)",
        body: "These Terms of Service apply to the use of Hareru.",
      },
      {
        heading: "Article 2 (Service Description)",
        body: "This app is a personal expense management tool. It does not directly access bank accounts.",
      },
      {
        heading: "Article 3 (Prohibited Activities)",
        body: "Reverse engineering, tampering with, or commercial use of this app is prohibited.",
      },
      {
        heading: "Article 4 (Disclaimer)",
        body: "The information in this app is for reference purposes only and does not constitute financial advice. The developer is not liable for any data loss.",
      },
      {
        heading: "Article 5 (Paid Services)",
        body: "Clear (¥380/month) and ClearPro (¥700/month) are billed through the App Store. Refunds follow Apple's refund policy.",
      },
      {
        heading: "Article 6 (Intellectual Property)",
        body: "All content in this app is the intellectual property of the developer.",
      },
      {
        heading: "Article 7 (Service Changes)",
        body: "The developer may modify or discontinue the service without prior notice.",
      },
      {
        heading: "Article 8 (Changes to Terms)",
        body: "Changes take effect upon publication within the app.",
      },
      {
        heading: "Article 9 (Governing Law)",
        body: "These terms are governed by the laws of Japan.",
      },
      {
        heading: "Article 10 (Contact)",
        body: "hareru.info11@gmail.com / Lunalism",
      },
    ],
    contactLabel: "Contact",
    developer: "Developer",
  },
  ko: {
    back: "← 홈",
    title: "이용약관",
    updated: "최종 업데이트: 2026년 2월 28일",
    sections: [
      {
        heading: "제1조 (적용)",
        body: "본 이용약관은 Hareru(하레루)의 이용에 적용됩니다.",
      },
      {
        heading: "제2조 (서비스 내용)",
        body: "본 앱은 개인 지출 관리를 지원하는 앱입니다. 은행 계좌에 직접 접근하지 않습니다.",
      },
      {
        heading: "제3조 (금지 사항)",
        body: "본 앱의 역어셈블, 변조, 상업적 이용은 금지됩니다.",
      },
      {
        heading: "제4조 (면책 조항)",
        body: "본 앱의 정보는 참고 목적이며 재무 조언이 아닙니다. 데이터 손실에 대해 개발자는 책임을 지지 않습니다.",
      },
      {
        heading: "제5조 (유료 서비스)",
        body: "Clear(¥380/월)·ClearPro(¥700/월)는 App Store를 통해 결제됩니다. 환불은 Apple 정책을 따릅니다.",
      },
      {
        heading: "제6조 (지적 재산)",
        body: "본 앱 콘텐츠의 저작권은 개발자에게 귀속됩니다.",
      },
      {
        heading: "제7조 (서비스 변경)",
        body: "개발자는 사전 통지 없이 서비스를 변경하거나 종료할 수 있습니다.",
      },
      {
        heading: "제8조 (약관 변경)",
        body: "변경 사항은 앱 내 공개를 통해 효력이 발생합니다.",
      },
      {
        heading: "제9조 (준거법)",
        body: "본 약관은 일본법에 따릅니다.",
      },
      {
        heading: "제10조 (문의)",
        body: "hareru.info11@gmail.com / Lunalism",
      },
    ],
    contactLabel: "문의",
    developer: "개발자",
  },
} as const;

export default async function TermsPage() {
  const locale = (await getLocale()) as keyof typeof content;
  const c = content[locale] ?? content.ja;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto py-20 px-6">
        <Link href={`/${locale}`} className="text-navy text-sm hover:underline">
          {c.back}
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 mt-12">
          {c.title}
        </h1>
        <p className="text-sm text-gray-400 mb-12">{c.updated}</p>

        {c.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="text-lg font-bold text-gray-900 mt-10 mb-3 pl-3 border-l-4 border-navy">
              {s.heading}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}

        <div className="bg-gray-50 rounded-2xl p-6 mt-12">
          <p className="text-sm text-gray-600 mb-1">{c.contactLabel}</p>
          <a
            href="mailto:hareru.info11@gmail.com"
            className="text-navy text-sm font-medium"
          >
            hareru.info11@gmail.com
          </a>
          <p className="text-sm text-gray-400 mt-2">
            {c.developer}: Lunalism
          </p>
        </div>
      </div>
    </div>
  );
}
