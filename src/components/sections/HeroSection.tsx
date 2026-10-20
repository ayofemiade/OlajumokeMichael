"use client";

import { useState } from "react";
import { HeroArchitecturalStage } from "@/components/hero/HeroArchitecturalStage";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroBodyCopy } from "@/components/hero/HeroBodyCopy";
import { HeroActions } from "@/components/hero/HeroActions";

/**
 * HeroSection — Cinematic Architectural Stage
 *
 * Concept: "Three Verbs, Three Arches"
 * - Deep velvet aubergine field with luminous radial stage warmth
 * - Three nested architectural arches representing Design (Coral), Build (Marigold), and Lead (Sage)
 * - True cutout portrait anchor breaking gracefully out of the portal
 * - Dynamic verb hover resonance between left copy and right architecture
 * - Architectural ribbon grounding the stage into the page
 */
export function HeroSection() {
  const [activeVerb, setActiveVerb] = useState<"design" | "build" | "lead" | null>(null);

  return (
    <section
      className="relative bg-gradient-to-b from-[#160D18] via-[#1A101C] to-[#120A13] text-paper overflow-hidden border-b border-line/20 -mt-16 md:-mt-20 pt-16 sm:pt-20 md:pt-24 lg:pt-26 pb-12 md:pb-16 lg:pb-20 px-6 md:px-12 lg:px-24"
      aria-label="Introduction"
    >
      {/* ── Background Subtle Architectural Blueprint Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(to_right,#FAF8F4_1px,transparent_1px),linear-gradient(to_bottom,#FAF8F4_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />

      {/* ── Ambient Radial Atmosphere ── */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none rounded-full blur-[140px] opacity-25"
        style={{
          background: "radial-gradient(circle, #E05A47 0%, #EAA838 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ── Left Pillar: Proposition & Methodology (Columns 1–7) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 lg:gap-6 z-20">
            
            {/* Headline */}
            <HeroHeadline activeVerb={activeVerb} onHoverVerb={setActiveVerb} />

            {/* Mobile-Only Stage (Visible on viewports < lg) */}
            <div className="lg:hidden my-4 flex justify-center">
              <HeroArchitecturalStage activeVerb={activeVerb} onHoverVerb={setActiveVerb} />
            </div>

            {/* Architectural Tri-tone Hairline Divider */}
            <div
              className="w-24 h-0.5 rounded-full bg-gradient-to-r from-coral via-marigold to-sage my-1 hidden sm:block opacity-80"
              aria-hidden="true"
            />

            {/* Supporting Thesis Sentence */}
            <HeroBodyCopy />

            {/* 3-Tier Action Hierarchy */}
            <HeroActions />

          </div>

          {/* ── Right Pillar: Architectural Portal & Portrait Anchor (Desktop: Columns 8–12) ── */}
          <div className="hidden lg:flex lg:col-span-5 justify-end z-10">
            <HeroArchitecturalStage activeVerb={activeVerb} onHoverVerb={setActiveVerb} />
          </div>

        </div>
      </div>
    </section>
  );
}
