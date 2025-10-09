import "@/styles/globals.scss";
import type { Metadata } from "next";
import AppShell from "./AppShell"; // ✅ 클라이언트 래퍼 추가

export const metadata: Metadata = {
  title: "진원상사",
  description: "비닐 가공 23년, 정직과 신뢰로 만들어낸 품질",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <title>진원상사</title>
        <meta name="description" content="비닐 가공 23년, 정직과 신뢰로 만들어낸 품질" />
        <meta
          name="keywords"
          content="진원상사,비닐,봉투,포장재,식품용 봉투,공업용 봉투,식품 포장,김치봉투,배달봉투,주문제작"
        />
        <meta name="author" content="진원상사" />

        {/* Open Graph (Facebook, Kakao, LinkedIn 등에서 공유될 때) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="진원상사" />
        <meta property="og:title" content="진원상사 - 비닐 가공 전문 제조업체" />
        <meta property="og:description" content="정직과 신뢰로 23년, 다양한 봉투 및 포장재 전문" />
        <meta property="og:image" content="https://jinwoncorporation.com/Open-Graph-Basic.jpg" />
        <meta property="og:url" content="https://jinwoncorporation.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="진원상사 - 비닐 가공 전문 제조업체" />
        <meta name="twitter:description" content="정직과 신뢰로 23년, 다양한 봉투 및 포장재 전문" />
        <meta name="twitter:image" content="https://jinwoncorporation.com/OG-twitter.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* 네이버 웹마스터 HTML 태그 */}
        <meta name="naver-site-verification" content="43bf0c0813a08c016ce934ebc50e453fdff6c3f6" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=IBM+Plex+Sans+KR&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
