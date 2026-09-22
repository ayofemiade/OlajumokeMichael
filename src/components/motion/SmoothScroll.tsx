"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// Register ScrollTrigger once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;

    // ─── Critical: connect Lenis scroll position to GSAP ScrollTrigger ───
    // Without this, ScrollTrigger fires at native scroll positions while
    // Lenis reports a smoothed position — causing desync in all animations.
    lenis.on("scroll", ScrollTrigger.update);

    // Feed Lenis into GSAP's ticker so they share the same RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Prevent GSAP from running its own RAF (Lenis drives it now)
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Also tell ScrollTrigger to recalculate after navigation
    ScrollTrigger.refresh();
  }, [pathname]);

  return <>{children}</>;
}
