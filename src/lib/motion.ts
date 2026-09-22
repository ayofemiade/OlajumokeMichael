// Core easing curves
export const elegantEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
export const swiftEase: [number, number, number, number] = [0.4, 0.0, 0.2, 1.0];
export const gentleEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Duration tokens (seconds)
export const duration = {
  instant: 0,
  micro: 0.15,   // hover state color changes
  fast: 0.3,    // UI feedback
  medium: 0.6,  // section reveals, button fills
  slow: 0.9,    // editorial entrances
  deliberate: 1.2, // The Quiet Fire section — intentionally slow
} as const;

// Delay tokens (seconds)
export const delay = {
  none: 0 as number,
  short: 0.1 as number,
  stagger: 0.12 as number,  // between staggered children
  medium: 0.25 as number,
  long: 0.4 as number,
};

// Reveal distances (pixels, y-axis)
export const revealY = {
  subtle: 16 as number,
  standard: 30 as number,
  strong: 50 as number,
};

// Framer Motion variant factories
export function makeRevealVariants(
  yOffset: number = revealY.standard,
  dur: number = duration.slow,
  ease: [number, number, number, number] = elegantEase
) {
  return {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease },
    },
  };
}

export function makeStaggerContainer(staggerDelay: number = delay.stagger) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
      },
    },
  };
}
