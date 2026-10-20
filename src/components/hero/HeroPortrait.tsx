"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PORTRAIT_SRC = "/images/Olajumoke-Michael-Professional-Headshot-Alternate.jpg";
const PORTRAIT_ALT = "Portrait of Olajumoke Michael";

/**
 * HeroPortrait — 4:5 editorial portrait anchor.
 *
 * Full-strength, natural color photography without artificial transparency,
 * ghosting, or aggressive filters. Anchored cleanly in a 4:5 editorial frame
 * with subtle architectural hairline borders and soft-stone backing.
 */
export function HeroPortrait() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: reduced ? 1 : 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: reduced ? 0 : 1.1,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        delay: reduced ? 0 : 0.2,
      }}
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-[4/5] mx-auto lg:mx-0 lg:ml-auto rounded-sm overflow-hidden border border-line/70 bg-soft-stone/50 shadow-sm"
    >
      <Image
        src={PORTRAIT_SRC}
        alt={PORTRAIT_ALT}
        fill
        priority
        quality={90}
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 42vw, 540px)"
        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
        style={{ objectPosition: "50% 16%" }}
      />
    </motion.div>
  );
}
