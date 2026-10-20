import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Olajumoke Michael",
  },
  description:
    "Contact Olajumoke Michael about a role, a program or service challenge, or a collaboration.",
  openGraph: {
    title: "Contact Olajumoke Michael",
    description:
      "Contact Olajumoke Michael about a role, a program or service challenge, or a collaboration.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
