"use client";

import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroPortrait } from "@/components/hero/HeroPortrait";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroBodyCopy } from "@/components/hero/HeroBodyCopy";
import { HeroMeta } from "@/components/hero/HeroMeta";

/**
 * HeroSection — Editorial Luxury Hero: "The Person Inside the System"
 *
 * Compositional concept:
 *   The portrait is the human presence — centred visually.
 *   The headline (left) is the strategic statement — the thinking.
 *   The body copy (right) is the operational breadth — the system.
 *   The background letterforms are the taxonomy — the architecture.
 *   The wave decoration adds editorial movement and visual rhythm.
 *
 * Full-bleed integration with the navigation:
 *   The section uses -mt-16 md:-mt-20 to pull the hero UP behind the
 *   now-transparent navbar. The hero portrait bleeds to the very top of
 *   the viewport. Desktop pt-20/lg:pt-24 compensate inside the content
 *   layer, keeping text below the nav.
 *
 * Layer order (desktop):
 *   z-0   HeroBackground    — decorative PROGRAM/STRATEGY letterforms
 *   z-10  HeroPortrait      — absolute, full hero height, centre-right
 *   z-15  HeroDecoration    — flowing editorial wave stroke (over portrait)
 *   z-20  Content canvas    — headline left, body right, meta strips
 *
 * Mobile is a separate stacked layout: meta top → portrait → headline → body → CTA.
 *
 * All copy is 100% immutable. Navigation architecture is not modified here.
 */
export function HeroSection() {
  return (
    <section
      // -mt-16 md:-mt-20 pulls the section behind the transparent sticky header
      // so the portrait bleeds to the very top of the viewport.
      // md:h-screen keeps the desktop hero exactly one viewport tall.
      className="relative bg-paper overflow-hidden -mt-16 md:-mt-20 md:h-screen border-b border-line/40"
      aria-label="Introduction"
    >
      {/* ── z-0: Decorative background letterforms (desktop only) ────── */}
      <HeroBackground />

      {/* ── z-10: Portrait (desktop absolute; mobile: in-flow below) ─── */}
      <HeroPortrait variant="desktop" />

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP CONTENT CANVAS
          Hidden on mobile. Absolutely fills the h-screen section.
          pt-24 / pt-32 leaves 32px-64px clearance below the header.
          pointer-events-none on container; auto on interactive children.
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className={[
          "hidden md:flex flex-col justify-between h-full",
          "relative z-20 pointer-events-none",
          "px-10 lg:px-14 xl:px-20",
          "pt-24 pb-8 lg:pt-32 lg:pb-10",
        ].join(" ")}
      >
        {/* Main Content Row — Left Pillar & Right Pillar framing central portrait */}
        <div className="flex-1 flex justify-between items-start pt-4 lg:pt-6">
          {/* Left Editorial Pillar — Taxonomy, Headline, CTA */}
          <div className="w-[38%] max-w-[520px] flex flex-col justify-between h-full max-h-[520px] pointer-events-auto">
            <div>
              <HeroMeta variant="left-taxonomy" />
              <div className="mt-6 lg:mt-8">
                <HeroHeadline />
              </div>
            </div>
          </div>

          {/* Right Editorial Pillar — Supporting Body Copy */}
          <div className="w-[24%] max-w-[320px] pt-1 lg:pt-2 pointer-events-auto">
            <HeroBodyCopy />
          </div>
        </div>

        {/* Bottom: Editorial CTA + Scroll Indicator */}
        <div className="w-full pointer-events-auto pt-4">
          <HeroMeta variant="bottom" />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE LAYOUT — Stacked, in-flow, min-h-screen
          pt-20 on first element compensates for header pull-up:
          64px header + 16px gap = 80px (pt-20).
          Portrait sits above the text content.
          ═══════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Top: taxonomy strip — pt-20 clears the transparent header */}
        <div className="px-6 pt-20 pb-4">
          <HeroMeta variant="top" />
        </div>

        {/* Portrait — in-flow, full width, face prominent */}
        <HeroPortrait variant="mobile" />

        {/* Headline + body copy */}
        <div className="px-6 pt-8 flex-1">
          <HeroHeadline />
          <div className="mt-5">
            <HeroBodyCopy />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 pt-8 pb-10">
          <HeroMeta variant="bottom" />
        </div>
      </div>
    </section>
  );
}
