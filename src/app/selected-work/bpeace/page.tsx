import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Bpeace / Breaking the $1M Barrier Case Study",
  description:
    "Coordinating the people and processes behind a founder-support program. A professional portfolio case study by Olajumoke Michael.",
};

export default function BpeaceCasePage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Header (Dossier Title & Opening Summary) */}
      <section className="relative px-5 sm:px-8 md:px-12 lg:px-24 pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-24 border-b border-line">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto">
          <Meta className="text-plum mb-4 uppercase tracking-widest text-xs sm:text-sm">Case Study 02 · Institutional Program Implementation</Meta>
          <Headline as="h1" size="xl" className="text-ink leading-tight mb-6 max-w-5xl font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Coordinating the people and processes behind a founder-support program
          </Headline>
          <Body className="text-base md:text-lg text-slate leading-relaxed font-serif max-w-3xl">
            I helped translate Bpeace’s program goals into coordinated delivery across founders, staff, volunteer specialists, facilitators and regional Showcases. My work connected practical program design with implementation—preparing contributors, clarifying expectations and coordinating activities across the founder experience.
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
                    Bpeace
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Role Tenure</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    U.S. Program Manager (Contract), 2025–2026
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Scope</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Breaking the $1M Barrier
                  </p>
                </div>

              </div>
            </div>

            {/* Capabilities Demonstrated Sidebar */}
            <div className="pt-6 border-t border-line">
              <Meta as="h3" className="text-plum mb-4 block font-semibold">Capabilities demonstrated</Meta>
              <div className="flex flex-col gap-4 font-sans text-xs text-ink font-medium">
                <div>
                  <strong className="block text-ink font-semibold">Program Implementation</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Operational Systems Design</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Facilitation & Learning Design</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Stakeholder Coordination</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Implementation Learning</strong>
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

          {/* Core Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-20">
            
            {/* Opening summary */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 01</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Program context</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Bpeace’s public updates describe a cohort of 21 companies in North Carolina and Georgia and two closing Showcases in Atlanta and Greensboro. The program brought together coaching, group learning and opportunities for founders to present their businesses and receive feedback.
              </Body>
            </ScrollReveal>

            {/* What I did */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 02</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">My contribution</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Within that team-delivered program, I created guidance for coaches and facilitators, designed and facilitated peer-learning sessions, and substantially shaped onboarding and Showcase preparation. I also coordinated contributors and stakeholder engagement and contributed to internal reporting and learning synthesis.
              </Body>
            </ScrollReveal>

            {/* Focus and collaboration */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 03</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Focus and collaboration</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                My contribution focused on the operating infrastructure around the program. Bpeace provided the program and institutional direction; colleagues and volunteer specialists contributed coordination, expertise and delivery; and founders developed and applied the work within their own businesses.
              </Body>
            </ScrollReveal>

            {/* Reflection */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 04</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Reflection</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The experience reflects my ability to move between program design, facilitation and implementation while keeping people and activities connected.
              </Body>
            </ScrollReveal>

            {/* Bottom CTA / Navigation */}
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
