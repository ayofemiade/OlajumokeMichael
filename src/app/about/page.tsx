import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";

export default function AboutPage() {
  return (
    <Section>
      <Container size="reading">
        <Heading level={1} className="mb-12">About Olajumoke Michael</Heading>
        <div className="flex flex-col gap-6">
          <Text size="lg">
            I work at the point where a program’s purpose meets the realities of putting it into practice. An idea needs more than a compelling case for why it matters. It needs a structure people can deliver, a way to understand what is happening, and room to learn when reality differs from the plan.
          </Text>
          <Text>
            My experience spans entrepreneurship support, economic and community development, higher education, and international-development work in Nigeria. Across those settings, I have led programs, coordinated people and partners, built operating approaches, and used evidence from implementation to inform what comes next. The contexts have differed; the recurring work has been connecting direction with delivery.
          </Text>
          
          <Heading level={2} className="mt-8 mb-4">How I approach the work</Heading>
          <Text>
            I start by understanding the purpose, the people involved, and the conditions in which the work will happen. From there, I look at how the activities, responsibilities, resources and evidence need to connect. I care about whether a program can actually be carried out—not just whether it makes sense on paper.
          </Text>
          <Text>
            Implementation is also a source of learning. Participation, feedback, completed work and gaps in the evidence can each tell us something different. I try to distinguish what happened from what people reported, and both from the outcomes we may still need to test.
          </Text>

          <Heading level={2} className="mt-8 mb-4">Current work</Heading>
          <Text>
            I founded Ethnoir as a separate organization focused on venture development. Through it, I have designed and delivered founder-facing work, including the Venture Readiness Lab. That pilot is the first detailed case in my Selected Work: it shows the program I built and led, what the evidence established, and what remained unresolved.
          </Text>

          <Heading level={2} className="mt-8 mb-4">Beyond the work</Heading>
          <Text>
            Professional work is central to this site, but it is one part of my life. Faith, culture, motherhood, creativity and reflection also shape how I think about work, responsibility and becoming. I explore some of that wider landscape through The Quiet Fire, a separate reflective publication.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
