// src/hooks/useLenis.ts
"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isDesktop = () =>
      typeof window !== "undefined" && window.innerWidth >= 1150;
    if (!isDesktop()) return;

    const lenis = new Lenis({
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 1150 && lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      } else if (width >= 1150 && !lenisRef.current) {
        const newLenis = new Lenis({ lerp: 0.08 });
        lenisRef.current = newLenis;
        requestAnimationFrame(raf);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
