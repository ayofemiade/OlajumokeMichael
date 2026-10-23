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
      <h1 className="font-serif font-normal text-ink leading-[1.12] tracking-tight text-balance text-left text-[2rem] sm:text-[2.35rem] md:text-[2.75rem] lg:text-[clamp(2.35rem,3.1vw,3.65rem)]">
        I{" "}
        <span
          onMouseEnter={() => onHoverVerb?.("design")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "transition-colors duration-200 cursor-pointer italic font-light inline-block relative text-coral",
            activeVerb === "design" && "underline decoration-coral/60 underline-offset-8"
          )}
        >
          design
        </span>{" "}
        programs,{" "}
        <span
          onMouseEnter={() => onHoverVerb?.("build")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "transition-colors duration-200 cursor-pointer italic font-light inline-block relative text-[#B87010]",
            activeVerb === "build" && "underline decoration-[#B87010]/60 underline-offset-8"
          )}
        >
          build
        </span>{" "}
        the systems behind them and{" "}
        <span
          onMouseEnter={() => onHoverVerb?.("lead")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "transition-colors duration-200 cursor-pointer italic font-light inline-block relative text-[#3F664F]",
            activeVerb === "lead" && "underline decoration-[#3F664F]/60 underline-offset-8"
          )}
        >
          lead
        </span>{" "}
        implementation.
      </h1>
    </motion.div>
  );
}
