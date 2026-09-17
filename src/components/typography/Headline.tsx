import { cn } from "@/lib/utils";
import React from "react";

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "3xl" | "2xl" | "xl" | "lg";
  italic?: boolean;
}

export function Headline({ 
  className, 
  as: Component = "h2", 
  size = "3xl",
  italic = false,
  ...props 
}: HeadlineProps) {
  return (
    <Component
      className={cn(
        "font-serif leading-[1.1] tracking-tight text-ink",
        size === "3xl" && "text-[length:var(--font-size-3xl)]",
        size === "2xl" && "text-[length:var(--font-size-2xl)]",
        size === "xl" && "text-[length:var(--font-size-xl)]",
        size === "lg" && "text-[length:var(--font-size-lg)]",
        italic && "italic",
        className
      )}
      {...props}
    />
  );
}
