"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, elegantEase } from "@/lib/motion";

/**
 * Editorial Scroll Indicator component for the Hero Section.
 */
export function HeroScrollIndicator() {
  const reduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.75,
      },
    },
  };

  const lineAnimation = reduced
    ? {}
    : {
        scaleY: [0, 1, 0],
        originY: [0, 0, 1],
        transition: {
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden sm:flex items-center gap-3 absolute bottom-6 left-6 sm:left-8 md:left-12 lg:left-20 z-20 pointer-events-none"
    >
      <div className="w-[1px] h-10 bg-line/60 relative overflow-hidden">
        <motion.div
          animate={lineAnimation}
          className="w-full h-full bg-plum"
        />
      </div>
      <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-slate/70 font-semibold">
        SCROLL TO EXPLORE
      </span>
    </motion.div>
  );
}
