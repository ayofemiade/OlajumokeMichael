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
      
      {/* 1. Header (Dossier Title) */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pb-24 border-b border-line">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto">
          <Meta className="text-plum mb-4 uppercase tracking-widest">Case Study 02 · Institutional Leadership</Meta>
          <Headline as="h1" size="xl" className="text-ink leading-tight mb-6 max-w-5xl font-sans">
            Strengthening the Operating Infrastructure of a Regional Women’s Business Center
          </Headline>
          <Body className="text-base md:text-lg text-slate leading-relaxed font-serif max-w-3xl">
            At the Winston-Salem Women’s Business Center, I led a growing regional portfolio while strengthening the systems behind delivery—from program planning and client intake to CRM, reporting, partnerships and grant-supported operations.
          </Body>
        </ScrollReveal>
      </section>

      {/* 2. Dossier Content Split */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Sidebar (Left Column) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8 bg-soft-stone/40 p-8 rounded-sm border border-line">
            
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
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Role</Meta>
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
                    Regional portfolio management, intake workflows, CRM infrastructure, grant-funded program alignment, partner ecosystem coordination, and evidence/reporting standards.
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-line">
              <Meta as="h3" className="text-plum mb-4 block font-semibold">Capabilities demonstrated</Meta>
              <div className="flex flex-col gap-4 font-sans text-xs text-ink font-medium">
                <div>
                  <strong className="block text-ink font-semibold">Institutional Program Leadership</strong>
                  <span className="text-slate font-serif text-xs leading-normal">Led a regional portfolio of entrepreneurship and business growth initiatives across multiple stakeholder groups.</span>
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

            {/* Navigation back */}
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

          {/* Core Narrative (Right Column) */}
          <div className="lg:col-span-8 flex flex-col gap-20">
            
            {/* The Operating Context */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6">
              <Headline as="h2" size="lg" className="text-ink font-sans">The operating context</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                At the Winston-Salem Women’s Business Center, I led a growing regional portfolio while strengthening the operational foundation required to support high-volume client delivery. Operating within an established institution requires connecting multiple active programs, diverse service contributors, and rigorous funder and compliance expectations into a clear, cohesive environment.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                During the case period of April 2023 to March 2024, my focus centered on transitioning from fragmented, ad-hoc program activities into structured, repeatable operational systems. This work spanned program design, client intake workflows, CRM optimization, inter-departmental collaboration, and transparent evidence reporting.
              </Body>
            </ScrollReveal>

            {/* Core Leadership & Systems Intervention */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">Core leadership &amp; systems intervention</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                To build a resilient operating environment, I addressed several core areas of institutional delivery:
              </Body>
              <div className="flex flex-col gap-6 my-2">
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">1. Client Intake &amp; Workflow Architecture</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Standardized client onboarding and assessment processes, ensuring incoming entrepreneurs received consistent orientation and were matched to the appropriate counseling or cohort offerings efficiently.
                  </Body>
                </div>
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">2. CRM &amp; Data Infrastructure</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Refined client management data tracking, linking session outcomes, participation metrics, and business milestones into a centralized data pipeline.
                  </Body>
                </div>
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">3. Partnership Alignment</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Fostered collaborative agreements with regional ecosystem partners, guest facilitators, and resource organizations, expanding service reach while protecting core program quality.
                  </Body>
                </div>
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm">
                  <Meta className="text-plum mb-2">4. Grant &amp; Compliance Reporting</Meta>
                  <Body className="text-sm md:text-base text-ink font-sans leading-relaxed">
                    Synchronized program milestones with grant requirements, ensuring clear data trails, accurate reporting, and timely evidence generation for institutional stakeholders.
                  </Body>
                </div>
              </div>
            </ScrollReveal>

            {/* Key Outcomes & Operational Impact */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">Key outcomes &amp; operational impact</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                By reinforcing the operating infrastructure, the center improved delivery clarity across programs, strengthened compliance integrity, and elevated the overall client experience.
              </Body>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="p-6 border border-line bg-paper">
                  <Meta className="text-plum mb-2">Operational Coherence</Meta>
                  <p className="font-serif text-slate text-sm leading-relaxed">
                    Established unified intake and CRM tracking protocols that reduced administrative overhead and improved client continuity across multiple advisors.
                  </p>
                </div>
                <div className="p-6 border border-line bg-paper">
                  <Meta className="text-plum mb-2">Institutional Evidence</Meta>
                  <p className="font-serif text-slate text-sm leading-relaxed">
                    Delivered transparent, auditable reporting streams that satisfied federal, regional, and foundation funding requirements seamlessly.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom CTA / Back */}
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
