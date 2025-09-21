"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

type LenisProviderProps = { children: React.ReactNode };

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,               // kontrol durasi scroll (detik)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // contoh easing
      smooth: true,
      direction: "vertical",
    });

    lenisRef.current = lenis;
    // expose for debugging / usage (optional)
    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
