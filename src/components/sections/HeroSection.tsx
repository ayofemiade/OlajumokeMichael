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
      className="relative bg-white text-ink overflow-hidden border-b border-line -mt-16 md:-mt-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 px-6 md:px-12 lg:px-24"
      aria-label="Introduction"
    >
      {/* Clean, seamless pure white canvas for unified portrait integration */}

      <div className="relative max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* ── Left Pillar: Proposition & Methodology (Columns 1–7) ── */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-5 lg:gap-6 z-20">
            
            {/* Headline */}
            <HeroHeadline activeVerb={activeVerb} onHoverVerb={setActiveVerb} />

            {/* Mobile-Only Stage (Visible on viewports < lg) */}
            <div className="lg:hidden my-4 flex justify-center">
              <HeroArchitecturalStage />
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
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-end items-start pt-1.5 xl:pt-2 z-10">
            <HeroArchitecturalStage />
          </div>

        </div>
      </div>
    </section>
  );
}
