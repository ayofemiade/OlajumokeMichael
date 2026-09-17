import { cn } from "@/lib/utils";
import React from "react";

interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  italic?: boolean;
}

export function Display({ className, as: Component = "h1", italic = false, ...props }: DisplayProps) {
  return (
    <Component
      className={cn(
        "font-serif text-[length:var(--font-size-display)] leading-[0.9] tracking-tight text-ink",
        italic && "italic",
        className
      )}
      {...props}
    />
  );
}
