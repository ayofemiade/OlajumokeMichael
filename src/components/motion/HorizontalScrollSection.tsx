"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
}

export function HorizontalScrollSection({
  children,
  className,
  triggerClassName,
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    
    if (!container || !track) return;

    // Calculate how far to move the track
    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      // We want to scroll exactly enough to show the end of the track
      return -(trackWidth - windowWidth);
    };

    // Create the horizontal scroll animation
    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${track.scrollWidth - window.innerWidth}`,
      pin: true,
      animation: tween,
      scrub: 1, // Smooth scrubbing
      invalidateOnRefresh: true, // Recalculate on resize
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn("overflow-hidden h-screen flex items-center", triggerClassName)}>
      <div 
        ref={trackRef} 
        className={cn("flex flex-nowrap h-full will-change-transform items-center", className)}
      >
        {children}
      </div>
    </div>
  );
}
