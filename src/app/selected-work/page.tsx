import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

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

      {/* 2. The Case Card (Abstract Block) */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal personality="structural">
            <Link href="/selected-work/venture-readiness-lab" className="block group">
              <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-8 md:p-16 lg:p-24 relative overflow-hidden rounded-sm">
                
                <div className="absolute top-0 right-0 p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 hidden md:block">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-plum">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                  <div className="lg:col-span-10">
                    <Headline as="h2" size="xl" className="text-ink leading-tight mb-12 font-sans group-hover:text-plum transition-colors duration-300">
                      Designing a Founder Support Pilot and Learning from Its Limits
                    </Headline>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-line/50 pt-12">
                      <div>
                        <Meta className="text-plum mb-3">Context</Meta>
                        <Body className="text-slate font-sans leading-relaxed">
                          Venture Readiness Lab<br/>
                          Founder-facing pilot delivered through Ethnoir
                        </Body>
                      </div>
                      <div>
                        <Meta className="text-plum mb-3">Role</Meta>
                        <Body className="text-slate font-sans leading-relaxed">
                          Program architect, lead facilitator, primary implementer and evidence lead
                        </Body>
                      </div>
                    </div>

                    <div className="mt-12 border-t border-line/50 pt-12">
                      <Meta className="text-plum mb-4">Abstract</Meta>
                      <Body className="text-base md:text-lg text-slate leading-relaxed font-serif mb-10 max-w-4xl">
                        I turned a startup support idea into a real six-week pilot program. I designed how it would work, ran the sessions, and carefully measured the results. All six founders completed the program, and five of them walked away with practical business tools that I personally reviewed to ensure they were ready to use. The case shows how real-world challenges shaped the next steps.
                      </Body>
                      <div className="flex justify-center items-center pt-4">
                        <span className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold group-hover:bg-plum group-hover:text-paper transition-colors duration-300">
                          Read the case study
                        </span>
                      </div>
                    </div>
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
