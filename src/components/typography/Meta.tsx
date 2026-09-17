import { cn } from "@/lib/utils";
import React from "react";

interface MetaProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

export function Meta({ className, as: Component = "span", ...props }: MetaProps) {
  return (
    <Component
      className={cn(
        "font-sans text-xs uppercase tracking-[0.15em] text-slate font-medium",
        className
      )}
      {...props}
    />
  );
}
