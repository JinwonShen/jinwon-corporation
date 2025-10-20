"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { ReactNode } from "react";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function AppShell({ children }: { children: ReactNode }) {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
