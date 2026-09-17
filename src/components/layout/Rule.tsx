import { cn } from "@/lib/utils";
import React from "react";

interface RuleProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Rule({ className, orientation = "horizontal", ...props }: RuleProps) {
  return (
    <hr
      className={cn(
        "border-0 bg-line",
        orientation === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}
