"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  /** How much the image counter-moves as parent scrolls (0.05–0.2 is subtle) */
  speed?: number;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

/**
 * Wraps an image in a subtle GSAP scroll-driven counter-parallax.
 *
 * The image moves OPPOSITE to the scroll direction at a fraction of the
 * scroll speed. This creates a sense of depth and life without being a
 * cheap parallax trick. The motion is driven by ScrollTrigger scrub,
 * so it's always in sync with the user's exact scroll position.
 *
 * Only active on desktop (lg breakpoint). On mobile, renders as-is.
 */
export function ParallaxImage({
  speed = 0.12,
  className,
  containerClassName,
  children,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Only apply on desktop — touch devices are sensitive to parallax
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      // The image slightly moves upward as the user scrolls down.
      // The container clips it so no overflow is visible.
      const tween = gsap.fromTo(
        inner,
        { yPercent: -speed * 100 },
        {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", containerClassName)}
    >
      <div
        ref={innerRef}
        className={cn("w-full h-[115%] -mt-[7.5%]", className)}
      >
        {children}
      </div>
    </div>
  );
}
