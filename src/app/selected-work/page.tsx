import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Selected Work",
  description:
    "Case studies in program architecture, implementation leadership, and evidence interpretation by Olajumoke Michael.",
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
            
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-8">
              <Body className="text-base md:text-lg text-ink font-semibold leading-relaxed font-serif">
                Role titles tell only part of the story. The case below offers a closer look at how I translated a proposition into a program, led its delivery and learned from what implementation revealed.
              </Body>
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
              <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-6 md:p-12 lg:p-14 relative overflow-hidden rounded-sm">
                
                <div className="flex flex-row items-center justify-between gap-4 mb-8 border-b border-line/40 pb-4 w-full">
                  <Meta className="text-plum">Case 01 · Venture Development Pilot</Meta>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <Meta className="text-slate font-sans">2026 · Ethnoir</Meta>
                    <svg className="w-5 h-5 text-plum transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <Headline as="h2" size="xl" className="text-ink leading-tight mb-8 font-sans font-medium max-w-4xl group-hover:text-plum transition-colors duration-300">
                  Designing a Founder Support Pilot—and Learning from Its Limits
                </Headline>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line/40 pt-8 mb-8">
                  <div className="md:col-span-5">
                    <Meta className="text-plum mb-2">Context</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Venture Readiness Lab<br/>
                      Founder-facing pilot delivered through Ethnoir
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
                  <Meta className="text-plum mb-3">Abstract</Meta>
                  <Body className="text-base md:text-lg text-slate leading-relaxed font-serif mb-10 max-w-4xl">
                    I translated a venture-readiness proposition into a six-week founder-support pilot, designed its program and operating structure, led delivery, and examined what the evidence could—and could not—show. All six active founders reached the final session. Five participants created structural business deliverables that I personally reviewed and confirmed. The case shows how implementation, missed targets and measurement gaps shaped the next design questions.
                  </Body>
                  
                  <div className="flex justify-center items-center pt-2">
                    <span className="inline-flex items-center gap-3 bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold group-hover:bg-plum group-hover:text-paper transition-colors duration-300">
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

            {/* Primary Case 2: Winston-Salem Women's Business Center */}
          <ScrollReveal personality="structural">
            <Link href="/selected-work/winston-salem-wbc" className="block group">
              <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-6 md:p-12 lg:p-14 relative overflow-hidden rounded-sm">
                
                <div className="flex flex-row items-center justify-between gap-4 mb-8 border-b border-line/40 pb-4 w-full">
                  <Meta className="text-plum">Case 02 · Regional Institutional Leadership</Meta>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    <Meta className="text-slate font-sans">April 2023–March 2024</Meta>
                    <svg className="w-5 h-5 text-plum transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <Headline as="h2" size="xl" className="text-ink leading-tight mb-8 font-sans font-medium max-w-4xl group-hover:text-plum transition-colors duration-300">
                  Strengthening the Operating Infrastructure of a Regional Women’s Business Center
                </Headline>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-line/40 pt-8 mb-8">
                  <div className="md:col-span-5">
                    <Meta className="text-plum mb-2">Context</Meta>
                    <Body className="text-slate font-sans text-sm leading-relaxed">
                      Winston-Salem Women’s Business Center<br/>
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
                  <Meta className="text-plum mb-3">Abstract</Meta>
                  <Body className="text-base md:text-lg text-slate leading-relaxed font-serif mb-8 max-w-4xl">
                    At the Winston-Salem Women’s Business Center, I led a growing regional portfolio while strengthening the systems behind delivery—from program planning and client intake to CRM, reporting, partnerships and grant-supported operations. This case shows how I worked across an established institution to connect multiple programs, contributors and evidence requirements within a more coherent operating environment.
                  </Body>

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
                    <span className="inline-flex items-center gap-3 bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold group-hover:bg-plum group-hover:text-paper transition-colors duration-300">
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

    </div>
  );
}
