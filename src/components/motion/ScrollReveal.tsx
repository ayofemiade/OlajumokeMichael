"use client";

import React, { useRef } from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  elegantEase,
  gentleEase,
  duration,
  revealY,
  makeRevealVariants,
  makeStaggerContainer,
} from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Personality controls the emotional quality of the entrance.
 *
 * "standard"   → professional, deliberate. Used for most sections.
 * "structural" → section stagger, slightly shorter distance. Architecture section.
 * "quiet"      → very slow, barely moves. The Quiet Fire section.
 * "strong"     → hero-level entrance, more distance, more duration.
 * "none"       → renders children as-is, no motion. Use when stillness is right.
 */
type Personality = "standard" | "structural" | "quiet" | "strong" | "none";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: React.ReactNode;
  personality?: Personality;
  stagger?: boolean;
  staggerDelay?: number;
  delay?: number;
  className?: string;
  /** How much of the element must be visible before triggering */
  margin?: string;
}

function getPersonalityConfig(p: Personality) {
  switch (p) {
    case "strong":
      return makeRevealVariants(revealY.strong, duration.slow, elegantEase);
    case "structural":
      return makeRevealVariants(revealY.subtle, duration.medium, elegantEase);
    case "quiet":
      return makeRevealVariants(0, duration.deliberate, gentleEase); // no y, just opacity
    case "standard":
    default:
      return makeRevealVariants(revealY.standard, duration.slow, elegantEase);
  }
}

export function ScrollReveal({
  children,
  personality = "standard",
  stagger = false,
  staggerDelay = 0.12,
  delay: delayProp = 0,
  className,
  margin = "-8% 0px",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as never });
  const reduced = useReducedMotion();

  // When reduced motion is preferred: render without any animation
  if (personality === "none" || reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const itemVariants = getPersonalityConfig(personality);

  // Add delay to the item variants
  const delayedVariants = {
    hidden: itemVariants.hidden,
    visible: {
      ...itemVariants.visible,
      transition: {
        ...(itemVariants.visible.transition as object),
        delay: delayProp,
      },
    },
  };

  if (stagger) {
    const containerVariants = {
      ...makeStaggerContainer(staggerDelay),
      visible: {
        ...makeStaggerContainer(staggerDelay).visible,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delayProp,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={itemVariants}>
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={delayedVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
