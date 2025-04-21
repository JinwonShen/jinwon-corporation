import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss"

export const metadata: Metadata = {
  title: '진원상사',
  description: '비닐 가공 23년, 정직과 신뢰로 만들어낸 품질',
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
