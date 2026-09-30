"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroBodyCopy — Supporting editorial paragraph.
 *
 * Copy is 100% immutable:
 * "I work across program strategy, program and service design,
 *  implementation, operations and evaluation—connecting the thinking
 *  behind an initiative with the structures, delivery and evidence
 *  needed to move it forward."
 *
 * Desktop: right column of the hero, narrow width (~19% of content width).
 * Mobile: flows below the headline, full width.
 *
 * Typography: Newsreader serif, light weight, relaxed leading.
 */
export function HeroBodyCopy() {
  const reduced = useReducedMotion();

  return (
    <motion.p
      className="font-serif font-light text-slate leading-relaxed"
      style={{ fontSize: "clamp(0.98rem, 1.2vw, 1.15rem)" }}
      initial={{ opacity: 0, y: reduced ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 1.0,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        delay: reduced ? 0 : 0.65,
      }}
    >
      I work across program strategy, program and service design,
      implementation, operations and evaluation—connecting the thinking
      behind an initiative with the structures, delivery and evidence
      needed to move it forward.
    </motion.p>
  );
}
