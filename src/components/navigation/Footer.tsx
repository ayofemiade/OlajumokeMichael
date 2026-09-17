import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Text } from "@/components/typography/Text";
import { TextLink } from "@/components/actions/TextLink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-soft-stone py-12 md:py-16">
      <Container className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <Link 
            href="/" 
            className="font-serif text-lg font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-4 focus-visible:ring-offset-soft-stone"
          >
            Olajumoke Michael
          </Link>
          <Text size="sm">
            © {new Date().getFullYear()} Olajumoke Michael. All rights reserved.
          </Text>
        </div>

        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          <TextLink href="https://thequietfire.olajumokemichael.com" className="text-sm">
            The Quiet Fire
          </TextLink>
          <TextLink href="/contact" className="text-sm">
            Contact
          </TextLink>
        </nav>
      </Container>
    </footer>
  );
}
