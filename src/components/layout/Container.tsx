import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "reading";
}

export function Container({ 
  className, 
  as: Component = "div", 
  size = "default",
  ...props 
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto px-6 md:px-8 w-full",
        size === "default" ? "max-w-[var(--container-max)]" : "max-w-[var(--container-reading)]",
        className
      )}
      {...props}
    />
  );
}
