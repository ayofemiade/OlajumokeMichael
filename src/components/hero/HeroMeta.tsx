"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroMetaProps {
  variant: "top" | "bottom";
}

/**
 * HeroMeta — Structural editorial metadata strips.
 *
 * variant="top":  Taxonomy classification strip.
 *                 "PROGRAM STRATEGY / SERVICE DESIGN / OPERATIONS / EVALUATION"
 *                 Thin uppercase sans-serif — the system behind the person.
 *
 * variant="bottom": CTA + scroll indicator strip.
 *                   "→ EXPLORE SELECTED WORK →" (editorial text link, not a button)
 *                   + "SCROLL ↓" on right (desktop only)
 */
export function HeroMeta({ variant }: HeroMetaProps) {
  const reduced = useReducedMotion();

  /* ─── Top: taxonomy strip ─────────────────────────────────────── */
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
        className="flex items-center gap-0 tracking-[0.24em] select-none"
      >
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/75">
          PROGRAM STRATEGY
        </span>
        <span className="mx-3 sm:mx-4 text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/75">
          SERVICE DESIGN
        </span>
        <span className="mx-3 sm:mx-4 text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/75">
          OPERATIONS
        </span>
        <span className="mx-3 sm:mx-4 text-line/80 font-sans text-[10px]">/</span>
        <span className="font-sans text-[10px] sm:text-[11px] uppercase font-medium text-slate/75">
          EVALUATION
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
      className="flex items-end justify-between"
    >
      {/* Primary editorial CTA — arrow link, not a button */}
      <Link
        href="/selected-work"
        className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-plum transition-colors duration-300"
        aria-label="Explore Selected Work"
      >
        <span
          className="w-8 h-[1px] bg-ink group-hover:bg-plum group-hover:w-12 transition-all duration-300 inline-block"
          aria-hidden="true"
        />
        <span>EXPLORE SELECTED WORK</span>
        <span
          className="inline-block transform group-hover:translate-x-1 transition-transform duration-300"
          aria-hidden="true"
        >
          →
        </span>
      </Link>

      {/* Right: scroll indicator (desktop only) */}
      <div className="hidden md:flex items-center gap-3 text-[10px] font-sans uppercase tracking-[0.2em] font-medium text-slate/60">
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
