import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

export function Eyebrow({
  children,
  as: Component = "span",
  className,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "font-sans text-xs md:text-sm font-semibold tracking-wider uppercase text-slate",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
