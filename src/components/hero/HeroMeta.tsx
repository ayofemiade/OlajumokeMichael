"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroMetaProps {
  variant: "top" | "left-taxonomy" | "right-taxonomy" | "bottom" | "cta" | "scroll";
}

/**
 * HeroMeta — Structural editorial metadata strips.
 *
 * variant="left-taxonomy":  Upper left metadata strip (PROGRAM STRATEGY / SERVICE DESIGN / OPERATIONS)
 * variant="right-taxonomy": Upper right metadata strip (EVALUATION)
 * variant="top":            Full combined taxonomy strip (for mobile)
 * variant="bottom":         CTA + scroll indicator strip
 */
export function HeroMeta({ variant }: HeroMetaProps) {
  const reduced = useReducedMotion();

  /* ─── Left taxonomy strip: Strategy / Design / Operations / Evaluation ─ */
  if (variant === "left-taxonomy") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 0.9,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.1,
        }}
        className="flex flex-wrap items-center justify-end gap-y-1 tracking-[0.20em] select-none"
      >
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/80">
          PROGRAM STRATEGY
        </span>
        <span className="mx-2 sm:mx-2.5 text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/80">
          SERVICE DESIGN
        </span>
        <span className="mx-2 sm:mx-2.5 text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/80">
          OPERATIONS
        </span>
        <span className="mx-2 sm:mx-2.5 text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/80">
          EVALUATION
        </span>
      </motion.div>
    );
  }

  /* ─── Right taxonomy strip: Evaluation ───────────────────────── */
  if (variant === "right-taxonomy") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 0.9,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.15,
        }}
        className="flex items-center gap-0 tracking-[0.22em] select-none"
      >
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/80">
          EVALUATION
        </span>
      </motion.div>
    );
  }

  /* ─── Top: full taxonomy strip (Mobile) ───────────────────────── */
  if (variant === "top") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 0.9,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.1,
        }}
        className="flex flex-wrap items-center justify-center gap-y-1 gap-x-2 tracking-[0.20em] select-none text-center"
      >
        <span className="font-sans text-[10px] uppercase font-medium text-slate/80">
          PROGRAM STRATEGY
        </span>
        <span className="text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] uppercase font-medium text-slate/80">
          SERVICE DESIGN
        </span>
        <span className="text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] uppercase font-medium text-slate/80">
          OPERATIONS
        </span>
        <span className="text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] uppercase font-medium text-slate/80">
          EVALUATION
        </span>
      </motion.div>
    );
  }

  /* ─── CTA only (desktop, right-aligned under the body copy) ───── */
  if (variant === "cta") {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 0.9,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.95,
        }}
        className="flex flex-col sm:flex-row flex-nowrap items-center sm:items-center justify-center md:justify-end gap-4 sm:gap-6 w-full"
      >
        <Link
          href="/selected-work"
          className="group inline-flex items-center justify-center bg-transparent border border-ink/80 text-ink px-7 py-3.5 font-sans text-xs uppercase tracking-[0.15em] font-semibold hover:bg-ink hover:text-paper transition-colors duration-300 whitespace-nowrap"
          aria-label="View Selected Work"
        >
          <span>View selected work</span>
        </Link>
        <Link
          href="/experience"
          className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-ink hover:text-garnet transition-colors duration-300 whitespace-nowrap"
          aria-label="Explore My Experience"
        >
          <span>Explore my experience</span>
          <span
            className="inline-block transform group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </motion.div>
    );
  }

  /* ─── Scroll cue only (desktop, bottom-right) ─────────────────── */
  if (variant === "scroll") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 1.2 }}
        className="flex items-center justify-end gap-3 text-[10px] font-sans uppercase tracking-[0.2em] font-medium text-slate/60"
      >
        <span>SCROLL</span>
        <span
          className="inline-block"
          aria-hidden="true"
          style={{
            animation: reduced ? "none" : "heroScrollBob 2.5s ease-in-out infinite",
          }}
        >
          ↓
        </span>
      </motion.div>
    );
  }

  /* ─── Bottom: CTA + scroll indicator ─────────────────────────── */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        delay: reduced ? 0 : 0.75,
      }}
      className="flex flex-col items-center justify-center w-full gap-6"
    >
      <div className="flex flex-col sm:flex-row flex-nowrap w-full sm:w-auto items-center gap-4 sm:gap-6 justify-center">
        <Link
          href="/selected-work"
          className="w-full sm:w-auto group inline-flex items-center justify-center bg-transparent border border-ink/80 text-ink px-8 py-3.5 font-sans text-xs uppercase tracking-[0.15em] font-semibold hover:bg-ink hover:text-paper transition-colors duration-300 pointer-events-auto whitespace-nowrap"
          aria-label="View Selected Work"
        >
          <span>View selected work</span>
        </Link>
        <Link
          href="/experience"
          className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-ink hover:text-garnet transition-colors duration-300 pointer-events-auto whitespace-nowrap"
          aria-label="Explore My Experience"
        >
          <span>Explore my experience</span>
          <span
            className="inline-block transform group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      {/* Right: scroll indicator (desktop only) */}
      <div className="hidden md:flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] font-medium text-slate/60 pointer-events-auto">
        <span>SCROLL</span>
        <span
          className="inline-block"
          aria-hidden="true"
          style={{
            animation: reduced ? "none" : "heroScrollBob 2.5s ease-in-out infinite",
          }}
        >
          ↓
        </span>
      </div>
    </motion.div>
  );
}
