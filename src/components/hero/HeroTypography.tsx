"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { elegantEase, duration } from "@/lib/motion";

/**
 * Editorial Typography Component for the Hero Section.
 * Enforces 100% exact copy immutability with high-precision stagger animations.
 */
export function HeroTypography() {
  const reduced = useReducedMotion();

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduced ? 0 : 0.08,
        delayChildren: reduced ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.slow,
        ease: elegantEase,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: reduced ? 1 : 0.95, y: reduced ? 0 : 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center relative z-20"
    >
      {/* Eyebrow Label with Architectural Line Accent & Active Indicator */}
      <motion.div variants={badgeVariants} className="mb-5 sm:mb-7 flex items-center gap-3">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-plum opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-plum"></span>
        </span>
        <span className="w-6 h-[1px] bg-plum/60 inline-block" aria-hidden="true" />
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-plum">
          STRATEGIST &amp; PROGRAM ARCHITECT
        </span>
      </motion.div>

      {/* Main Display Headline (IMMUTABLE COPY) */}
      <motion.h1
        variants={itemVariants}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] text-ink font-normal leading-[1.08] tracking-tight max-w-full lg:max-w-3xl"
      >
        I turn{" "}
        <span className="relative inline-block font-serif italic text-plum font-normal transition-colors duration-500 hover:text-clay group cursor-default">
          complex
          <span className="absolute bottom-1 left-0 w-full h-[2px] bg-plum/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </span>{" "}
        program ideas into structures that can be implemented, evaluated and improved.
      </motion.h1>

      {/* Supporting Editorial Paragraph (IMMUTABLE COPY) */}
      <motion.p
        variants={itemVariants}
        className="mt-6 sm:mt-8 font-serif text-base sm:text-lg lg:text-xl text-slate leading-relaxed max-w-xl lg:max-w-2xl font-light"
      >
        I work across program strategy, program and service design, implementation, operations and evaluation—connecting the thinking behind an initiative with the structures, delivery and evidence needed to move it forward.
      </motion.p>
    </motion.div>
  );
}
