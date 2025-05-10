"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function AppShell({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
