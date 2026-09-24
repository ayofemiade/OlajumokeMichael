import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

export const metadata = {
  title: "Experience",
  description:
    "Professional progression, leadership roles, and downloadable résumé of Olajumoke Michael.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Opening Orientation */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-20 md:pb-28 border-b border-line/30">
        <div className="max-w-[1400px] w-full mx-auto">
          <ScrollReveal personality="strong" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col">
              <Meta className="text-plum mb-4">Professional Progression</Meta>
              <Display italic className="text-ink leading-[1.1] tracking-tight">
                Experience
              </Display>
            </div>
            
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-8">
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed mb-8 max-w-2xl">
                My work has taken place in different organizations and sectors, with different responsibilities in each. This page offers a selective account of that progression: from managing grants and operations to leading programs, coordinating delivery and learning from implementation.
              </Body>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-line/50 pt-6">
                <a
                  href="/api/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum transition-colors duration-300 w-full sm:w-auto group shadow-sm"
                >
                  <span>Download résumé (PDF)</span>
                  <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300 text-paper/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                
                <span className="font-sans text-xs text-slate uppercase tracking-wider font-medium hidden sm:inline-block">
                  Official PDF · Updated 2026
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. The Chronology */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[1400px] mx-auto border-t border-line">
          
          {/* Ethnoir */}
          <ScrollReveal personality="structural" className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-b border-line border-l-2 border-l-transparent hover:border-l-plum hover:pl-4 transition-all duration-300">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-2">2025–present · Winston-Salem, North Carolina</Meta>
              <Headline size="lg" className="text-ink font-sans group-hover:text-plum transition-colors duration-300">Ethnoir</Headline>
              <Meta className="text-slate uppercase tracking-wider font-semibold text-xs">Founder</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-1">
              <Body className="text-base md:text-lg text-slate leading-relaxed font-serif mb-8">
                I founded Ethnoir to work on questions of venture development. I designed and delivered its founder-facing Venture Readiness Lab pilot, connecting the program’s purpose with a six-week structure, participant activities, delivery operations and evidence collection. The pilot is documented in Selected Work, including what I personally led, what participants created and what the evidence does—and does not—show.
              </Body>
              <Link
                href="/selected-work/venture-readiness-lab"
                className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300 w-fit"
              >
                Read the Venture Readiness Lab case
              </Link>
            </div>
          </ScrollReveal>

          {/* Bpeace */}
          <ScrollReveal personality="structural" delay={0.08} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-b border-line border-l-2 border-l-transparent hover:border-l-plum hover:pl-4 transition-all duration-300">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-2">2025–2026 · Remote / NC &amp; GA</Meta>
              <Headline size="lg" className="text-ink font-sans group-hover:text-plum transition-colors duration-300">Bpeace</Headline>
              <Meta className="text-slate uppercase tracking-wider font-semibold text-xs">U.S. Program Manager (Contract)</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-1">
              <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                For Bpeace’s Breaking the $1M Barrier program, I managed implementation and coordinated delivery across a multi-state founder-support initiative. The role brought together participant engagement, learning and coaching activities, communications, stakeholder coordination and reporting. The work required keeping contributors, activities and moving parts aligned throughout implementation while responding to the realities of delivery.
              </Body>
            </div>
          </ScrollReveal>

          {/* Winston-Salem WBC */}
          <ScrollReveal personality="structural" delay={0.16} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-b border-line border-l-2 border-l-transparent hover:border-l-plum hover:pl-4 transition-all duration-300">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-2">2023–2025 · Winston-Salem, North Carolina</Meta>
              <Headline size="lg" className="text-ink font-sans group-hover:text-plum transition-colors duration-300">Winston-Salem Women’s Business Center</Headline>
              <Meta className="text-slate uppercase tracking-wider font-semibold text-xs">Program Director</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-1">
              <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                I led regional entrepreneurship-support programming and the operations behind it. My responsibilities included program planning and delivery, partnerships, staff and contributor coordination, grant requirements, and reporting. This role deepened my experience in connecting what entrepreneurs needed with the resources, relationships and operating structures available to support them.
              </Body>
            </div>
          </ScrollReveal>

          {/* Guilford College */}
          <ScrollReveal personality="structural" delay={0.1} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-b border-line border-l-2 border-l-transparent hover:border-l-plum hover:pl-4 transition-all duration-300">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-2">2021–2023 · Greensboro, North Carolina</Meta>
              <Headline size="lg" className="text-ink font-sans group-hover:text-plum transition-colors duration-300">Guilford College</Headline>
              <Meta className="text-slate uppercase tracking-wider font-semibold text-xs">Assistant Director, Advancement Operations</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-1">
              <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                I worked in advancement operations, strengthening the processes behind gift administration, stewardship, data quality and reporting. The work involved coordinating across colleagues and functions, resolving operational issues and making information more reliable for the people responsible for using it.
              </Body>
            </div>
          </ScrollReveal>

          {/* SuccorAfrica */}
          <ScrollReveal personality="structural" delay={0.1} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-b border-line border-l-2 border-l-transparent hover:border-l-plum hover:pl-4 transition-all duration-300">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-2">2019–2021 · Remote</Meta>
              <Headline size="lg" className="text-ink font-sans group-hover:text-plum transition-colors duration-300">SuccorAfrica Communications Ltd</Headline>
              <Meta className="text-slate uppercase tracking-wider font-semibold text-xs">Project Consultant</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-1">
              <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                I worked on project planning and implementation support, including operating processes, monitoring and review. This role drew on my earlier program-management experience while extending my work with organizations seeking to carry out and learn from their initiatives.
              </Body>
            </div>
          </ScrollReveal>

          {/* British High Commission */}
          <ScrollReveal personality="structural" delay={0.1} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 border-l-2 border-l-transparent hover:border-l-plum hover:pl-4 transition-all duration-300">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-2">2014–2019 · Abuja, Nigeria</Meta>
              <Headline size="lg" className="text-ink font-sans group-hover:text-plum transition-colors duration-300">British High Commission</Headline>
              <Meta className="text-slate uppercase tracking-wider font-semibold text-xs">Grants &amp; Program Manager</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-1">
              <Body className="text-base md:text-lg text-slate leading-relaxed font-serif">
                I managed grants and program work within the British High Commission in Nigeria. The portfolio covered justice, economic development and security-related initiatives. My responsibilities included partner coordination, grant administration, monitoring, compliance, reporting and analysis for program decisions. The work involved government, civil-society and international stakeholders; it was not work performed in the United Kingdom.
              </Body>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. The Thread (Synthesis) */}
      <section className="relative bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal personality="standard" className="lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center">
            <Headline size="xl" italic className="text-ink leading-tight mb-8">
              The thread across the roles
            </Headline>
            <Body className="text-base md:text-lg text-slate leading-relaxed mb-10 max-w-3xl mx-auto font-serif">
              These positions did not involve identical work. Together, they show a progression in responsibility for turning intentions into organized delivery, coordinating people and processes, and using information from practice to inform decisions. My Selected Work examines one project in greater depth.
            </Body>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
              <Link
                href="/selected-work"
                className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
              >
                View selected work
              </Link>
              <a
                href="/Olajumoke-Michael-Resume.pdf"
                download="Olajumoke-Michael-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-line text-ink px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:border-ink transition-colors duration-300"
              >
                Download résumé (PDF)
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Contact Invitation */}
      <section className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-slate/30 pt-16">
          <div className="max-w-2xl">
            <Meta className="text-soft-stone/70 mb-6">A conversation</Meta>
            <Headline as="h2" size="lg" className="text-paper leading-tight mb-6">
              If my experience is relevant to a role, a program or service challenge, or a possible collaboration, I would be glad to hear from you.
            </Headline>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-plum text-white hover:bg-paper hover:text-ink transition-colors duration-300 text-sm font-medium tracking-wide uppercase shrink-0"
          >
            Contact me
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
