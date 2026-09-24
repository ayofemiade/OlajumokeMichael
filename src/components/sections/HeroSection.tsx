"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { elegantEase, gentleEase, duration } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Hero section with a deliberate, sequenced entrance.
 *
 * Order of arrival:
 * 1. Headline & Supporting proposition (arrives first, 0.1s delay)
 * 2. Portrait (arrives at 0.3s, gentle scale)
 * 3. CTAs (arrives at 0.55s)
 *
 * Mobile layout: Proposition/Headline comes FIRST (order-1), Portrait SECOND (order-2).
 */
export function HeroSection() {
  const reduced = useReducedMotion();

  const headlineVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.slow,
        ease: elegantEase,
        delay: reduced ? 0 : 0.1,
      },
    },
  };

  const supportVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.25,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: reduced ? 1 : 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reduced ? 0 : 1.1,
        ease: gentleEase,
        delay: reduced ? 0 : 0.3,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration.medium,
        ease: elegantEase,
        delay: reduced ? 0 : 0.55,
      },
    },
  };

  return (
    <section className="relative px-6 md:px-12 lg:px-24 pt-12 md:pt-16 lg:pt-20 pb-20 lg:pb-32">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* The Typography — Left Column on desktop, FIRST on mobile (order-1) */}
          <div className="lg:col-span-7 flex flex-col z-20 order-1 lg:order-1">
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-[length:var(--font-size-lg)] md:text-[length:var(--font-size-xl)] lg:text-5xl text-ink leading-tight md:leading-[1.1] tracking-tight max-w-[95%] lg:max-w-4xl relative z-10"
            >
              I turn <span className="italic">complex program ideas</span> into{" "}
              <span className="italic">structures</span> that can be implemented,
              evaluated and improved.
            </motion.h1>

            <motion.p
              variants={supportVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 font-serif text-base md:text-lg text-slate leading-relaxed max-w-xl"
            >
              I work across program strategy, program and service design, implementation, operations and evaluation—connecting the thinking behind an initiative with the structures, delivery and evidence needed to move it forward.
            </motion.p>

            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col mt-8 lg:mt-10 relative z-10"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <a
                  href="/selected-work"
                  className="inline-flex items-center justify-center bg-ink text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum transition-colors duration-300"
                >
                  View selected work
                </a>
                <a
                  href="/experience"
                  className="inline-flex items-center justify-center bg-transparent border border-line text-ink px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:border-ink transition-colors duration-300"
                >
                  Explore my experience
                </a>
              </div>
            </motion.div>
          </div>

          {/* The Portrait — Right Column on desktop, SECOND on mobile (order-2) */}
          <div className="lg:col-span-5 relative z-10 w-full flex justify-center lg:justify-end order-2 lg:order-2">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[400px] aspect-[4/5] bg-soft-stone border border-line p-2 md:p-3 image-hover"
            >
              <div className="relative w-full h-full rounded-sm overflow-hidden">
                <Image
                  src="/images/Olajumoke-Michael-Professional-Headshot.jpg"
                  alt="Olajumoke Michael"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
