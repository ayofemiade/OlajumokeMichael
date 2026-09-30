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
 *
 * Layer order (desktop):
 *   z-0   HeroBackground    — decorative PROGRAM/STRATEGY letterforms
 *   z-10  HeroPortrait      — absolute, full hero height, centre-right
 *   z-20  Content canvas    — headline left, body right, meta strips
 *
 * Mobile is a separate stacked layout: meta top → portrait → headline → body → CTA.
 *
 * All copy is 100% immutable. No navigation is modified.
 */
export function HeroSection() {
  return (
    <section
      className="relative bg-paper overflow-hidden md:h-screen border-b border-line/40"
      aria-label="Introduction"
    >
      {/* ── z-0: Decorative background letterforms (desktop only) ────── */}
      <HeroBackground />

      {/* ── z-10: Portrait (desktop absolute; mobile in-flow via separate render) */}
      <HeroPortrait variant="desktop" />

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP CONTENT CANVAS
          Hidden on mobile. Absolutely fills the h-screen section.
          pointer-events-none on container; auto on interactive children.
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className={[
          "hidden md:flex flex-col h-full",
          "relative z-20 pointer-events-none",
          "px-10 lg:px-12 xl:px-16",
          "pt-8 pb-8 lg:pt-10 lg:pb-10",
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
          Portrait sits above the text content.
          ═══════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Top: taxonomy strip */}
        <div className="px-6 pt-6 pb-4">
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
