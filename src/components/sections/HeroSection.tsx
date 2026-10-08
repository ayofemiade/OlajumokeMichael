"use client";

import { HeroPortrait } from "@/components/hero/HeroPortrait";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { HeroBodyCopy } from "@/components/hero/HeroBodyCopy";
import { HeroMeta } from "@/components/hero/HeroMeta";

/**
 * HeroSection — Editorial split hero.
 *
 * Left: monochrome portrait that dissolves into the page.
 * Right: right-aligned statement (two-line headline → hairline → body → CTA).
 *
 * One shared variable drives the composition:
 *   --hero-photo-w = min(50vw, height-limited width)
 * The portrait is exactly that wide, and the text column starts at 88% of it,
 * so the text always begins just after the image at every viewport size.
 *
 * The section uses -mt-16 md:-mt-20 to pull the hero UP behind the
 * transparent navbar.
 *
 * Layer order (desktop):
 *   z-10  HeroPortrait   — absolute, bottom-left
 *   z-20  Content canvas — text column + scroll cue
 *
 * Mobile is a separate stacked layout: portrait → headline → body → CTA.
 * (HeroBackground ghost letters are intentionally no longer rendered.)
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
      style={
        {
          // Photo frame ratio is 3427/4000 (0.857). Its height may reach
          // 100vh + 8vh (overhang) minus 2.5rem so the head clears the wordmark.
          "--hero-photo-w": "min(54vw, calc((108vh - 2.5rem) * 0.857))",
        } as React.CSSProperties
      }
    >
      {/* ── z-10: Portrait (desktop absolute; mobile: in-flow below) ─── */}
      <HeroPortrait variant="desktop" />

      {/* DESKTOP CONTENT CANVAS — Strict Right Alignment block */}
      <div className="hidden md:flex flex-col h-full relative z-20 pointer-events-none pr-8 pt-24 pb-16 items-end justify-center w-full">
        {/* Container-query box: constrained to the right side of the viewport to prevent photo overlap. 
            Added md:mr-8 lg:mr-12 xl:mr-20 to gently shift the block leftward towards the portrait, 
            creating a subtle indent relative to the global nav. */}
        <div
          className="flex flex-col items-end pointer-events-auto w-full max-w-[75vw] lg:max-w-[65vw] xl:max-w-[55vw] md:mr-8 lg:mr-12 xl:mr-20"
          style={{ containerType: "inline-size" }}
        >
          <HeroHeadline />

          <div className="mt-8 lg:mt-10 w-full flex flex-col items-end" style={{ maxWidth: "min(35rem, 88cqw)" }}>
            <HeroBodyCopy />
            <div className="mt-8 lg:mt-10 w-full flex justify-end">
              <HeroMeta variant="cta" />
            </div>
          </div>
        </div>

        {/* Scroll cue — bottom-right */}
        <div className="absolute bottom-8 right-8 pointer-events-auto">
          <HeroMeta variant="scroll" />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          MOBILE LAYOUT — Stacked, in-flow, min-h-screen
          pt-20 on first element compensates for header pull-up.
          Portrait sits above text, headline + body are centered.
          ═══════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Portrait — in-flow, full width, face prominent. pt-20 clears transparent header */}
        <div className="pt-20">
          <HeroPortrait variant="mobile" />
        </div>

        {/* Headline + body copy — centered */}
        <div className="px-6 pt-8 pb-4 flex-1 flex flex-col items-center justify-center text-center max-w-lg mx-auto">
          <HeroHeadline />
          <div className="mt-5">
            <HeroBodyCopy />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-6 pt-6 pb-10 flex justify-center">
          <HeroMeta variant="bottom" />
        </div>
      </div>
    </section>
  );
}
