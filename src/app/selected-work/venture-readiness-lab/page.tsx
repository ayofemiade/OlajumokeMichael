import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { TextLink } from "@/components/actions/TextLink";

export default function VRLCasePage() {
  return (
    <Section>
      <Container size="reading">
        <Heading level={1} className="mb-8">Designing a Founder Support Pilot—and Learning from Its Limits</Heading>
        <Text size="xl" className="mb-16">
          How I translated a venture-readiness proposition into a six-week program, led delivery, built an evidence system and used the pilot’s limits to sharpen the next design.
        </Text>

        <div className="bg-soft-stone p-8 mb-16 flex flex-col gap-6">
          <Heading level={3}>At a glance</Heading>
          <ul className="flex flex-col gap-4 font-sans text-slate text-base">
            <li><strong className="text-ink">Project:</strong> Venture Readiness Lab, an Ethnoir founder-facing venture-development pilot.</li>
            <li><strong className="text-ink">Role:</strong> Founder, program architect, lead facilitator, primary implementer and lead evidence interpreter.</li>
            <li><strong className="text-ink">Format:</strong> Six weekly virtual cohort sessions totaling 9.5 hours, plus two one-hour office-hour sessions, participant resources, between-session support, progress tracking and closing reflection.</li>
            <li><strong className="text-ink">Participation:</strong> Six active founders; all six reached the final session; 32 of 36 possible participant-session attendances.</li>
            <li><strong className="text-ink">Verified outputs:</strong> I personally reviewed and confirmed structural business deliverables created by five active participants.</li>
            <li><strong className="text-ink">Context:</strong> Founder-led Ethnoir pilot supported through an NC IDEA ENGAGE grant.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <Heading level={2}>The challenge</Heading>
            <Text>
              I designed the Venture Readiness Lab around a recurring implementation problem: founders may be able to name a visible business concern—uneven revenue, an informal process, limited financial visibility or excessive dependence on the founder—without yet knowing what is producing it or what response would be useful.
            </Text>
            <Text>
              The original proposition was that a structured, diagnostic-led intervention could help early-stage founders strengthen operational, revenue and financial foundations before capital- or growth-oriented support. That proposition contained assumptions to test: that a common readiness sequence could orient participants; that assessment information could help identify a useful focus; that six weeks could support a meaningful structural deliverable; and that the proposed measures could capture change.
            </Text>
          </div>

          {/* Further content truncated for the stub page but it would contain the full case copy as approved */}
          <div className="flex flex-col gap-4 border-t border-line pt-12 mt-12">
            <Eyebrow>Project Context</Eyebrow>
            <Text size="sm">
              Venture Readiness Lab was designed and delivered through Ethnoir. This activity received support from NC IDEA Foundation through NC IDEA ENGAGE.
            </Text>
          </div>
          
          <div className="flex gap-4 mt-8">
            <TextLink href="/experience">View my experience</TextLink>
            <span className="text-slate">•</span>
            <TextLink href="/contact">Contact me</TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
