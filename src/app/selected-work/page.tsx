import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { FadeReveal } from "@/components/motion/FadeReveal";
import Link from "next/link";

export default function SelectedWorkPage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Opening Orientation */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pb-32">
        <FadeReveal stagger direction="up" className="max-w-[1400px] w-full mx-auto">
          <Display italic className="text-ink leading-[1.1] tracking-tight mb-8">
            Selected Work
          </Display>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8 md:col-start-5 xl:col-start-6 xl:col-span-6">
              <Body className="text-xl md:text-2xl text-slate leading-relaxed font-serif">
                Role titles tell only part of the story. The case below offers a closer look at how I translated a proposition into a program, led its delivery and learned from what implementation revealed.
              </Body>
            </div>
          </div>
        </FadeReveal>
      </section>

      {/* 2. The Case Card (Abstract Block) */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-32 md:pb-48">
        <FadeReveal direction="up" delay={0.2} className="max-w-[1400px] mx-auto">
          <Link href="/selected-work/venture-readiness-lab" className="block group">
            <div className="border border-line bg-soft-stone/30 hover:bg-soft-stone/80 transition-colors duration-500 p-8 md:p-16 lg:p-24 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-plum">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-10">
                  <Headline as="h2" size="xl" className="text-ink leading-tight mb-12">
                    Designing a Founder Support Pilot and Learning from Its Limits
                  </Headline>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-line/50 pt-12">
                    <div>
                      <Meta className="text-plum mb-4">Context</Meta>
                      <Body className="text-slate font-sans">
                        Venture Readiness Lab<br/>
                        Founder-facing pilot delivered through Ethnoir
                      </Body>
                    </div>
                    <div>
                      <Meta className="text-plum mb-4">Role</Meta>
                      <Body className="text-slate font-sans">
                        Program architect, lead facilitator, primary implementer and evidence lead
                      </Body>
                    </div>
                  </div>

                  <div className="mt-12 border-t border-line/50 pt-12">
                    <Meta className="text-plum mb-4">Abstract</Meta>
                    <Body className="text-lg text-slate leading-relaxed font-serif mb-8 max-w-4xl">
                      I turned a startup support idea into a real six-week pilot program. I designed how it would work, ran the sessions, and carefully measured the results. All six founders completed the program, and five of them walked away with practical business tools that I personally reviewed to ensure they were ready to use. The case shows how real-world challenges shaped the next steps.
                    </Body>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium tracking-wide uppercase text-plum">Read the case study</span>
                      <span className="w-10 h-[1px] bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </FadeReveal>
      </section>

    </div>
  );
}
