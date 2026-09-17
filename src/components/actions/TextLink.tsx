import { cn } from "@/lib/utils";
import Link from "next/link";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function TextLink({ className, href, children, ...props }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-sans font-medium text-plum underline decoration-plum/30 underline-offset-4 transition-colors hover:decoration-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
