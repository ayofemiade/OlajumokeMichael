import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Selected Work | Olajumoke Michael",
  },
  description:
    "Three cases from Olajumoke Michael: a founder-support pilot she designed, a founder-support program she helped deliver, and the operating systems of a regional business center.",
  alternates: {
    canonical: "/selected-work",
  },
  openGraph: {
    title: "Selected Work | Olajumoke Michael",
    description:
      "Three cases from Olajumoke Michael: a founder-support pilot she designed, a founder-support program she helped deliver, and the operating systems of a regional business center.",
    url: "https://olajumokemichael.com/selected-work",
  },
};

export default function SelectedWorkPage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Opening Orientation */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-20 md:pb-28 border-b border-line/30">
        <div className="max-w-[1400px] w-full mx-auto">
          <ScrollReveal personality="strong" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col">
              <Meta className="text-plum mb-4">Case Studies &amp; Evidence</Meta>
              <Display italic className="text-ink leading-[1.1] tracking-tight">
                Selected Work
              </Display>
            </div>
            
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-6">
              <p
                className="text-ink font-serif font-light leading-relaxed max-w-3xl"
                style={{
                  fontSize: "clamp(1.125rem, 0.95rem + 0.75vw, 1.75rem)",
                  lineHeight: 1.45,
                }}
              >
                Role titles tell only part of the story. These cases take a closer look at what I built, what I contributed and what I learned from what happened.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Case Studies List */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Primary Case 1: Venture Readiness Lab */}
          <ScrollReveal personality="structural">
            <Link href="/selected-work/venture-readiness-lab" className="block group">
              <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-5 sm:p-8 md:p-12 lg:p-14 relative overflow-hidden rounded-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 border-b border-line/40 pb-4 w-full">
                  <Meta className="text-plum">Case 01 · Venture Development Pilot</Meta>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <Meta className="text-slate font-sans">2026 · Ethnoir</Meta>
                    <svg className="w-5 h-5 text-plum transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <Headline as="h2" size="lg" className="text-ink leading-tight mb-6 sm:mb-8 font-sans font-medium max-w-3xl group-hover:text-plum transition-colors duration-300 text-lg sm:text-xl md:text-2xl lg:text-[1.75rem]">
                  Designing a Founder Support Pilot—and Learning from Its Limits
                </Headline>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line/40 pt-8 mb-8">
                  <div className="md:col-span-5">
                    <Meta className="text-plum mb-2">Context</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Venture Readiness Lab<br/>
                      Founder-facing pilot delivered through Ethnoir · 2026
                    </Body>
                  </div>
                  <div className="md:col-span-7">
                    <Meta className="text-plum mb-2">Role</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Program architect, lead facilitator, primary implementer and evidence lead
                    </Body>
                  </div>
                </div>

                <div className="border-t border-line/40 pt-8">
                  {/* Structured 3-part evidence narrative */}
                  <div className="space-y-6 mb-8 font-serif">
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                        What I built
                      </span>
                      <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                        A six-week pilot for early-stage founders, including the program design and the intake, communication, resource and tracking workflow behind it.
                      </Body>
                    </div>

                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                        What I contributed
                      </span>
                      <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                        I designed the program, led the six weekly sessions, supported participants between sessions and reviewed what they created. All six active founders reached the final session, and five created business deliverables that I personally reviewed and confirmed.
                      </Body>
                    </div>

                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                        What I learned
                      </span>
                      <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                        Offering support is not the same as getting it used, and a meaningful assessment of change needs comparable measures planned and collected across the program. The case covers the targets the pilot missed and what I would change.
                      </Body>
                    </div>
                  </div>

                  <div className="mb-10">
                    <Meta className="text-plum mb-3 text-xs">Capabilities Demonstrated</Meta>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Program & Service Architecture",
                        "Implementation Leadership",
                        "Operational Systems Design",
                        "Measurement & Evaluative Judgment",
                        "Evidence-Informed Adaptation"
                      ].map((tag) => (
                        <span key={tag} className="text-xs font-sans font-medium px-3 py-1.5 bg-paper border border-line text-ink rounded-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center pt-2">
                    <span className="inline-flex items-center justify-center gap-3 bg-transparent border border-plum text-plum px-6 sm:px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold group-hover:bg-plum group-hover:text-paper transition-colors duration-300 w-full sm:w-auto text-center">
                      <span>Read the case study</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </ScrollReveal>

          {/* Primary Case 2: Bpeace */}
          <ScrollReveal personality="structural">
            <Link href="/selected-work/bpeace" className="block group">
              <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-5 sm:p-8 md:p-12 lg:p-14 relative overflow-hidden rounded-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 border-b border-line/40 pb-4 w-full">
                  <Meta className="text-plum">Case 02 · Institutional Program Implementation</Meta>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <Meta className="text-slate font-sans">2025–2026 · Bpeace</Meta>
                    <svg className="w-5 h-5 text-plum transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <Headline as="h2" size="lg" className="text-ink leading-tight mb-6 sm:mb-8 font-sans font-medium max-w-3xl group-hover:text-plum transition-colors duration-300 text-lg sm:text-xl md:text-2xl lg:text-[1.75rem]">
                  Coordinating the People and Processes Behind a Founder-Support Program
                </Headline>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line/40 pt-8 mb-8">
                  <div className="md:col-span-5">
                    <Meta className="text-plum mb-2">Context</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Breaking the $1M Barrier<br/>
                      Founder-support initiative delivered by Bpeace
                    </Body>
                  </div>
                  <div className="md:col-span-7">
                    <Meta className="text-plum mb-2">Role</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      U.S. Program Manager (Contract), September 2025 - June 2026
                    </Body>
                  </div>
                </div>

                <div className="border-t border-line/40 pt-8">
                  <Meta className="text-plum mb-3">Abstract</Meta>
                  <div className="space-y-4 mb-8 max-w-4xl">
                    <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                      I helped translate Bpeace&apos;s program goals into coordinated delivery across founders, staff, volunteer specialists, facilitators and regional Showcases. My work connected practical program design with implementation—preparing contributors, clarifying expectations and coordinating activities across the founder experience.
                    </Body>
                    <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                      Within the team-delivered program, I created guidance for coaches and facilitators, designed and facilitated peer-learning sessions, and substantially shaped onboarding and Showcase preparation.
                    </Body>
                  </div>

                  <div className="mb-10">
                    <Meta className="text-plum mb-3 text-xs">Capabilities Demonstrated</Meta>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Program Implementation",
                        "Operational Systems Design",
                        "Facilitation & Learning Design",
                        "Stakeholder Coordination",
                        "Implementation Learning"
                      ].map((tag) => (
                        <span key={tag} className="text-xs font-sans font-medium px-3 py-1.5 bg-paper border border-line text-ink rounded-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center pt-2">
                    <span className="inline-flex items-center justify-center gap-3 bg-transparent border border-plum text-plum px-6 sm:px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold group-hover:bg-plum group-hover:text-paper transition-colors duration-300 w-full sm:w-auto text-center">
                      <span>Read the case study</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </ScrollReveal>

          {/* Primary Case 3: Winston-Salem Women's Business Center */}
          <ScrollReveal personality="structural">
            <Link href="/selected-work/winston-salem-wbc" className="block group">
              <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-5 sm:p-8 md:p-12 lg:p-14 relative overflow-hidden rounded-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 border-b border-line/40 pb-4 w-full">
                  <Meta className="text-plum">Case 03 · Regional Institutional Leadership</Meta>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <Meta className="text-slate font-sans">April 2023–March 2024</Meta>
                    <svg className="w-5 h-5 text-plum transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <Headline as="h2" size="lg" className="text-ink leading-tight mb-6 sm:mb-8 font-sans font-medium max-w-3xl group-hover:text-plum transition-colors duration-300 text-lg sm:text-xl md:text-2xl lg:text-[1.75rem]">
                  Strengthening the Operating Infrastructure of a Regional Women&apos;s Business Center
                </Headline>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line/40 pt-8 mb-8">
                  <div className="md:col-span-5">
                    <Meta className="text-plum mb-2">Context</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Winston-Salem Women&apos;s Business Center<br/>
                      Case period: April 2023–March 2024
                    </Body>
                  </div>
                  <div className="md:col-span-7">
                    <Meta className="text-plum mb-2">Role</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Program Director, April 2023–February 2025
                    </Body>
                  </div>
                </div>

                <div className="border-t border-line/40 pt-8">
                  {/* Structured 2-part evidence narrative */}
                  <div className="space-y-6 mb-8 max-w-4xl font-serif">
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                        What I built and contributed
                      </span>
                      <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                        I led a regional program portfolio and strengthened the systems behind it: program planning, client intake, CRM, reporting, partnerships and grant-supported operations.
                      </Body>
                    </div>

                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                        What I learned
                      </span>
                      <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                        A new process can make an institution more consistent while adding burden for the people who use it, so I watched what happened in delivery and adjusted the approach.
                      </Body>
                    </div>
                  </div>

                  <div className="mb-10">
                    <Meta className="text-plum mb-3 text-xs">Capabilities Demonstrated</Meta>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Institutional Program Leadership",
                        "Portfolio Operations",
                        "Operational Systems",
                        "Partnership Infrastructure",
                        "Measurement & Reporting"
                      ].map((tag) => (
                        <span key={tag} className="text-xs font-sans font-medium px-3 py-1.5 bg-paper border border-line text-ink rounded-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center pt-2">
                    <span className="inline-flex items-center justify-center gap-3 bg-transparent border border-plum text-plum px-6 sm:px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold group-hover:bg-plum group-hover:text-paper transition-colors duration-300 w-full sm:w-auto text-center">
                      <span>Read the case study</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. Closing Band */}
      <section className="relative bg-ink text-paper py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <ScrollReveal
          personality="strong"
          className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-slate/30 pt-12"
        >
          <div className="max-w-2xl">
            <Meta className="text-soft-stone/70 mb-4 tracking-[0.1em]">A CONVERSATION</Meta>
            <Headline as="h2" size="lg" className="text-paper leading-tight">
              Relevant to a role or project you are considering?
            </Headline>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-plum text-white hover:bg-paper hover:text-ink transition-colors duration-300 text-xs font-semibold tracking-[0.15em] uppercase text-center shadow-sm"
            >
              Discuss a role or project
            </Link>
            <Link 
              href="/experience" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-paper/70 text-paper hover:bg-paper hover:text-ink transition-colors duration-300 text-xs font-semibold tracking-[0.15em] uppercase text-center"
            >
              Explore my experience
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
