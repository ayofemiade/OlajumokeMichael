"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroPortraitProps {
  variant: "desktop" | "mobile";
}

const PORTRAIT_SRC = "/images/IMG_1941.jpg";
const PORTRAIT_ALT = "Olajumoke Michael — Strategist & Program Architect";

/**
 * HeroPortrait — Monochrome portrait anchored to the left of the hero.
 *
 * Desktop: a framed panel anchored to the bottom-left of the hero.
 *   - Frame = top 83% of the photo (aspect 3427/4000): head, raised arm and
 *     hair are fully visible; the table is cropped out.
 *   - Width comes from the section's --hero-photo-w variable (max 50vw, and
 *     limited by viewport height so the head never meets the wordmark). The
 *     text column is offset from the same variable, so the two always sit
 *     close together at every screen size.
 *   - The frame overhangs the section bottom by 8vh; that part is already
 *     faded out by the mask.
 *   - Greyscale via CSS (source file stays in colour).
 *   - mix-blend-multiply turns the white studio backdrop into the page's
 *     paper colour, so there is no visible rectangle.
 *   - Masks feather the right and bottom edges.
 *
 * Mobile: in-flow, full width, face-priority crop, same monochrome treatment.
 *
 * Face is preserved exactly. No facial alteration.
 */
export function HeroPortrait({ variant }: HeroPortraitProps) {
  const reduced = useReducedMotion();

  if (variant === "desktop") {
    const mask =
      "linear-gradient(to right, #000 54%, transparent 96%), linear-gradient(to bottom, #000 58%, transparent 96%)";
    return (
      <motion.div
        className="hidden md:block absolute left-0 z-10 pointer-events-none overflow-hidden mix-blend-multiply"
        style={{
          width: "var(--hero-photo-w)",
          aspectRatio: "3427 / 4000",
          bottom: "-8vh",
          maskImage: mask,
          WebkitMaskImage: mask,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduced ? 0 : 1.2,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
          delay: reduced ? 0 : 0.2,
        }}
      >
        <Image
          src={PORTRAIT_SRC}
          alt={PORTRAIT_ALT}
          fill
          className="object-cover grayscale contrast-[1.05]"
          style={{ objectPosition: "30% 0%" }}
          priority
          loading="eager"
          quality={85}
          sizes="50vw"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="md:hidden relative w-full overflow-hidden mix-blend-multiply"
      style={{ height: "58vh", maxHeight: "440px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        delay: reduced ? 0 : 0.2,
      }}
    >
      <Image
        src={PORTRAIT_SRC}
        alt={PORTRAIT_ALT}
        fill
        className="object-cover grayscale contrast-[1.05]"
        style={{ objectPosition: "50% 22%" }}
        priority
        loading="eager"
        sizes="100vw"
      />
    </motion.div>
  );
}
