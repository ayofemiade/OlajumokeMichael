"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface HeroHeadlineProps {
  activeVerb?: "design" | "build" | "lead" | null;
  onHoverVerb?: (verb: "design" | "build" | "lead" | null) => void;
}

/**
 * HeroHeadline — The primary editorial proposition statement.
 *
 * Approved copy:
 * "I design programs, build the systems behind them and lead implementation."
 *
 * Stylized with Three Verbs highlighting (Design: Coral, Build: Marigold, Lead: Sage),
 * interactive hover hooks that illuminate the architectural arches on the stage.
 */
export function HeroHeadline({ activeVerb, onHoverVerb }: HeroHeadlineProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: reduced ? 0 : 0.1,
      }}
    >
      <h1 className="font-serif font-normal text-paper leading-[1.08] tracking-tight text-balance text-left text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[clamp(2.75rem,3.8vw,4.35rem)]">
        I{" "}
        <span
          onMouseEnter={() => onHoverVerb?.("design")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "transition-colors duration-200 cursor-pointer italic font-light inline-block relative",
            activeVerb === "design"
              ? "text-coral underline decoration-coral/60 underline-offset-8"
              : "text-coral-light hover:text-coral"
          )}
        >
          design
        </span>{" "}
        programs,{" "}
        <span
          onMouseEnter={() => onHoverVerb?.("build")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "transition-colors duration-200 cursor-pointer italic font-light inline-block relative",
            activeVerb === "build"
              ? "text-marigold underline decoration-marigold/60 underline-offset-8"
              : "text-marigold-light hover:text-marigold"
          )}
        >
          build
        </span>{" "}
        the systems behind them and{" "}
        <span
          onMouseEnter={() => onHoverVerb?.("lead")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "transition-colors duration-200 cursor-pointer italic font-light inline-block relative",
            activeVerb === "lead"
              ? "text-sage-light underline decoration-sage/60 underline-offset-8"
              : "text-sage-light hover:text-white"
          )}
        >
          lead
        </span>{" "}
        implementation.
      </h1>
    </motion.div>
  );
}
