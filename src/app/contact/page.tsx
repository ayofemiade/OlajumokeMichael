import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Button } from "@/components/actions/Button";

export default function ContactPage() {
  return (
    <Section>
      <Container size="reading">
        <Heading level={1} className="mb-8">Contact</Heading>
        <Text size="lg" className="mb-8">
          If you’re considering me for a role, exploring a program or service challenge, or interested in collaborating, I would be glad to hear from you.
        </Text>
        <Text className="mb-12">
          Send a short note about the opportunity or question and what you would like to discuss. Please do not include confidential documents or sensitive personal information in an initial message.
        </Text>
        
        <form className="flex flex-col gap-6" action="#">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-sans font-medium text-sm text-ink">Name</label>
            <input type="text" id="name" name="name" required className="border border-line bg-paper px-4 py-3 focus:outline-none focus:ring-2 focus:ring-plum" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-sans font-medium text-sm text-ink">Email</label>
            <input type="email" id="email" name="email" required className="border border-line bg-paper px-4 py-3 focus:outline-none focus:ring-2 focus:ring-plum" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-sans font-medium text-sm text-ink">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="What would you like to discuss?" className="border border-line bg-paper px-4 py-3 focus:outline-none focus:ring-2 focus:ring-plum" />
          </div>
          <Button type="submit" className="self-start">Send message</Button>
        </form>
      </Container>
    </Section>
  );
}
