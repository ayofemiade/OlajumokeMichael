"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroPortraitProps {
  variant: "desktop" | "mobile";
}

/**
 * HeroPortrait — The central visual anchor of the editorial hero.
 *
 * Desktop: absolutely positioned, full hero height, centred at 55% of viewport.
 * Portrait sits between the headline (left) and body copy (right) columns,
 * with its left edge slightly behind the headline text creating editorial depth.
 * Subtle scroll parallax on desktop.
 *
 * Mobile: in-flow, full viewport width, face-cropped to 55vh height.
 * Uses object-cover with face-priority object-position.
 *
 * Face is preserved exactly. No facial alteration.
 */
export function HeroPortrait({ variant }: HeroPortraitProps) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Very subtle parallax: portrait moves up 35px over 600px of scroll
  const portraitY = useTransform(scrollY, [0, 600], [0, reduced ? 0 : -35]);

  /* ─── Desktop: absolute, anchored bottom, top cleanly below nav ─ */
  if (variant === "desktop") {
    return (
      <motion.div
        className="hidden md:block absolute bottom-0 z-10 pointer-events-none"
        style={{
          // Height constrained so portrait top edge stays below header (y >= 105px)
          height: "82%",
          maxHeight: "calc(100vh - 105px)",
          // Width auto-calculated from aspect ratio: 2326×2672 original
          aspectRatio: "2326 / 2672",
          // Positioned horizontally at 54% of viewport width
          left: "54%",
          // Scroll parallax applied as motion value
          y: reduced ? 0 : portraitY,
        }}
        // Entrance: opacity + subtle scale, x stays constant at -50%
        initial={{ opacity: 0, scale: reduced ? 1 : 0.98, x: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%" }}
        transition={{
          duration: reduced ? 0 : 1.1,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          delay: reduced ? 0 : 0.35,
        }}
      >
        <Image
          src="/images/hero_pic_web.webp"
          alt="Olajumoke Michael — Strategist & Program Architect"
          fill
          className="object-contain object-bottom"
          priority
          loading="eager"
          sizes="(max-width: 1280px) 50vw, 55vw"
        />
      </motion.div>
    );
  }

  /* ─── Mobile: in-flow, full width, face prominently cropped ──────── */
  return (
    <motion.div
      className="md:hidden relative w-full overflow-hidden"
      style={{ height: "58vh", maxHeight: "440px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        delay: reduced ? 0 : 0.2,
      }}
    >
      <Image
        src="/images/hero_pic_web.webp"
        alt="Olajumoke Michael — Strategist & Program Architect"
        fill
        className="object-cover"
        style={{ objectPosition: "50% 10%" }}
        priority
        loading="eager"
        sizes="100vw"
      />
    </motion.div>
  );
}
