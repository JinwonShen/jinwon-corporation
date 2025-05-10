"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import useSmoothScroll from "./hooks/useSmoothScroll";

export const metadata: Metadata = {
  title: "진원상사",
  description: "비닐 가공 23년, 정직과 신뢰로 만들어낸 품질",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* crossOrigin="anonymous" ???? */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
