"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Editorial Luxury Background Canvas component for the Hero Section.
 * Includes architectural dot grid, ambient organic radial gradients,
 * and oversized watermark typography for visual depth.
 */
export function HeroBackgroundCanvas() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Parallax background watermark motion on scroll
  const watermarkY = useTransform(scrollY, [0, 800], [0, 120]);
  const gradientY = useTransform(scrollY, [0, 800], [0, -60]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Architectural Fine Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#C3BDB4_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_80%)]" 
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Radial Glow Behind Portrait Area */}
      <motion.div
        style={{ y: reduced ? 0 : gradientY }}
        className="absolute -right-20 top-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-plum/10 via-clay/5 to-transparent blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Soft Ambient Corner Glow Top Left */}
      <div
        className="absolute -left-32 -top-32 w-[500px] h-[500px] rounded-full bg-soft-stone/80 blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Giant Ambient Watermark Text (Subtle Luxury Monogram / Text) */}
      <motion.div
        style={{ y: reduced ? 0 : watermarkY }}
        className="absolute top-[8%] left-[-2%] right-[-2%] flex justify-between items-center opacity-[0.035] whitespace-nowrap overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-serif text-[14vw] font-light leading-none tracking-tighter text-ink uppercase">
          STRATEGIST
        </span>
        <span className="font-serif text-[14vw] font-light leading-none tracking-tighter text-plum uppercase italic ml-12">
          ARCHITECT
        </span>
      </motion.div>

      {/* 5. Structural Thin Grid Alignment Lines */}
      <div className="max-w-[1440px] w-full mx-auto h-full px-6 sm:px-8 md:px-12 lg:px-20 relative">
        <div className="w-[1px] h-full bg-line/20 absolute left-6 sm:left-8 md:left-12 lg:left-20 top-0 hidden sm:block" />
        <div className="w-[1px] h-full bg-line/20 absolute right-6 sm:right-8 md:right-12 lg:right-20 top-0 hidden lg:block" />
      </div>
    </div>
  );
}
