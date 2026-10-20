import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Coordinating the People and Processes Behind a Founder-Support Program | Olajumoke Michael",
  },
  description:
    "Olajumoke Michael's contribution to Bpeace's Breaking the $1M Barrier: guidance for coaches and facilitators, peer learning, onboarding and Showcase preparation.",
  openGraph: {
    title:
      "Coordinating the People and Processes Behind a Founder-Support Program | Olajumoke Michael",
    description:
      "Olajumoke Michael's contribution to Bpeace's Breaking the $1M Barrier: guidance for coaches and facilitators, peer learning, onboarding and Showcase preparation.",
  },
};

export default function BpeaceCasePage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Header (Dossier Title, Eyebrow & Role) */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pb-24 border-b border-line">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Meta className="text-plum uppercase tracking-widest text-xs sm:text-sm">
              Bpeace / Breaking the $1M Barrier
            </Meta>
            <span className="text-slate/40" aria-hidden="true">·</span>
            <Meta className="text-slate uppercase tracking-wider text-xs">
              Founder-Support Program
            </Meta>
          </div>
          
          <Headline as="h1" size="xl" className="text-ink leading-tight mb-6 max-w-5xl font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Coordinating the people and processes behind a founder-support program
          </Headline>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-block bg-soft-stone border border-line px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-ink rounded-sm">
              Role: U.S. Program Manager (Contract), 2025–2026
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Dossier Content Split */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Sidebar (Left Column) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8 bg-soft-stone/40 p-6 md:p-8 rounded-sm border border-line">
            
            {/* At a glance */}
            <div>
              <Meta as="h2" className="text-plum mb-6 pb-3 border-b border-line block font-semibold text-xs tracking-wider uppercase">
                At a glance
              </Meta>
              <div className="flex flex-col gap-5">
                
                <div className="flex flex-col gap-1 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Organization</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Bpeace
                  </p>
                </div>
                
                <div className="flex flex-col gap-1 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Program</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Breaking the $1M Barrier
                  </p>
                </div>

                <div className="flex flex-col gap-1 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Role</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    U.S. Program Manager (Contract), 2025–2026
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Cohort Scope</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    21 companies across North Carolina and Georgia with closing Showcases in Atlanta and Greensboro.
                  </p>
                </div>

              </div>
            </div>

            {/* Capabilities Demonstrated */}
            <div className="pt-6 border-t border-line">
              <Meta as="h3" className="text-plum mb-4 block font-semibold text-xs tracking-wider uppercase">
                CAPABILITIES DEMONSTRATED
              </Meta>
              <div className="flex flex-col gap-2.5 font-sans text-xs text-ink font-medium">
                <div className="p-2.5 bg-paper rounded-sm border border-line/60">
                  Program Implementation
                </div>
                <div className="p-2.5 bg-paper rounded-sm border border-line/60">
                  Operational Systems Design
                </div>
                <div className="p-2.5 bg-paper rounded-sm border border-line/60">
                  Facilitation &amp; Learning Design
                </div>
                <div className="p-2.5 bg-paper rounded-sm border border-line/60">
                  Stakeholder Coordination
                </div>
                <div className="p-2.5 bg-paper rounded-sm border border-line/60">
                  Implementation Learning
                </div>
              </div>
            </div>

            {/* Quick Navigation Back */}
            <div className="pt-6 border-t border-line">
              <Link 
                href="/selected-work" 
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-plum hover:text-ink transition-colors duration-200"
              >
                <span aria-hidden="true">←</span>
                <span>Back to selected work</span>
              </Link>
            </div>

          </aside>

          {/* Core Narrative (Right Column) */}
          <main className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
            
            {/* Capabilities Bar (Mobile & Header Reference) */}
            <div className="border-b border-line pb-6">
              <Meta className="text-plum mb-2 block uppercase tracking-widest text-xs font-semibold">
                CAPABILITIES DEMONSTRATED
              </Meta>
              <p className="font-sans text-xs md:text-sm font-medium text-ink leading-relaxed">
                Program Implementation · Operational Systems Design · Facilitation &amp; Learning Design · Stakeholder Coordination · Implementation Learning
              </p>
            </div>

            {/* Paragraph 1 */}
            <ScrollReveal personality="standard">
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed">
                I helped translate Bpeace&apos;s program goals into coordinated delivery across founders, staff, volunteer specialists, facilitators and regional Showcases. My work connected practical program design with implementation—preparing contributors, clarifying expectations and coordinating activities across the founder experience.
              </Body>
            </ScrollReveal>

            {/* Paragraph 2 */}
            <ScrollReveal personality="standard">
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed">
                Bpeace&apos;s public updates describe a cohort of 21 companies in North Carolina and Georgia and two closing Showcases in Atlanta and Greensboro. The program brought together coaching, group learning and opportunities for founders to present their businesses and receive feedback.
              </Body>
            </ScrollReveal>

            {/* Paragraph 3 */}
            <ScrollReveal personality="standard">
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed">
                Within that team-delivered program, I created guidance for coaches and facilitators, designed and facilitated peer-learning sessions, and substantially shaped onboarding and Showcase preparation. I also coordinated contributors and stakeholder engagement and contributed to internal reporting and learning synthesis.
              </Body>
            </ScrollReveal>

            {/* Paragraph 4 */}
            <ScrollReveal personality="standard">
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed">
                My contribution focused on the operating infrastructure around the program. Bpeace provided the program and institutional direction; colleagues and volunteer specialists contributed coordination, expertise and delivery; and founders developed and applied the work within their own businesses.
              </Body>
            </ScrollReveal>

            {/* Paragraph 5 */}
            <ScrollReveal personality="standard">
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed">
                The experience reflects my ability to move between program design, facilitation and implementation while keeping people and activities connected.
              </Body>
            </ScrollReveal>

            {/* Action Buttons */}
            <div className="pt-10 mt-6 border-t border-line flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/selected-work" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-plum text-plum px-7 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300 text-center"
              >
                Back to selected work
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-plum text-paper px-7 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-ink transition-colors duration-300 text-center shadow-sm"
              >
                Discuss a role or project
              </Link>
            </div>

          </main>

        </div>
      </section>

    </div>
  );
}
