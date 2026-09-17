import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  size?: "sm" | "base" | "lg" | "xl";
  balance?: boolean;
}

export function Text({
  children,
  as: Component = "p",
  size = "base",
  balance = false,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        "text-slate font-sans",
        size === "sm" && "text-sm leading-relaxed",
        size === "base" && "text-base leading-relaxed md:text-lg md:leading-loose",
        size === "lg" && "text-lg leading-relaxed md:text-xl md:leading-loose",
        size === "xl" && "text-xl leading-relaxed md:text-2xl md:leading-loose text-ink",
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
