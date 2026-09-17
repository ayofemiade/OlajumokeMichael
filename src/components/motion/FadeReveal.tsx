"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
  staggerChildren?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeReveal({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerChildren = 0.1,
  direction = "up",
  ...props
}: FadeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getInitialY = () => {
    if (direction === "up") return 40;
    if (direction === "down") return -40;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left") return 40;
    if (direction === "right") return -40;
    return 0;
  };

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: getInitialY(),
      x: getInitialX()
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom elegant easing
        delay,
        when: "beforeChildren",
        staggerChildren: stagger ? staggerChildren : 0,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  if (stagger) {
    // If stagger is true, we expect children to be motion components
    // using the inherited variants.
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={childVariants}>
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
