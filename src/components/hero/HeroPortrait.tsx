"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gentleEase } from "@/lib/motion";

/**
 * Editorial Dominant Portrait Component for the Hero Section.
 * Features 3D mouse parallax tracking, transparent cutout rendering,
 * and architectural backplate framing for an Awwwards-level feel.
 */
export function HeroPortrait() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid mouse movement
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Map spring coordinates to subtle transform offsets
  const portraitRotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const portraitRotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const portraitTranslateX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const portraitTranslateY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (event.clientX - rect.left) / width - 0.5;
    const yPct = (event.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    if (reduced) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const portraitVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 45, scale: reduced ? 1 : 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : 1.15,
        ease: gentleEase,
        delay: reduced ? 0 : 0.15,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 w-full flex justify-center lg:justify-end items-end h-full pt-4 lg:pt-0 perspective-[1000px]"
    >
      <motion.div
        variants={portraitVariants}
        initial="hidden"
        animate="visible"
        style={{
          rotateX: reduced ? 0 : portraitRotateX,
          rotateY: reduced ? 0 : portraitRotateY,
          x: reduced ? 0 : portraitTranslateX,
          y: reduced ? 0 : portraitTranslateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[620px] 2xl:max-w-[660px] flex justify-center lg:justify-end"
      >
        {/* Architectural Backplate Arch Frame Accent */}
        <div 
          className="absolute bottom-0 left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 w-[85%] h-[80%] rounded-t-[200px] border border-plum/15 bg-gradient-to-b from-soft-stone/40 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Ambient Subtle Back Glow */}
        <div 
          className="absolute bottom-10 right-10 w-[70%] h-[70%] bg-plum/5 rounded-full blur-3xl pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* Portrait Image Container */}
        <div className="relative w-full aspect-[2326/2672] flex items-end z-10">
          <Image
            src="/images/hero_pic_web.webp"
            alt="Olajumoke Michael — Strategist & Program Architect"
            width={2326}
            height={2672}
            className="w-full h-auto object-contain object-bottom filter drop-shadow-[0_25px_40px_rgba(36,37,43,0.12)] transition-filter duration-500"
            priority
            loading="eager"
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, (max-width: 1280px) 540px, 620px"
          />
        </div>
      </motion.div>
    </div>
  );
}
