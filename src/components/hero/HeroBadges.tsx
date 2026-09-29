"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, gentleEase } from "@/lib/motion";

/**
 * Editorial Floating Credential Badges for the Hero Section.
 * Adds visual interest, editorial authority, and layered depth.
 */
export function HeroBadges() {
  const reduced = useReducedMotion();

  const floatAnimation1 = reduced
    ? {}
    : {
        y: [0, -8, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  const floatAnimation2 = reduced
    ? {}
    : {
        y: [0, 8, 0],
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        },
      };

  const badgeVariants1 = {
    hidden: { opacity: 0, x: reduced ? 0 : 20, scale: reduced ? 1 : 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : duration.slow,
        ease: gentleEase,
        delay: reduced ? 0 : 0.5,
      },
    },
  };

  const badgeVariants2 = {
    hidden: { opacity: 0, x: reduced ? 0 : -20, scale: reduced ? 1 : 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : duration.slow,
        ease: gentleEase,
        delay: reduced ? 0 : 0.65,
      },
    },
  };

  return (
    <>
      {/* Badge 1: Top Right Floating Credential (Desktop only) */}
      <motion.div
        variants={badgeVariants1}
        initial="hidden"
        animate="visible"
        className="hidden xl:block absolute top-[18%] right-[4%] z-20 pointer-events-none"
      >
        <motion.div
          animate={floatAnimation1}
          className="bg-paper/85 backdrop-blur-md border border-line/80 px-5 py-3.5 shadow-[0_10px_30px_rgba(36,37,43,0.06)] flex items-center gap-3.5"
        >
          <div className="w-2 h-2 rounded-full bg-plum" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-plum">
              Program Infrastructure
            </span>
            <span className="font-serif text-xs text-ink/80 font-normal">
              Strategy • CRM • Operations
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Badge 2: Lower Left Floating Credential (Desktop only) */}
      <motion.div
        variants={badgeVariants2}
        initial="hidden"
        animate="visible"
        className="hidden lg:block xl:block absolute bottom-[22%] left-[46%] z-20 pointer-events-none"
      >
        <motion.div
          animate={floatAnimation2}
          className="bg-paper/85 backdrop-blur-md border border-line/80 px-4 py-3 shadow-[0_10px_30px_rgba(36,37,43,0.06)] flex items-center gap-3"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-clay" />
          <div className="flex flex-col">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-clay">
              Evidence-Bounded
            </span>
            <span className="font-serif text-xs text-slate font-normal">
              SBA-Supported Portfolio
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
