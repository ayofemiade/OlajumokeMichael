"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroActions — 3-tiered action hierarchy:
 * 1. Primary filled Coral button: "View selected work" → /selected-work
 * 2. Secondary outlined Ivory/Marigold button: "Discuss a role or project" → /contact
 * 3. Tertiary underlined text link: "Explore my experience" → /experience
 */
export function HeroActions() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: reduced ? 0 : 0.35,
      }}
      className="flex flex-col gap-6 pt-2"
    >
      {/* Primary & Secondary Action Pair */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
        <Link
          href="/selected-work"
          className="inline-flex items-center justify-center bg-coral text-white px-8 py-3.5 font-sans uppercase tracking-[0.16em] text-xs font-semibold hover:bg-ink hover:text-white transition-all duration-300 shadow-[0_10px_25px_rgba(224,90,71,0.22)] text-center rounded-sm"
        >
          View selected work
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-ink/20 text-ink hover:border-ink hover:bg-ink/[0.04] px-8 py-3.5 font-sans uppercase tracking-[0.16em] text-xs font-semibold transition-all duration-300 text-center rounded-sm"
        >
          Discuss a role or project
        </Link>
      </div>

      {/* Tertiary Pathway */}
      <div className="flex items-center">
        <Link
          href="/experience"
          className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] font-medium text-ink/65 hover:text-coral transition-colors duration-200"
        >
          <span className="underline underline-offset-4">Explore my experience</span>
          <span
            className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-200"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
