"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroHeadline — The primary editorial statement.
 *
 * Copy is 100% immutable:
 * "I turn complex program ideas into structures that can be implemented,
 *  evaluated and improved."
 *
 * "structures" is set in italic per the reference art direction.
 * "complex" retains its editorial weight as plain upright serif.
 *
 * Typography: Newsreader Display Serif, normal weight (~font-normal),
 * tight line-height (1.05), no word-break forced — container width
 * and font size drive the editorial line wrapping organically.
 */
export function HeroHeadline() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 1.0,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        delay: reduced ? 0 : 0.4,
      }}
    >
      {/*
        Desktop: two deliberate lines (split at the natural clause break) that
        stay on one line each from lg up. Font size follows the width of the
        text column (cqw), so both lines always fit. Mobile: flows and centres.
      */}
      <h1 className="font-serif font-normal text-garnet leading-[1.12] tracking-tight text-center md:text-right text-[2.1rem] md:text-[clamp(2.4rem,4.2cqw,5.0rem)]">
        I turn complex program ideas into
        <br className="hidden md:block" />
        <em className="font-serif" style={{ fontStyle: "italic" }}>
          structures
        </em>{" "}
        that can be implemented,
        <br className="hidden md:block" />
        evaluated and improved.
      </h1>
    </motion.div>
  );
}
