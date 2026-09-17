import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ 
  className, 
  variant = "primary", 
  href, 
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans text-sm md:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none px-6 py-3";
  
  const variants = {
    primary: "bg-plum text-paper hover:bg-plum/90",
    secondary: "bg-soft-stone text-ink hover:bg-line/50",
    outline: "border border-line text-ink hover:bg-soft-stone"
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
