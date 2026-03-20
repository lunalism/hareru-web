import { getLocale } from "next-intl/server";
import Link from "next/link";

const content = {
  ja: {
    back: "← ホーム",
    title: "プライバシーポリシー",
    updated: "最終更新日: 2026年2月28日",
    sections: [
      {
        heading: "1. 収集する情報",
        body: "支出・収入・振替の記録、予算設定、カテゴリ設定、アプリ設定のみを端末内に保存します。氏名・メールアドレス・位置情報等の個人情報は収集しません。",
      },
      {
        heading: "2. データの保存場所",
        body: "すべてのデータはユーザーの端末内にのみ保存されます。外部サーバーへの送信は行いません。銀行口座への連携もありません。",
      },
      {
        heading: "3. 第三者へのデータ提供",
        body: "ユーザーのデータを第三者に提供・販売・共有することはありません。",
      },
      {
        heading: "4. AI機能について",
        body: "有料プラン（Clear / ClearPro）のAI機能利用時、支出データの要約情報が外部APIに送信される場合があります。個人を特定できる情報は送信されません。",
      },
      {
        heading: "5. 広告について",
        body: "本アプリには広告は表示されません。",
      },
      {
        heading: "6. アナリティクスについて",
        body: "アプリ改善のために匿名の利用統計情報を収集する場合があります。",
      },
      {
        heading: "7. お子様のプライバシー",
        body: "本アプリは13歳未満のお子様を対象としていません。",
      },
      {
        heading: "8. データの削除",
        body: "設定画面またはアプリのアンインストールにより、すべてのデータを削除できます。",
      },
      {
        heading: "9. ポリシーの変更",
        body: "重要な変更がある場合はアプリ内でお知らせします。",
      },
      {
        heading: "10. お問い合わせ",
        body: "hareru.info11@gmail.com / Lunalism",
      },
    ],
    contactLabel: "お問い合わせ",
    developer: "開発者",
  },
  en: {
    back: "← Home",
    title: "Privacy Policy",
    updated: "Last Updated: February 28, 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "We store only expense, income, and transfer records, budget settings, category settings, and app preferences locally on your device. We do not collect personal information such as your name, email address, or location.",
      },
      {
        heading: "2. Where Data Is Stored",
        body: "All data is stored exclusively on your device. No data is transmitted to external servers. There is no bank account integration.",
      },
      {
        heading: "3. Data Sharing with Third Parties",
        body: "We do not provide, sell, or share your data with any third parties.",
      },
      {
        heading: "4. AI Features",
        body: "When using AI features in paid plans (Clear / ClearPro), summarized spending data may be sent to an external API. No personally identifiable information is transmitted.",
      },
      {
        heading: "5. Advertising",
        body: "This app does not display any advertisements.",
      },
      {
        heading: "6. Analytics",
        body: "We may collect anonymous usage statistics to improve the app.",
      },
      {
        heading: "7. Children's Privacy",
        body: "This app is not intended for children under 13 years of age.",
      },
      {
        heading: "8. Data Deletion",
        body: "You can delete all data through the settings screen or by uninstalling the app.",
      },
      {
        heading: "9. Policy Changes",
        body: "We will notify you of significant changes within the app.",
      },
      {
        heading: "10. Contact",
        body: "hareru.info11@gmail.com / Lunalism",
      },
    ],
    contactLabel: "Contact",
    developer: "Developer",
  },
  ko: {
    back: "← 홈",
    title: "개인정보보호방침",
    updated: "최종 업데이트: 2026년 2월 28일",
    sections: [
      {
        heading: "1. 수집하는 정보",
        body: "지출·수입·이체 기록, 예산 설정, 카테고리 설정, 앱 설정만 기기 내에 저장합니다. 이름·이메일·위치 정보 등 개인정보는 수집하지 않습니다.",
      },
      {
        heading: "2. 데이터 저장 위치",
        body: "모든 데이터는 사용자의 기기에만 저장됩니다. 외부 서버로 전송되지 않으며 은행 계좌 연동도 없습니다.",
      },
      {
        heading: "3. 제3자 데이터 제공",
        body: "사용자의 데이터를 제3자에게 제공·판매·공유하지 않습니다.",
      },
      {
        heading: "4. AI 기능",
        body: "유료 플랜(Clear / ClearPro)의 AI 기능 사용 시 지출 데이터 요약 정보가 외부 API로 전송될 수 있습니다. 개인을 식별할 수 있는 정보는 전송되지 않습니다.",
      },
      {
        heading: "5. 광고",
        body: "본 앱에는 광고가 표시되지 않습니다.",
      },
      {
        heading: "6. 분석",
        body: "앱 개선을 위해 익명의 이용 통계를 수집할 수 있습니다.",
      },
      {
        heading: "7. 아동 개인정보",
        body: "본 앱은 13세 미만 아동을 대상으로 하지 않습니다.",
      },
      {
        heading: "8. 데이터 삭제",
        body: "설정 화면 또는 앱 삭제를 통해 모든 데이터를 삭제할 수 있습니다.",
      },
      {
        heading: "9. 방침 변경",
        body: "중요한 변경 사항은 앱 내에서 알려드립니다.",
      },
      {
        heading: "10. 문의",
        body: "hareru.info11@gmail.com / Lunalism",
      },
    ],
    contactLabel: "문의",
    developer: "개발자",
  },
} as const;

export default async function PrivacyPage() {
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
