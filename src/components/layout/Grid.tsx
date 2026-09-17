import { cn } from "@/lib/utils";
import React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 12;
  gap?: "sm" | "md" | "lg" | "none";
}

export function Grid({ 
  className, 
  columns = 12,
  gap = "md",
  ...props 
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-3",
        columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        columns === 12 && "grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
        gap === "sm" && "gap-4 md:gap-6",
        gap === "md" && "gap-8 md:gap-12",
        gap === "lg" && "gap-12 md:gap-24",
        gap === "none" && "gap-0",
        className
      )}
      {...props}
    />
  );
}
