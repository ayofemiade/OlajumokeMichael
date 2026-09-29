"use client";

import React from "react";
import { HeroBackgroundCanvas } from "@/components/hero/HeroBackgroundCanvas";
import { HeroTypography } from "@/components/hero/HeroTypography";
import { HeroActions } from "@/components/hero/HeroActions";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
import { HeroBadges } from "@/components/hero/HeroBadges";
import { HeroScrollIndicator } from "@/components/hero/HeroScrollIndicator";

/**
 * Editorial Luxury Master Hero Section for Olajumoke Michael.
 *
 * Modular Component Architecture:
 * - HeroBackgroundCanvas: Architectural grid, ambient glow mesh, watermark monogram
 * - HeroTypography: Staggered entrance, Newsreader italic styling, 100% immutable copy
 * - HeroActions: Interactive magnetic CTAs with directional triggers and micro-ledger badge
 * - HeroPortrait: Isolated transparent cutout with 3D mouse parallax tilt & backplate frame
 * - HeroBadges: Floating credential overlays for high authority depth
 * - HeroScrollIndicator: Minimal scroll prompt anchor
 */
export function HeroSection() {
  return (
    <section className="relative w-full bg-paper min-h-[calc(100vh-5rem)] lg:min-h-[90vh] xl:min-h-[92vh] flex flex-col justify-between overflow-hidden border-b border-line/40">
      
      {/* 1. Background Multi-Layer Canvas */}
      <HeroBackgroundCanvas />

      {/* 2. Floating Credential Overlays */}
      <HeroBadges />

      {/* 3. Main Master Grid Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 md:px-12 lg:px-20 pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-12 sm:pb-16 flex-grow flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-end h-full">

          {/* Left Column: Editorial Content & Interactive CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center pb-6 sm:pb-8 lg:pb-16 relative z-20">
            <HeroTypography />
            <HeroActions />
          </div>

          {/* Right Column: Dominant 3D Parallax Portrait */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-10 w-full flex justify-center lg:justify-end items-end h-full">
            <HeroPortrait />
          </div>

        </div>
      </div>

      {/* 4. Bottom Scroll Indicator Anchor */}
      <HeroScrollIndicator />

    </section>
  );
}
