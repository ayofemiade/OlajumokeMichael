"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroBackground — Decorative editorial background letterforms.
 *
 * "PROGRAM" and "STRATEGY" are large, bolder structural letterforms
 * positioned in the right portion of the canvas, partially behind the portrait.
 * They are visual architecture — taxonomic, not readable content.
 * Desktop only. Aria-hidden.
 */
export function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="hidden md:block absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* "PROGRAM" — upper right side, strictly right-aligned */}
      <motion.span
        className="absolute font-serif font-normal text-ink leading-none tracking-tight uppercase whitespace-nowrap"
        style={{
          fontSize: "clamp(3.5rem, 6.5vw, 7.5rem)",
          top: "20%",
          right: "3%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{
          duration: reduced ? 0 : 1.6,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.3,
        }}
      >
        PROGRAM
      </motion.span>

      {/* "STRATEGY" — lower right side, strictly right-aligned */}
      <motion.span
        className="absolute font-serif font-normal text-ink leading-none tracking-tight uppercase whitespace-nowrap"
        style={{
          fontSize: "clamp(3.5rem, 6.5vw, 7.5rem)",
          bottom: "12%",
          right: "3%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
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
