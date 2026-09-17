import { cn } from "@/lib/utils";
import React from "react";

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "base" | "lg" | "sm";
}

export function Body({ className, size = "base", ...props }: BodyProps) {
  return (
    <p
      className={cn(
        "font-sans text-slate font-light leading-relaxed",
        size === "base" && "text-base",
        size === "lg" && "text-lg",
        size === "sm" && "text-sm",
        className
      )}
      {...props}
    />
  );
}
