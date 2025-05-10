"use client";

import Lenis from "@studio-freight/lenis/types";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
