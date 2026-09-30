"use client";

import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroDecoration } from "@/components/hero/HeroDecoration";
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

      {/* ── z-15: Flowing editorial wave decoration (desktop only) ────── */}
      <HeroDecoration />

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP CONTENT CANVAS
          Hidden on mobile. Absolutely fills the h-screen section.
          pt-20 (md) / pt-24 (lg+) compensates for header height after
          the -mt-20 pull-up so taxonomy strip starts cleanly below nav.
          pointer-events-none on container; auto on interactive children.
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className={[
          "hidden md:flex flex-col h-full",
          "relative z-20 pointer-events-none",
          "px-10 lg:px-12 xl:px-16",
          // pt-28 (112px) / pt-36 (144px) leaves 32px to 64px vertical clearance below the 80px sticky header
          "pt-28 pb-8 lg:pt-36 lg:pb-12",
        ].join(" ")}
      >
        {/* Top: Taxonomy meta strip */}
        <div className="pointer-events-auto">
          <HeroMeta variant="top" />
        </div>

        {/* Middle: Left headline + Right body copy (portrait is behind) */}
        <div className="flex-1 flex items-center justify-between">
          {/* Left column — headline sits partly in front of portrait */}
          <div className="w-[32%] max-w-[460px] pointer-events-auto">
            <HeroHeadline />
          </div>

          {/* Right column — body copy sits just right of portrait */}
          <div className="w-[19%] max-w-[260px] pointer-events-auto">
            <HeroBodyCopy />
          </div>
        </div>

        {/* Bottom: Editorial CTA + scroll indicator */}
        <div className="pointer-events-auto">
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
