"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function BlueprintGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // We update the grid based on CSS variables which will be controlled by GSAP ScrollTrigger on individual pages.
    // The BlueprintGrid itself just sets up the visual SVG/CSS layer.
  }, [pathname]);

  return (
    <div 
      ref={gridRef}
      className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-700 ease-in-out"
      style={{
        opacity: "var(--grid-opacity, 0)",
        backgroundSize: "calc(100% / 12) 100%",
        backgroundImage: "linear-gradient(to right, var(--color-line) 1px, transparent 1px)",
        // A faint horizontal line at the reading line (e.g., 30vh) could also be added if needed,
        // but simple vertical columns reflect the "structure" constraint best for now.
      }}
    >
      {/* Edge border to close the grid on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-line" />
    </div>
  );
}
