"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { elegantEase, duration } from "@/lib/motion";

/**
 * Concept 01: Hero Interactive Actions component.
 * Features high-contrast magnetic CTAs with hover fill effects and micro-ledger metadata.
 */
export function HeroActions() {
  const reduced = useReducedMotion();

  const ctaVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.35,
      },
    },
  };

  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 sm:mt-10 flex flex-col items-start gap-6 relative z-20"
    >
      {/* Primary & Secondary Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
        {/* Primary CTA (IMMUTABLE TEXT & DESTINATION) */}
        <a
          href="/selected-work"
          className="group relative inline-flex items-center justify-center bg-ink text-paper px-8 py-4 sm:py-4 font-sans uppercase tracking-[0.18em] text-xs font-semibold overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 rounded-none border border-ink"
        >
          <span className="absolute inset-0 bg-plum translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative z-10 flex items-center gap-2">
            <span>VIEW SELECTED WORK</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </span>
        </a>

        {/* Secondary CTA (IMMUTABLE TEXT & DESTINATION) */}
        <a
          href="/experience"
          className="group relative inline-flex items-center justify-center bg-transparent border border-line text-ink px-8 py-4 sm:py-4 font-sans uppercase tracking-[0.18em] text-xs font-semibold hover:border-ink hover:bg-soft-stone/70 transition-all duration-300 rounded-none"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>EXPLORE MY EXPERIENCE</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
          </span>
        </a>
      </div>

      {/* Editorial Micro-Ledger Badge */}
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-sans text-slate/70 pt-2 border-t border-line/30 w-full max-w-md">
        <span className="w-1.5 h-1.5 rounded-full bg-clay inline-block" aria-hidden="true" />
        <span>Winston-Salem, NC</span>
        <span className="text-line">•</span>
        <span>Open for Strategic Advisory</span>
      </div>
    </motion.div>
  );
}
