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
            When I joined the Winston-Salem Women’s Business Center, I stepped into an established, SBA-supported organization with active programs, experienced counselors and a growing network of partners. That growth was increasing the demands on the systems behind delivery. As Program Director, I led the program portfolio while strengthening the operating infrastructure that connected planning, client intake, service delivery, CRM practices, reporting, measurement and partnerships. Rather than designing a single founder intervention, I worked at the institutional level: helping multiple programs and contributors operate more coherently within a regional entrepreneurship-support environment. This case demonstrates how I connect strategy, systems, implementation and evidence as an organization grows.
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
                    Winston-Salem Women’s Business Center
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
                    April 2023 – March 2024
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Scope</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Regional entrepreneurship-support portfolio
                  </p>
                </div>

              </div>
            </div>

            {/* Capabilities Demonstrated Sidebar */}
            <div className="pt-6 border-t border-line">
              <Meta as="h3" className="text-plum mb-4 block font-semibold">Capabilities demonstrated</Meta>
              <div className="flex flex-col gap-4 font-sans text-xs text-ink font-medium">
                <div>
                  <strong className="block text-ink font-semibold">Institutional program leadership</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Program portfolio management</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Operating-system and client-pathway development</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Cross-functional implementation</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Ecosystem and partnership infrastructure</strong>
                </div>
                <div>
                  <strong className="block text-ink font-semibold">Measurement, reporting and grant stewardship</strong>
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

          {/* Core Narrative (Right Column — Verbatim Public Case Study Content) */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-20">
            
            {/* Opening summary */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 01</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Opening summary</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                When I joined the Winston-Salem Women’s Business Center, I stepped into an established, SBA-supported organization with active programs, experienced counselors and a growing network of partners. That growth was increasing the demands on the systems behind delivery. As Program Director, I led the program portfolio while strengthening the operating infrastructure that connected planning, client intake, service delivery, CRM practices, reporting, measurement and partnerships. Rather than designing a single founder intervention, I worked at the institutional level: helping multiple programs and contributors operate more coherently within a regional entrepreneurship-support environment. This case demonstrates how I connect strategy, systems, implementation and evidence as an organization grows.
              </Body>
            </ScrollReveal>

            {/* The challenge */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 02</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">The challenge</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The Center was expanding its programming, client engagement and partnership activity. Its operating practices were still developing alongside that growth. Client records were sometimes incomplete, intake and orientation practices were not fully consistent, staff familiarity with SBA reporting requirements was still maturing, and the program portfolio needed clearer pathways and stronger coordination.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The task was not to replace an institution that was already working. It was to strengthen the infrastructure around its work so that growth could be supported by more reliable client-service processes, clearer data and reporting practices, and a portfolio that responded to different stages of business development.
              </Body>
            </ScrollReveal>

            {/* What I did */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 03</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">What I did</Headline>
              
              <div className="flex flex-col gap-6 my-2">
                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm flex flex-col gap-3">
                  <Headline as="h3" size="lg" className="text-plum font-sans text-lg">1. Strengthened portfolio planning</Headline>
                  <Body className="text-base text-ink font-serif leading-relaxed">
                    I led a strategic program-planning process that drew on prior delivery experience, client feedback and input from entrepreneurship-support, nonprofit and public-sector partners. I used that evidence to shape portfolio changes for the next operating period, including more differentiated support for early-stage founders, certification readiness, capital access, mentoring and student entrepreneurship. The emphasis was not simply on adding activity, but on making the portfolio more responsive and coherent.
                  </Body>
                </div>

                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm flex flex-col gap-3">
                  <Headline as="h3" size="lg" className="text-plum font-sans text-lg">2. Improved the client pathway and operating processes</Headline>
                  <Body className="text-base text-ink font-serif leading-relaxed">
                    I led work to strengthen intake, orientation and participant-management practices. Counselors reviewed client intake information, the team completed an intake and training standard operating procedure, a new-client orientation was introduced, and training registration was moved into the client-management system. These changes aimed to create clearer entry points, more consistent records and better continuity between participation, counseling and follow-up.
                  </Body>
                </div>

                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm flex flex-col gap-3">
                  <Headline as="h3" size="lg" className="text-plum font-sans text-lg">3. Strengthened data, reporting and measurement practices</Headline>
                  <Body className="text-base text-ink font-serif leading-relaxed">
                    I led improvements to CRM use, feedback collection and reporting routines. The team standardized post-session surveys, strengthened the capture of basic client and business information, and used regular reminders and review practices to improve reporting discipline. This work supported federal grant reporting while also giving the Center a more useful view of who it was reaching and how clients were engaging across services.
                  </Body>
                </div>

                <div className="bg-soft-stone/40 p-6 border-l-4 border-plum rounded-r-sm flex flex-col gap-3">
                  <Headline as="h3" size="lg" className="text-plum font-sans text-lg">4. Expanded the infrastructure for delivery</Headline>
                  <Body className="text-base text-ink font-serif leading-relaxed">
                    I coordinated staff, counselors, trainers, consultants and partners across the portfolio. The work involved financial institutions, public agencies, universities, community organizations and other entrepreneurship-support organizations. I also oversaw grant-supported delivery and aligned partner contributions with program needs and reporting obligations. The professional challenge was to turn relationships and resources into workable structures for delivery—not simply to accumulate partnerships.
                  </Body>
                </div>
              </div>
            </ScrollReveal>

            {/* Implementation */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 04</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Implementation</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The work progressed in stages. We first used the previous reporting period and stakeholder input to identify process weaknesses and plan changes. We then introduced practical operating improvements across intake, orientation, registration, surveys and CRM use while continuing to deliver programs. Portfolio changes and new partnership-supported pathways were developed alongside those foundational systems.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Implementation also required adaptation. The new orientation process created drop-off for some prospective clients, and the move to CRM-based registration introduced friction that had to be observed and addressed. Those issues were useful evidence: they showed that a process can improve consistency for the institution while still creating burden for the people expected to use it. My role included holding both realities in view and adjusting the operating approach as delivery revealed what the original plan could not.
              </Body>
            </ScrollReveal>

            {/* Evidence of progress */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 05</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">Evidence of progress</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                During the Center’s September 30, 2023–March 31, 2024 reporting period, program reporting documented:
              </Body>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-6 border border-line bg-soft-stone/30 flex flex-col gap-2">
                  <span className="font-sans text-3xl text-ink font-medium">105</span>
                  <span className="font-serif text-slate text-sm">unique clients served</span>
                </div>
                <div className="p-6 border border-line bg-soft-stone/30 flex flex-col gap-2">
                  <span className="font-sans text-3xl text-ink font-medium">33</span>
                  <span className="font-serif text-slate text-sm">training events with 295 attendances</span>
                </div>
                <div className="p-6 border border-line bg-soft-stone/30 flex flex-col gap-2">
                  <span className="font-sans text-3xl text-ink font-medium">47</span>
                  <span className="font-serif text-slate text-sm">capital-infusion transactions totalling approximately $298,000</span>
                </div>
                <div className="p-6 border border-line bg-soft-stone/30 flex flex-col gap-2">
                  <span className="font-sans text-3xl text-ink font-medium">5</span>
                  <span className="font-serif text-slate text-sm">completed Historically Underutilized Business certifications</span>
                </div>
              </div>

              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The same period also documented operating progress: a completed intake and training procedure, standardized feedback practices, new data-capture routines and changes to the program portfolio. These indicators are most useful together. The activity and transaction measures show the scale of the environment, while the process evidence shows the institutional work required to make that activity more manageable and visible.
              </Body>
            </ScrollReveal>

            {/* What the evidence does—and does not—show */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 06</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">What the evidence does—and does not—show</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The evidence supports my leadership contribution to the Center’s program portfolio, operating processes, partnership infrastructure and reporting environment. These results reflect the combined work of the Center’s staff, counselors, partners and participating business owners. My contribution was strengthening the program portfolio, operating processes, partnership infrastructure and reporting environment that supported that work. Improved data capture may also affect what becomes visible in reporting, so increases in recorded activity should not automatically be interpreted as entirely new impact.
              </Body>
            </ScrollReveal>

            {/* What I learned */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Meta className="text-plum uppercase tracking-widest text-xs">Section 07</Meta>
              <Headline as="h2" size="lg" className="text-ink font-sans">What I learned</Headline>
              <div className="flex flex-col gap-6 font-serif text-base md:text-lg text-slate leading-relaxed">
                <p>
                  Institutional growth makes operating infrastructure strategic. As the number of programs, partners and participants increases, intake, data quality, reporting and handoffs become part of program quality—not administrative work around the edges.
                </p>
                <p>
                  Implementation must be observed, not merely launched. Orientation and registration changes created both institutional benefits and user friction. Strong program leadership requires noticing those trade-offs and refining the process without losing the underlying purpose.
                </p>
                <p>
                  Better measurement improves management, but it also requires care in interpretation. Clear definitions, consistent data entry and an understanding of reporting periods matter as much as the number itself. Partnership growth follows the same principle: relationships create value when they are connected to ownership, workflow and delivery.
                </p>
              </div>
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
