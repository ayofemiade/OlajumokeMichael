import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

export default function VRLCasePage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Header (Dossier Title) */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-16 md:pb-24 border-b border-line">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto">
          <Meta className="text-plum mb-4 uppercase tracking-widest">Case Study</Meta>
          <Headline as="h1" size="xl" className="text-ink leading-tight mb-6 max-w-5xl font-sans">
            Designing a Founder Support Pilot and Learning from Its Limits
          </Headline>
          <Body className="text-base md:text-lg text-slate leading-relaxed font-serif max-w-3xl">
            How I translated a venture-readiness proposition into a six-week program, led delivery, built an evidence system and used the pilot’s limits to sharpen the next design.
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
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Project</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Venture Readiness Lab, an Ethnoir founder-facing venture-development pilot.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Role</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Founder, program architect, lead facilitator, primary implementer and lead evidence interpreter.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Format</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Six weekly virtual cohort sessions totaling 9.5 hours, plus two one-hour office-hour sessions, participant resources, between-session support, progress tracking and closing reflection.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Participation</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Six active founders; all six reached the final session; 32 of 36 possible participant-session attendances.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5 border-b border-line/40 pb-4">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Verified Outputs</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    I personally reviewed and confirmed structural business deliverables created by five active participants.
                  </p>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <Meta as="div" className="text-plum text-xs font-semibold uppercase tracking-wider">Context</Meta>
                  <p className="font-sans text-ink text-sm font-medium leading-relaxed">
                    Founder-led Ethnoir pilot supported through an NC IDEA ENGAGE grant.
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-line">
              <Meta as="h3" className="text-plum mb-4 block font-semibold">Capabilities demonstrated</Meta>
              <ul className="flex flex-col gap-3 font-sans text-sm text-ink font-medium list-disc pl-4">
                <li>Program and service architecture</li>
                <li>Implementation leadership</li>
                <li>Operational systems design</li>
                <li>Measurement and evaluative judgment</li>
                <li>Evidence-informed adaptation</li>
              </ul>
            </div>

          </div>

          {/* Core Narrative (Right Column) */}
          <div className="lg:col-span-8 flex flex-col gap-20">
            
            {/* The Challenge */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6">
              <Headline as="h2" size="lg" className="text-ink font-sans">The challenge</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                I designed the Venture Readiness Lab to solve a common problem. Founders often know they are struggling with things like unpredictable revenue, messy processes, limited financial visibility, or doing too much themselves. But they usually don&apos;t know the root cause or how to fix it.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The original proposition was that a structured, diagnostic-led intervention could help early-stage founders strengthen operational, revenue and financial foundations before capital- or growth-oriented support. That proposition contained assumptions to test: that a common readiness sequence could orient participants; that assessment information could help identify a useful focus; that six weeks could support a meaningful structural deliverable; and that the proposed measures could capture change.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                My design question was broader than curriculum: how could I connect assessment, interpretation, group learning and implementation without treating a score as a diagnosis or giving every founder the same answer?
              </Body>
            </ScrollReveal>

            {/* How I designed the intervention */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">How I designed the intervention</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                I designed the Lab’s core program architecture and led its development and operation. The shared six-week arc covered readiness orientation, revenue and customer visibility, operations and founder dependency, financial visibility, business-asset development and closing reflection. It connected intake and assessment inputs with session designs, participant workbooks, a Participant Hub, implementation activities, progress tracking, office hours, between-session communication, a structural-deliverable expectation and post-pilot evidence synthesis.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The common sequence created a coherent learning environment, while the practical response could vary according to the venture issue under examination. Assessment and application information served as inputs, not verdicts. I used them to understand goals, constraints, prior activity and available capacity, then helped participants move from an initial concern toward a plausible structural response.
              </Body>
              <div className="bg-soft-stone p-6 md:p-8 my-4 border-l-4 border-plum rounded-r-sm">
                <Meta className="text-plum mb-3">The working sequence that emerged was:</Meta>
                <span className="font-sans text-ink font-medium leading-relaxed block text-sm md:text-base">
                  Visible concern → contextual interpretation → plausible structural constraint → practical response → use or testing → follow-up
                </span>
              </div>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                This is pilot learning, not a validated diagnostic or universal model. It captures how I worked with ambiguity: I did not assume the first symptom named was the root cause, and I did not wait for perfect certainty before helping someone frame a practical next step.
              </Body>
            </ScrollReveal>

            {/* From design to implementation */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">From design to implementation</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                I served as lead facilitator and primary implementer across the virtual cohort. I led the sessions, managed the shared learning sequence, supported participants as they translated broad concerns into specific work, maintained between-session communication and personally reviewed and confirmed all five verified participant-created deliverables. A guest practitioner contributed a limited financial-institution perspective during one session; the core instructional content, workbook activities and implementation discussion remained within Ethnoir’s facilitation. I also facilitated two one-hour office-hour sessions for individualized support. Uptake was limited, with one founder attending each session.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The deliverables reflected different responses within the common structure: a client intake and routing process; a standard operating procedure or other documented process; an inventory sourcing and order-decision process; a client pipeline tracker; and a customer-acquisition strategy. Participants created these assets. My contribution was to design and facilitate the process through which the relevant issue was interpreted, a focus was framed, and a practical response was developed and reviewed.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                I designed and owned the participant workflow and operating requirements for recruitment, intake, communication, resource access, progress documentation and grant reporting, using freelance technical support to implement the landing page and selected integrations among the application and diagnostic workflow, Airtable CRM and MailerLite.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Delivery required balancing structure with responsiveness. The Lab moved away from expecting identical weekly outputs and toward participant-specific assets within a common architecture. I reduced some administrative burden, used one implementation-focused progress check rather than weekly surveys and added a 90-Day Action Plan as a continuation bridge.
              </Body>
            </ScrollReveal>

            {/* What the evidence showed */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">What the evidence showed</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The pilot ran for six weeks. Six founders formed the active cohort, all six reached the final session, and the attendance record documents 32 of 36 possible participant-session attendances (88.9 percent). Five active participants had structural business deliverables that I personally reviewed and confirmed. A sixth participant reported completing a contractor-selection process, but the artifact was not received for review at the time of reporting.
              </Body>
              
              <Meta className="text-plum mt-6 mb-2">Closing Ratings (5-point scale, self-reported)</Meta>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-line p-6 flex justify-between items-center bg-paper rounded-sm">
                  <span className="font-sans text-sm text-slate">Overall value</span>
                  <span className="font-sans text-2xl text-ink font-semibold">4.2</span>
                </div>
                <div className="border border-line p-6 flex justify-between items-center bg-paper rounded-sm">
                  <span className="font-sans text-sm text-slate">Clearer priorities</span>
                  <span className="font-sans text-2xl text-ink font-semibold">4.0</span>
                </div>
                <div className="border border-line p-6 flex justify-between items-center bg-paper rounded-sm">
                  <span className="font-sans text-sm text-slate">Stronger operational systems</span>
                  <span className="font-sans text-2xl text-ink font-semibold">4.0</span>
                </div>
                <div className="border border-line p-6 flex justify-between items-center bg-paper rounded-sm">
                  <span className="font-sans text-sm text-slate">Confidence in business decisions</span>
                  <span className="font-sans text-2xl text-ink font-semibold">3.8</span>
                </div>
                <div className="border border-line p-6 flex justify-between items-center bg-paper rounded-sm">
                  <span className="font-sans text-sm text-slate">Confidence continuing to build</span>
                  <span className="font-sans text-2xl text-ink font-semibold">4.2</span>
                </div>
                <div className="border border-line p-6 flex justify-between items-center bg-soft-stone rounded-sm">
                  <span className="font-sans text-sm text-slate">Financial visibility</span>
                  <span className="font-sans text-2xl text-ink font-semibold">2.7</span>
                </div>
              </div>

              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Those ratings and closing reflections describe participant experience. They do not establish objective capability change, sustained asset use, improved decisions, business performance or impact. The strongest reviewable evidence concerned implementation and output production: the program operated, participants engaged, and five participant-created structural deliverables existed and were reviewed and confirmed.
              </Body>
            </ScrollReveal>

            {/* What didn't work—and what I learned */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">What didn’t work and what I learned</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The proposal targeted 10–12 participants. The reconciled funnel showed 13 diagnostic completions, eight application submissions from seven unique applicants, seven founders entering participant tracking and six becoming active participants. The target was not achieved. The effective recruitment runway was compressed while the program infrastructure was still being developed, but the record does not establish comparative channel performance or prove that limited demand caused the shortfall.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                A proposed target of three meaningful warm introductions with documented follow-up was also not achieved during the grant period. That failure clarified that identifying a support need is different from operating a reliable referral pathway with ownership, timing and follow-up.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The largest evidence weakness concerned change measurement. A proposed immediate repeat of the full readiness diagnostic was not administered. Equivalent baseline and closing readiness-zone scores therefore do not exist, and the proposed readiness-improvement measure cannot be calculated. Closing ratings were endpoint self-report, not matched pre/post measures. I concluded that several maturity conditions would not reasonably change within six weeks and that an immediate repeat could misrepresent what the program had influenced. That was a defensible judgment, but it did not repair the evaluation gap. A reporting process cannot compensate for a measure that was not appropriately designed or collected.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Financial visibility received the lowest closing rating. This did not support a claim of improved financial capability. It raised a design question about whether the topic required different sequencing, greater depth, a longer implementation period or specialist involvement.
              </Body>
            </ScrollReveal>

            {/* How my thinking changed */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">How my thinking changed</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The Lab strengthened a more disciplined distinction between assessment and interpretation. Assessment information can organize inquiry, but movement from a visible concern to a plausible structural constraint requires context. Even then, the result is just a working theory, not a definitive diagnosis or root-cause identification.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                It also separated identifying a focus from creating and using a response. A founder may understand an issue and create a useful asset yet still need time, information, practice, specialist input or support to implement it.
              </Body>
              <div className="bg-soft-stone p-6 md:p-8 my-4 border-l-4 border-plum rounded-r-sm">
                <Meta className="text-plum mb-3">The evidence sequence became:</Meta>
                <span className="font-sans text-ink font-medium leading-relaxed block text-sm md:text-base">
                  Asset creation → usability → testing → regular use → downstream effect
                </span>
              </div>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                The Lab had its strongest evidence near the beginning of this sequence. It confirmed that assets existed; it had limited evidence of initial use or testing and did not establish regular use or downstream effects. This changed how I interpret program outputs and how I would design follow-up measurement.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                Limited office-hour use similarly challenged the assumption that making support available makes it usable. Future design needs to test how support is timed, integrated and accessed. More broadly, I learned to treat implementation friction and missed targets as information for redesign rather than compressing attendance, positive feedback and deliverable production into an effectiveness story.
              </Body>
            </ScrollReveal>

            {/* What I would do differently */}
            <ScrollReveal personality="standard" className="flex flex-col gap-6 border-t border-line pt-12">
              <Headline as="h2" size="lg" className="text-ink font-sans">What I would do differently</Headline>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                In another iteration, I would frame the work as a bounded founder-facing venture-development pilot rather than a test of a broad readiness model. I would define one implementation focus and its evidence basis more explicitly, preserve variation in the practical response, and align presentation, workbook and Participant Hub language more tightly.
              </Body>
              <Body className="text-base md:text-lg text-slate font-serif leading-relaxed">
                I would simplify navigation and technology where possible, protect more session time for application, and specify how implementation support is accessed rather than assume optional office hours will be used. I would treat financial visibility as a distinct design and specialist-support question. I would also begin with clearer evaluative questions, select measures matched to the implementation horizon, and establish a defined follow-up window before promising evidence of change.
              </Body>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. Synthesis & Next Steps */}
      <section className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <ScrollReveal personality="strong" className="max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-16">
          
          <div className="flex flex-col items-start border-b border-slate/30 pb-10">
            <Meta className="text-soft-stone/70 mb-4">Synthesis</Meta>
            <Headline as="h2" size="xl" className="text-paper leading-tight font-sans max-w-4xl">
              What this case does and doesn&apos;t show
            </Headline>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Column 1: What it shows */}
            <div className="flex flex-col gap-4">
              <Meta className="text-soft-stone/70 text-xs uppercase tracking-wider font-semibold">What it shows</Meta>
              <Body className="text-base md:text-lg text-soft-stone/90 font-serif leading-relaxed">
                This case demonstrates how I approached the design, delivery and evaluation of a founder-support pilot: translating an initial proposition into a working program, adapting it through implementation, examining the evidence it produced and using its limitations to inform the next design.
              </Body>
            </div>

            {/* Column 2: What it doesn't show */}
            <div className="flex flex-col gap-4">
              <Meta className="text-soft-stone/70 text-xs uppercase tracking-wider font-semibold">What it doesn&apos;t show</Meta>
              <Body className="text-base md:text-lg text-soft-stone/90 font-serif leading-relaxed">
                The evidence is strongest on implementation, participation, reviewed outputs and participant-reported experience. It does not establish program effectiveness, diagnostic validity, sustained capability change or downstream business outcomes. The Lab was a single founder-facing pilot, so questions about scalability and institutional applications require further testing.
              </Body>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center pt-8 border-t border-slate/30 w-full">
            <Link
              href="/experience"
              className="inline-flex items-center justify-center bg-plum text-white px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              View my experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border border-paper text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              Contact me
            </Link>
          </div>

        </ScrollReveal>
      </section>

    </div>
  );
}
