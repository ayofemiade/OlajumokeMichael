import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Eyebrow } from "@/components/typography/Eyebrow";

export default function ExperiencePage() {
  return (
    <Section>
      <Container size="reading">
        <Heading level={1} className="mb-12">Experience</Heading>
        <Text size="lg" className="mb-12">
          My work has taken place in different organizations and sectors, with different responsibilities in each. This page offers a selective account of that progression: from managing grants and operations to leading programs, coordinating delivery and learning from implementation.
        </Text>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2 border-l border-line pl-6">
            <Heading level={3}>Ethnoir — Founder</Heading>
            <Eyebrow>2025–present · Winston-Salem, North Carolina</Eyebrow>
            <Text className="mt-2">
              I founded Ethnoir to work on questions of venture development. I designed and delivered its founder-facing Venture Readiness Lab pilot, connecting the program’s purpose with a six-week structure, participant activities, delivery operations and evidence collection.
            </Text>
          </div>
          
          <div className="flex flex-col gap-2 border-l border-line pl-6">
            <Heading level={3}>Bpeace — U.S. Program Manager (Contract)</Heading>
            <Eyebrow>2025–2026 · Remote</Eyebrow>
            <Text className="mt-2">
              For Bpeace’s Breaking the $1M Barrier program, I managed implementation and coordinated delivery across a multi-state founder-support initiative.
            </Text>
          </div>

          <div className="flex flex-col gap-2 border-l border-line pl-6">
            <Heading level={3}>Winston-Salem Women’s Business Center — Program Director</Heading>
            <Eyebrow>2023–2025 · Winston-Salem, North Carolina</Eyebrow>
            <Text className="mt-2">
              I led regional entrepreneurship-support programming and the operations behind it.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
