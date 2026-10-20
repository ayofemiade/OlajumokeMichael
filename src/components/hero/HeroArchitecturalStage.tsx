"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface HeroArchitecturalStageProps {
  activeVerb?: "design" | "build" | "lead" | null;
  onHoverVerb?: (verb: "design" | "build" | "lead" | null) => void;
}

const CUTOUT_SRC = "/images/olajumoke-headshot-cutout.webp";
const ALT_TEXT = "Portrait of Olajumoke Michael, Program Architect and Strategist";

export function HeroArchitecturalStage({
  activeVerb,
  onHoverVerb,
}: HeroArchitecturalStageProps) {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] aspect-[4/5] mx-auto select-none">
      {/* ── Ambient Radial Stage Lighting ── */}
      <div
        className="absolute inset-0 pointer-events-none rounded-t-[260px] opacity-75 blur-3xl transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(224, 90, 71, 0.22) 0%, rgba(234, 168, 56, 0.16) 45%, rgba(18, 10, 19, 0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* ── SVG Arch Architecture & Precision Drafting Lines ── */}
      <svg
        viewBox="0 0 540 675"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients for each arch */}
          <linearGradient id="archDesignGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E05A47" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#1A101C" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#120A13" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="archBuildGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAA838" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#1A101C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#120A13" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="archLeadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6B8E7B" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#1A101C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#120A13" stopOpacity="0.95" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="coralGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── Construction Radius Reference Marks ── */}
        <line
          x1="270"
          y1="20"
          x2="270"
          y2="665"
          stroke="#FAF8F4"
          strokeOpacity="0.08"
          strokeDasharray="4 6"
        />
        <line
          x1="20"
          y1="270"
          x2="520"
          y2="270"
          stroke="#FAF8F4"
          strokeOpacity="0.08"
          strokeDasharray="4 6"
        />

        {/* ── ARCH 01: DESIGN (Outer Romanesque Arch - Coral) ── */}
        <g
          className={cn(
            "transition-all duration-500",
            activeVerb === "design" ? "opacity-100" : "opacity-85"
          )}
        >
          {/* Arch Body */}
          <path
            d="M 30,675 L 30,270 A 240,240 0 0,1 510,270 L 510,675 Z"
            fill="url(#archDesignGrad)"
            stroke={activeVerb === "design" ? "#E05A47" : "rgba(224, 90, 71, 0.45)"}
            strokeWidth={activeVerb === "design" ? "2" : "1.25"}
          />
          {/* Outer Dashed Orbit */}
          <path
            d="M 18,270 A 252,252 0 0,1 522,270"
            fill="none"
            stroke="#E05A47"
            strokeOpacity={activeVerb === "design" ? "0.8" : "0.3"}
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          {/* Architectural Keystone Tick */}
          <line
            x1="270"
            y1="18"
            x2="270"
            y2="34"
            stroke="#E05A47"
            strokeWidth="2"
            strokeOpacity="0.8"
          />
        </g>

        {/* ── ARCH 02: BUILD (Middle Structural Arch - Marigold) ── */}
        <g
          className={cn(
            "transition-all duration-500",
            activeVerb === "build" ? "opacity-100" : "opacity-90"
          )}
        >
          {/* Arch Body */}
          <path
            d="M 68,675 L 68,270 A 202,202 0 0,1 472,270 L 472,675 Z"
            fill="url(#archBuildGrad)"
            stroke={activeVerb === "build" ? "#EAA838" : "rgba(234, 168, 56, 0.45)"}
            strokeWidth={activeVerb === "build" ? "2" : "1.25"}
          />
          {/* System Scaffolding Tick Marks */}
          <path
            d="M 58,270 A 212,212 0 0,1 482,270"
            fill="none"
            stroke="#EAA838"
            strokeOpacity={activeVerb === "build" ? "0.85" : "0.35"}
            strokeWidth="1"
            strokeDasharray="2 8"
          />
        </g>

        {/* ── ARCH 03: LEAD (Inner Sanctuary Portal - Sage/Velvet) ── */}
        <g
          className={cn(
            "transition-all duration-500",
            activeVerb === "lead" ? "opacity-100" : "opacity-95"
          )}
        >
          {/* Arch Body */}
          <path
            d="M 106,675 L 106,270 A 164,164 0 0,1 434,270 L 434,675 Z"
            fill="url(#archLeadGrad)"
            stroke={activeVerb === "lead" ? "#6B8E7B" : "rgba(107, 142, 123, 0.4)"}
            strokeWidth={activeVerb === "lead" ? "2" : "1.25"}
          />
        </g>
      </svg>

      {/* ── Olajumoke Michael Cutout Portrait Anchor ── */}
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 1.2,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          delay: reduced ? 0 : 0.15,
        }}
        className="relative w-full h-full flex items-end justify-center z-10 pointer-events-auto"
      >
        <div className="relative w-[92%] h-[94%] max-w-[500px]">
          <Image
            src={CUTOUT_SRC}
            alt={ALT_TEXT}
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 88vw, (max-width: 1280px) 44vw, 540px)"
            className="object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </motion.div>


      {/* ── Interactive Arch Triggers (Desktop Micro-Interaction) ── */}
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
