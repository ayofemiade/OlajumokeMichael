import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  surface?: "paper" | "soft-stone";
}

export function Section({
  className,
  as: Component = "section",
  surface = "paper",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "py-16 md:py-24 lg:py-32 w-full",
        surface === "soft-stone" && "bg-soft-stone",
        className
      )}
      {...props}
    />
  );
}
