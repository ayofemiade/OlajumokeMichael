"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { elegantEase, gentleEase, duration } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Editorial Luxury Hero Section for Olajumoke Michael.
 *
 * Visual Concept: "THE EDITORIAL PORTRAIT"
 * - High-contrast editorial display headline with signature italic styling on "complex"
 * - Oversized, isolated portrait (alpha transparent) anchored toward the bottom right
 * - Warm paper background canvas with subtle architectural grid lines
 * - Immutable content preservation for headline, paragraph, navigation, and CTAs
 * - Fully responsive across mobile, tablet, desktop, and ultra-wide viewports
 */
export function HeroSection() {
  const reduced = useReducedMotion();

  // Entrance Motion Variants
  const eyebrowVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.05,
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.slow,
        ease: elegantEase,
        delay: reduced ? 0 : 0.12,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.28,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.42,
      },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 40, scale: reduced ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : 1.1,
        ease: gentleEase,
        delay: reduced ? 0 : 0.2,
      },
    },
  };

  return (
    <section className="relative w-full bg-paper min-h-[calc(100vh-5rem)] lg:min-h-[88vh] xl:min-h-[92vh] flex flex-col justify-between overflow-hidden border-b border-line/40">
      
      {/* Background Decorative Architecture Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#D8D2CA_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_75%)]" />

      {/* Main Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-0 flex-grow flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end h-full">

          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center pb-12 sm:pb-16 lg:pb-24 relative z-20">
            
            {/* Eyebrow Label */}
            <motion.div
              variants={eyebrowVariants}
              initial="hidden"
              animate="visible"
              className="mb-4 sm:mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-plum/60 inline-block" />
              <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-plum">
                Strategist &amp; Program Architect
              </span>
            </motion.div>

            {/* Main Headline (IMMUTABLE CONTENT) */}
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ink font-normal leading-[1.08] tracking-tight max-w-full lg:max-w-3xl"
            >
              I turn{" "}
              <span className="font-serif italic text-plum font-normal transition-colors duration-500 hover:text-clay">
                complex
              </span>{" "}
              program ideas into structures that can be implemented, evaluated and improved.
            </motion.h1>

            {/* Supporting Paragraph (IMMUTABLE CONTENT) */}
            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 sm:mt-8 font-serif text-base sm:text-lg lg:text-xl text-slate leading-relaxed max-w-xl lg:max-w-2xl"
            >
              I work across program strategy, program and service design, implementation, operations and evaluation—connecting the thinking behind an initiative with the structures, delivery and evidence needed to move it forward.
            </motion.p>

            {/* Calls to Action (IMMUTABLE DESTINATIONS & LABELS) */}
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <a
                href="/selected-work"
                className="inline-flex items-center justify-center bg-ink text-paper px-8 py-4 font-sans uppercase tracking-[0.18em] text-xs font-semibold hover:bg-plum transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>View selected work</span>
              </a>
              <a
                href="/experience"
                className="inline-flex items-center justify-center bg-transparent border border-line text-ink px-8 py-4 font-sans uppercase tracking-[0.18em] text-xs font-semibold hover:border-ink hover:bg-soft-stone/50 transition-all duration-300"
              >
                <span>Explore my experience</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Dominant Oversized Portrait */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-10 w-full flex justify-center lg:justify-end items-end h-full pt-4 lg:pt-0">
            <motion.div
              variants={portraitVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[620px] 2xl:max-w-[680px] flex justify-center lg:justify-end"
            >
              <div className="relative w-full aspect-[2326/2672] flex items-end">
                <Image
                  src="/images/hero_pic_web.webp"
                  alt="Olajumoke Michael — Strategist & Program Architect"
                  width={2326}
                  height={2672}
                  className="w-full h-auto object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(36,37,43,0.08)]"
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, (max-width: 1280px) 540px, 620px"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
}
