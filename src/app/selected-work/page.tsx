import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { Button } from "@/components/actions/Button";

export default function SelectedWorkPage() {
  return (
    <Section>
      <Container size="reading">
        <Heading level={1} className="mb-8">Selected Work</Heading>
        <Text size="lg" className="mb-16">
          Role titles tell only part of the story. The case below offers a closer look at how I translated a proposition into a program, led its delivery and learned from what implementation revealed.
        </Text>
        
        <div className="flex flex-col gap-6 border border-line p-8 md:p-12 bg-soft-stone/30">
          <Heading level={2}>Designing a Founder Support Pilot—and Learning from Its Limits</Heading>
          <div className="flex flex-col gap-2">
            <Eyebrow>Context</Eyebrow>
            <Text>Venture Readiness Lab · Founder-facing pilot delivered through Ethnoir</Text>
          </div>
          <div className="flex flex-col gap-2">
            <Eyebrow>Role</Eyebrow>
            <Text>Program architect, lead facilitator, primary implementer and evidence lead</Text>
          </div>
          <Text className="mt-4 mb-4">
            I translated a venture-readiness proposition into a six-week founder-support pilot, designed its program and operating structure, led delivery, and examined what the evidence could—and could not—show. All six active founders reached the final session. Five participants created structural business deliverables that I personally reviewed and confirmed. The case shows how implementation, missed targets and measurement gaps shaped the next design questions.
          </Text>
          <Button href="/selected-work/venture-readiness-lab" className="self-start mt-2">
            Read the case study
          </Button>
        </div>
      </Container>
    </Section>
  );
}
