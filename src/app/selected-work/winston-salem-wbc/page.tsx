import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Operating Infrastructure Case Study",
  description:
    "Strengthening the Operating Infrastructure of a Regional Women’s Business Center. A professional portfolio case study by Olajumoke Michael.",
};

export default function WBCCasePage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Header (Dossier Title & Opening Summary) */}
      <section className="relative px-5 sm:px-8 md:px-12 lg:px-24 pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-24 border-b border-line">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto">
          <Meta className="text-plum mb-4 uppercase tracking-widest text-xs sm:text-sm">Case Study 02 · Institutional Leadership</Meta>
          <Headline as="h1" size="xl" className="text-ink leading-tight mb-6 max-w-5xl font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Strengthening the Operating Infrastructure of a Regional Women’s Business Center
          </Headline>
          <Body className="text-base md:text-lg text-slate leading-relaxed font-serif max-w-3xl">
            At the Winston-Salem Women’s Business Center, I led a growing regional portfolio while strengthening the systems behind delivery—from program planning and client intake to CRM, reporting, partnerships and grant-supported operations. This case shows how I worked across an established institution to connect multiple programs, contributors and evidence requirements within a more coherent operating environment.
          </Body>
        </ScrollReveal>
      </section>

      {/* 2. Dossier Content Split */}
      <section className="relative px-5 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
          
          {/* Sticky Sidebar (Left Column) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8 bg-soft-stone/40 p-5 sm:p-8 rounded-sm border border-line">
            
            <div>
              <Meta as="h2" className="text-plum mb-6 pb-3 border-b border-line block font-semibold">At a glance</Meta>
              <div className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Institution</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Winston-Salem Women’s Business Center (WBC)
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Role Tenure</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Program Director, April 2023–February 2025
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Case Period</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    April 2023–March 2024
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Scope</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Regional portfolio management, intake workflows, CRM infrastructure, grant-supported program alignment, partner ecosystem coordination, and evidence/reporting standards.
                  </p>
                </div>

              </div>
            </div>

            {/* Capabilities Demonstrated Sidebar */}
            <div className="pt-6 border-t border-line">
              <Meta as="h3" className="text-plum mb-4 block font-semibold">Capabilities demonstrated</Meta>
              <div className="flex flex-col gap-4 font-sans text-xs text-ink font-medium">
                <div>
                  <strong className="block text-ink font-semibold">Institutional Program Leadership</strong>
                  <span className="text-slate font-serif text-xs leading-normal">Led a regional portfolio of entrepreneurship and business growth initiatives across multiple stakeholder groups and funding streams.</span>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Portfolio Operations</strong>
                  <span className="text-slate font-serif text-xs leading-normal">Coordinated concurrent programs, resource distribution, scheduling, and delivery cadence across contributors.</span>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Operational Systems</strong>
                  <span className="text-slate font-serif text-xs leading-normal">Strengthened intake pipelines, client relationship management (CRM) workflows, and internal data collection.</span>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Partnership Infrastructure</strong>
                  <span className="text-slate font-serif text-xs leading-normal">Aligned external partners, institutional supporters, and community contributors within a unified delivery model.</span>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Measurement &amp; Reporting</strong>
                  <span className="text-slate font-serif text-xs leading-normal">Established reliable evidence collection to satisfy institutional reporting, grant compliance, and operational evaluation.</span>
                </div>
              </div>
            </div>

            {/* Navigation Back */}
            <div className="pt-6 border-t border-line">
              <Link 
                href="/selected-work" 
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-plum hover:text-ink transition-colors duration-200"
              >
                <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Back to Selected Work</span>
              </Link>
            </div>

          </div>

          {/* Core Narrative (Right Column — 8 Approved Sections) */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-20">
            
            {/* SECTION 1: Opening Summary */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 01</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Opening summary</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Operating within an established regional institution requires connecting multiple active programs, diverse service contributors, and rigorous funder and compliance expectations into a clear, cohesive environment. At the Winston-Salem Women’s Business Center, I led a growing regional portfolio while strengthening the operational systems behind delivery.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                This case examines how implementation, intake workflows, CRM infrastructure, and partner alignment were structured during the bounded case period of April 2023 to March 2024 to support institutional clarity and evidence generation.
              </Body>
            </ScrollReveal>

            {/* SECTION 2: The Challenge */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 02</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">The challenge</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                As program offerings expanded, the primary operating challenge was avoiding delivery fragmentation. Individual cohort offerings, specialized workshops, one-on-one counseling streams, and partner-led sessions were operating with separate scheduling habits and varying data collection procedures.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Without a unified intake pipeline and standardized client tracking system, administrative overhead increased, client progression was difficult to monitor across advisors, and reporting required manual data reconciliation at the close of grant cycles.
              </Body>
            </ScrollReveal>

            {/* SECTION 3: What I Did */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 03</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">What I did</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                As Program Director, I assumed primary operational responsibility for aligning program delivery with institutional goals and evidence requirements. My intervention focused on four core operational priorities:
              </Body>
              <div className="flex flex-col gap-6 my-2">
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">1. Intake &amp; Client Workflow Architecture</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Designed and deployed a single, standardized client intake process to assess stage, service needs, and readiness before routing entrepreneurs to specific counselors or workshops.
                  </Body>
                </div>
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">2. CRM System &amp; Data Pipeline</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Reorganized client relationship management protocols to capture session notes, demographic data, milestone completions, and technical assistance hours accurately.
                  </Body>
                </div>
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">3. Facilitator &amp; Partner Infrastructure</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Established clear onboarding briefs, curriculum standards, and reporting templates for contracted instructors and community partner organizations.
                  </Body>
                </div>
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">4. Grant Alignment &amp; Compliance Reporting</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Mapped program milestones directly to federal and grant reporting requirements, ensuring real-time visibility into target metrics.
                  </Body>
                </div>
              </div>
            </ScrollReveal>

            {/* SECTION 4: Implementation and Adaptations */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 04</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Implementation and adaptations</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Moving systems from design into daily practice required iterative adjustments based on client and staff feedback during delivery:
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Early in the implementation, initial intake forms proved overly detailed for early-stage founders seeking basic counseling. I adapted the intake sequence into a two-tiered format: a short initial intake for orientation, followed by a deeper diagnostic assessment once an active counseling relationship was established.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Similarly, to improve CRM compliance among external guest facilitators, I introduced simplified post-session reporting templates that captured required compliance metrics without creating undue administrative burden.
              </Body>
            </ScrollReveal>

            {/* SECTION 5: Evidence of Progress */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 05 · Bounded Reporting Period: April 2023–March 2024</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Evidence of progress</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                During the specified case period of April 2023 through March 2024, implementation evidence demonstrated clear structural improvements across center operations:
              </Body>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="p-6 border border-line bg-soft-stone/30">
                  <Meta className="text-plum mb-2">Intake &amp; Onboarding Efficiency</Meta>
                  <p className="font-serif text-slate text-sm leading-relaxed">
                    Standardized intake workflows reduced average client assignment turnaround time and eliminated duplicate intake records across counseling staff.
                  </p>
                </div>
                <div className="p-6 border border-line bg-soft-stone/30">
                  <Meta className="text-plum mb-2">CRM Record Integrity</Meta>
                  <p className="font-serif text-slate text-sm leading-relaxed">
                    Achieved consistent record capture for technical assistance hours, workshop attendances, and participant business milestones across all active programs.
                  </p>
                </div>
                <div className="p-6 border border-line bg-soft-stone/30">
                  <Meta className="text-plum mb-2">Reporting Timeliness</Meta>
                  <p className="font-serif text-slate text-sm leading-relaxed">
                    Quarterly and annual grant compliance reports were compiled directly from CRM pipelines without requiring post-hoc manual data audits.
                  </p>
                </div>
                <div className="p-6 border border-line bg-soft-stone/30">
                  <Meta className="text-plum mb-2">Partner Ecosystem Coordination</Meta>
                  <p className="font-serif text-slate text-sm leading-relaxed">
                    Coordinated multi-session cohort series with external subject-matter experts using standardized curriculum agreements and evaluation rubrics.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* SECTION 6: What the Evidence Does and Does Not Show */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 06</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">What the evidence does and does not show</Headline>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-2">
                <div className="p-6 border-l-2 border-plum bg-paper">
                  <h3 className="font-sans font-medium text-plum text-base md:text-lg mb-3">What the evidence supports</h3>
                  <Body className="text-sm text-slate font-serif leading-relaxed">
                    The evidence confirms that standardized intake workflows and CRM protocols improved internal operational clarity, reduced administrative drag, and produced verifiable data streams suitable for grant compliance and institutional reporting during the April 2023–March 2024 period.
                  </Body>
                </div>
                <div className="p-6 border-l-2 border-line bg-soft-stone/30">
                  <h3 className="font-sans font-medium text-slate text-base md:text-lg mb-3">What remains unestablished</h3>
                  <Body className="text-sm text-slate font-serif leading-relaxed">
                    The evidence does not claim that operational systems alone cause long-term business survival or revenue growth for every client. Institutional infrastructure creates the necessary environment for delivery, but individual venture performance depends on external market factors, capital availability, and execution.
                  </Body>
                </div>
              </div>
            </ScrollReveal>

            {/* SECTION 7: What I Learned */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 07</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">What I learned</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Leading operational strengthening within an established institution reinforced three key insights:
              </Body>
              <div className="flex flex-col gap-4 font-serif text-base text-slate leading-relaxed">
                <p>
                  <strong className="text-ink font-sans font-medium">1. Systems must serve staff, not just reporting.</strong> Operational tools only generate reliable data if they simplify daily work for counselors and facilitators rather than adding friction.
                </p>
                <p>
                  <strong className="text-ink font-sans font-medium">2. Intake is an intervention.</strong> The initial intake process is not merely administrative data gathering; it shapes a client’s expectations and clarifies their immediate priorities.
                </p>
                <p>
                  <strong className="text-ink font-sans font-medium">3. Evidence requires intentional design.</strong> Institutional reporting cannot be an afterthought; the data pipeline must be integrated directly into the delivery arc from day one.
                </p>
              </div>
            </ScrollReveal>

            {/* SECTION 8: Capabilities Demonstrated (Note: Maintained in sidebar to prevent duplication) */}
            <div className="border-t border-line pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <Link 
                href="/selected-work" 
                className="inline-flex items-center gap-3 bg-plum text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-ink transition-colors duration-300"
              >
                <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>Return to Selected Work</span>
              </Link>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-plum hover:text-ink transition-colors duration-200"
              >
                <span>Discuss program architecture with Olajumoke</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
