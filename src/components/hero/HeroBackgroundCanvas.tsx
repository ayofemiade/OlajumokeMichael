"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Concept 01: The Monumental Monogram Background Canvas.
 * Incorporates:
 * - Fine architectural dot grid overlay
 * - Dual organic radial mesh glow (Plum #503847 + Soft Stone)
 * - Giant low-opacity watermark typography ("STRATEGIST — ARCHITECT")
 * - Structural alignment guidelines
 */
export function HeroBackgroundCanvas() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Gentle scroll parallax for watermark typography
  const watermarkY = useTransform(scrollY, [0, 800], [0, 100]);
  const meshGlowY = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Architectural Fine Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#C3BDB4_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_80%)]"
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Radial Mesh Glow Behind Portrait Area */}
      <motion.div
        style={{ y: reduced ? 0 : meshGlowY }}
        className="absolute -right-24 top-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-plum/10 via-clay/5 to-transparent blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Soft Ambient Top-Left Corner Highlight */}
      <div
        className="absolute -left-36 -top-36 w-[550px] h-[550px] rounded-full bg-soft-stone/80 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Giant Ambient Watermark Serif Monogram (Concept 01 Signature) */}
      <motion.div
        style={{ y: reduced ? 0 : watermarkY }}
        className="absolute top-[6%] left-[-2%] right-[-2%] flex justify-between items-center opacity-[0.038] whitespace-nowrap overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-serif text-[15vw] font-light leading-none tracking-tighter text-ink uppercase">
          STRATEGIST
        </span>
        <span className="font-serif text-[15vw] font-light leading-none tracking-tighter text-plum uppercase italic ml-16">
          ARCHITECT
        </span>
      </motion.div>

      {/* 5. Structural Thin Grid Alignment Hairlines */}
      <div className="max-w-[1440px] w-full mx-auto h-full px-6 sm:px-8 md:px-12 lg:px-20 relative">
        <div className="w-[1px] h-full bg-line/20 absolute left-6 sm:left-8 md:left-12 lg:left-20 top-0 hidden sm:block" />
        <div className="w-[1px] h-full bg-line/20 absolute right-6 sm:right-8 md:right-12 lg:right-20 top-0 hidden lg:block" />
      </div>
    </div>
  );
}
