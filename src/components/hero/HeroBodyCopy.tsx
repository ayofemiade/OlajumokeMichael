"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroBodyCopy — Supporting editorial proposition statement.
 *
 * Approved copy:
 * "Across entrepreneurship support, higher education and an international
 *  grants portfolio, I have designed programs, built and strengthened
 *  the operating systems they depend on, led the people and partners who
 *  deliver them, and evaluated what the evidence shows."
 */
export function HeroBodyCopy() {
  const reduced = useReducedMotion();

  return (
    <motion.p
      className="font-serif font-light text-ink/80 leading-[1.7] text-left text-base sm:text-lg lg:text-[1.18rem] max-w-2xl"
      initial={{ opacity: 0, y: reduced ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: reduced ? 0 : 0.25,
      }}
    >
      Across entrepreneurship support, higher education and an international grants portfolio, I have designed programs, built and strengthened the operating systems they depend on, led the people and partners who deliver them, and evaluated what the evidence shows.
    </motion.p>
  );
}
