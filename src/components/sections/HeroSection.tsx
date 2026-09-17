"use client";

import React, { useRef } from "react";
import { EditorialContainer } from "../layout/EditorialContainer";
import { Display } from "../typography/Display";
import { Meta } from "../typography/Meta";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    // The massive typography scales down and fades out slightly as we scroll away
    gsap.to(textRef.current, {
      scale: 0.85,
      opacity: 0.3,
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      <EditorialContainer>
        <div ref={textRef} className="flex flex-col gap-4 transform-gpu">
          <Meta className="mb-4">Olajumoke Michael / Strategist</Meta>
          <Display>Ideas.</Display>
          <Display italic className="ml-12 md:ml-32">Structures.</Display>
          <Display>Implemented.</Display>
          <Display italic className="ml-24 md:ml-48">Evaluated.</Display>
        </div>
      </EditorialContainer>
    </section>
  );
}
