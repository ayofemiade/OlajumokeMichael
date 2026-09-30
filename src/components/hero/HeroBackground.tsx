"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroBackground — Decorative editorial background letterforms.
 *
 * "PROGRAM" and "STRATEGY" are large, low-opacity structural letterforms
 * positioned in the right portion of the canvas, partially behind the portrait.
 * They are visual architecture — not readable content.
 * Desktop only. Aria-hidden.
 */
export function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="hidden md:block absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* "PROGRAM" — upper right quadrant, bleeds beyond viewport edge */}
      <motion.span
        className="absolute top-[4%] right-[-6%] font-serif font-light text-ink leading-none tracking-tight uppercase whitespace-nowrap"
        style={{ fontSize: "clamp(5rem, 12vw, 14rem)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.065 }}
        transition={{
          duration: reduced ? 0 : 1.6,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.3,
        }}
      >
        PROGRAM
      </motion.span>

      {/* "STRATEGY" — lower right quadrant, sits below portrait base */}
      <motion.span
        className="absolute bottom-[3%] right-[-5%] font-serif font-light text-ink leading-none tracking-tight uppercase whitespace-nowrap"
        style={{ fontSize: "clamp(5rem, 12vw, 14rem)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.065 }}
        transition={{
          duration: reduced ? 0 : 1.6,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.45,
        }}
      >
        STRATEGY
      </motion.span>
    </div>
  );
}
