"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Full-height portrait preserving complete hair bun, hands, and natural white background */
const PORTRAIT_SRC = "/images/olajumoke-wbp1.jpg";
const ALT_TEXT = "Portrait of Olajumoke Michael";

export function HeroArchitecturalStage() {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[490px] xl:max-w-[530px] aspect-[883/992] mx-auto lg:ml-auto lg:mr-0 select-none">
      {/* ── Seamless Organic Portrait (No Card, No Border, 100% Flow with White Background) ── */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduced ? 0 : 1.0,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          delay: reduced ? 0 : 0.15,
        }}
        className="relative w-full h-full"
      >
        <Image
          src={PORTRAIT_SRC}
          alt={ALT_TEXT}
          fill
          priority
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 530px)"
          className="object-contain object-top pointer-events-none select-none"
        />
      </motion.div>
    </div>
  );
}
