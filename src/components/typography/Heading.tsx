import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: React.ElementType;
}

export function Heading({ 
  children, 
  level = 2, 
  as, 
  className, 
  ...props 
}: HeadingProps) {
  const Component = as || (`h${level}` as React.ElementType);
  
  return (
    <Component
      className={cn(
        "font-serif text-ink tracking-tight",
        level === 1 && "text-4xl md:text-5xl lg:text-6xl font-medium leading-tight",
        level === 2 && "text-3xl md:text-4xl lg:text-5xl font-medium leading-tight",
        level === 3 && "text-2xl md:text-3xl font-medium leading-snug",
        level === 4 && "text-xl md:text-2xl font-medium leading-snug",
        level === 5 && "text-lg md:text-xl font-medium",
        level === 6 && "text-base font-medium",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
