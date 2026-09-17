import { cn } from "@/lib/utils";
import React from "react";

interface EditorialContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "reading" | "full";
  padded?: boolean;
}

export function EditorialContainer({ 
  className, 
  as: Component = "div", 
  size = "default",
  padded = true,
  ...props 
}: EditorialContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        padded && "px-6 md:px-12 lg:px-24",
        size === "default" && "max-w-[var(--container-max)]",
        size === "reading" && "max-w-[var(--container-reading)]",
        size === "full" && "max-w-none",
        className
      )}
      {...props}
    />
  );
}
