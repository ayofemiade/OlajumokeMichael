"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface HeroArchitecturalStageProps {
  activeVerb?: "design" | "build" | "lead" | null;
  onHoverVerb?: (verb: "design" | "build" | "lead" | null) => void;
}

/** Client-chosen headshot, used whole: no cropping, no background removal. */
const PORTRAIT_SRC = "/images/Copy of Olajumoke-Michael-Professional-Headshot-Alternate.jpg";
const ALT_TEXT = "Portrait of Olajumoke Michael, Program Architect and Strategist";

/** Warm halo behind the portrait; shifts hue with the verb being hovered. */
const GLOW: Record<string, string> = {
  idle: "radial-gradient(ellipse at 50% 42%, rgba(234, 168, 56, 0.34) 0%, rgba(224, 90, 71, 0.2) 45%, rgba(18, 10, 19, 0) 72%)",
  design: "radial-gradient(ellipse at 50% 42%, rgba(224, 90, 71, 0.5) 0%, rgba(224, 90, 71, 0.2) 45%, rgba(18, 10, 19, 0) 72%)",
  build: "radial-gradient(ellipse at 50% 42%, rgba(234, 168, 56, 0.5) 0%, rgba(234, 168, 56, 0.2) 45%, rgba(18, 10, 19, 0) 72%)",
  lead: "radial-gradient(ellipse at 50% 42%, rgba(107, 142, 123, 0.5) 0%, rgba(107, 142, 123, 0.22) 45%, rgba(18, 10, 19, 0) 72%)",
};

/**
 * The photo's white studio backdrop is multiplied by a warm gradient (white x colour = colour),
 * so it reads as soft studio light instead of a white box. Four edge fades (intersected) then
 * dissolve every side into the aubergine hero, so the whole frame is visible with no hard border.
 */
const PORTRAIT_BACKDROP =
  "radial-gradient(ellipse at 50% 34%, #F8E6D3 0%, #EBC7A4 52%, #C98F6B 100%)";
const PORTRAIT_MASK = [
  "linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%)",
  "linear-gradient(to bottom, transparent 0%, #000 16%, #000 62%, transparent 100%)",
  "radial-gradient(ellipse 85% 80% at 50% 45%, #000 60%, transparent 100%)",
].join(", ");

export function HeroArchitecturalStage({
  activeVerb,
  onHoverVerb,
}: HeroArchitecturalStageProps) {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[340px] lg:max-w-[370px] xl:max-w-[400px] aspect-[1593/2390] mx-auto select-none">
      {/* ── Ambient halo ── */}
      <div
        className="absolute -inset-[18%] pointer-events-none blur-3xl transition-all duration-700"
        style={{ background: GLOW[activeVerb ?? "idle"] }}
        aria-hidden="true"
      />

      {/* ── Full portrait, uncropped, feathered into the background ── */}
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 0.97, y: reduced ? 0 : 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 1.2,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          delay: reduced ? 0 : 0.15,
        }}
        className="absolute inset-0 isolate"
        style={{
          background: PORTRAIT_BACKDROP,
          WebkitMaskImage: PORTRAIT_MASK,
          maskImage: PORTRAIT_MASK,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <Image
          src={PORTRAIT_SRC}
          alt={ALT_TEXT}
          fill
          priority
          quality={92}
          sizes="(max-width: 768px) 88vw, (max-width: 1280px) 40vw, 480px"
          className="object-contain mix-blend-multiply"
        />
      </motion.div>

      {/* ── Verb triggers (Desktop) ── */}
      <div className="hidden lg:flex absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 items-center gap-2 bg-aubergine-deep/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xl">
        <button
          type="button"
          onMouseEnter={() => onHoverVerb?.("design")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "px-2.5 py-0.5 rounded-full text-[10px] font-sans uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer",
            activeVerb === "design"
              ? "bg-coral text-white shadow-sm"
              : "text-paper/70 hover:text-coral-light"
          )}
        >
          01 Design
        </button>
        <span className="text-white/20 text-xs">/</span>
        <button
          type="button"
          onMouseEnter={() => onHoverVerb?.("build")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "px-2.5 py-0.5 rounded-full text-[10px] font-sans uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer",
            activeVerb === "build"
              ? "bg-marigold text-ink shadow-sm"
              : "text-paper/70 hover:text-marigold-light"
          )}
        >
          02 Build
        </button>
        <span className="text-white/20 text-xs">/</span>
        <button
          type="button"
          onMouseEnter={() => onHoverVerb?.("lead")}
          onMouseLeave={() => onHoverVerb?.(null)}
          className={cn(
            "px-2.5 py-0.5 rounded-full text-[10px] font-sans uppercase tracking-[0.15em] font-medium transition-all duration-200 cursor-pointer",
            activeVerb === "lead"
              ? "bg-sage text-white shadow-sm"
              : "text-paper/70 hover:text-sage-light"
          )}
        >
          03 Lead
        </button>
      </div>
    </div>
  );
}
