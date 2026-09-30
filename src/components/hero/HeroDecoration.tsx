"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * HeroDecoration — Flowing editorial wave / calligraphic stroke.
 *
 * A large SVG bezier-curve path that crosses the hero composition
 * diagonally, adding visual rhythm and calligraphic personality.
 * The stroke mimics an editorial hand-drawn mark — the kind seen in
 * high-end magazine layouts.
 *
 * Sits at z-[15]: above the portrait (z-10), below text content (z-20).
 * This means the wave visually crosses over the photograph, reinforcing
 * the sense that the composition is one unified editorial space.
 *
 * Desktop only. Aria-hidden. pointer-events-none.
 */
export function HeroDecoration() {
  const reduced = useReducedMotion();

  return (
    <div
      className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 15 }}
      aria-hidden="true"
    >
      {/* ── Primary wave stroke ─────────────────────────────────────── */}
      {/* Spans left-to-right across the mid-lower hero zone.           */}
      {/* The flowing bezier curve creates calligraphic organic movement */}
      <motion.div
        className="absolute"
        style={{
          left: "8%",
          top: "44%",
          width: "82%",
          transform: "translateY(-50%) rotate(-3.5deg)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduced ? 0 : 1.8,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.6,
        }}
      >
        <svg
          viewBox="0 0 1000 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,130 C 80,55 130,165 210,100 C 290,35 360,148 448,88 C 536,28 598,138 688,78 C 778,18 870,118 1000,65"
            stroke="#24252B"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.10"
          />
        </svg>
      </motion.div>

      {/* ── Secondary ghost wave ─────────────────────────────────────── */}
      {/* Offset slightly right and lower; creates depth/layering feel. */}
      <motion.div
        className="absolute"
        style={{
          left: "22%",
          top: "56%",
          width: "64%",
          transform: "translateY(-50%) rotate(-3.5deg)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduced ? 0 : 2.0,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
          delay: reduced ? 0 : 0.8,
        }}
      >
        <svg
          viewBox="0 0 820 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,100 C 65,42 120,138 200,80 C 280,22 345,118 430,65 C 515,12 575,102 660,55 C 745,8 790,75 820,50"
            stroke="#503847"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.06"
          />
        </svg>
      </motion.div>
    </div>
  );
}
