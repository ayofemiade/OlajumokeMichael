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
      <h1
        className="font-serif font-normal text-ink leading-[1.12] tracking-tight"
        style={{ fontSize: "clamp(2.1rem, 3.3vw, 3.25rem)" }}
      >
        I turn complex program ideas into{" "}
        <em className="font-serif" style={{ fontStyle: "italic" }}>
          structures
        </em>{" "}
        that can be implemented, evaluated and improved.
      </h1>
    </motion.div>
  );
}
