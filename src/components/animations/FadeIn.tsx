"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const elegantEase: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: elegantEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
