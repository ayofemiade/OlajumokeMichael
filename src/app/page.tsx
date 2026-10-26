import { Headline } from "@/components/typography/Headline";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { HeroSection } from "@/components/sections/HeroSection";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Olajumoke Michael | Program Design, Delivery and Evaluation",
  },
  description:
    "Olajumoke Michael designs programs, builds the operating systems behind them, leads delivery and evaluates what the evidence supports. Discuss a role or project.",
  openGraph: {
    title: "Olajumoke Michael | Program Design, Delivery and Evaluation",
    description:
      "Olajumoke Michael designs programs, builds the operating systems behind them, leads delivery and evaluates what the evidence supports. Discuss a role or project.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* =========================================
          STATE 1: HERO
          Sequenced entrance via HeroSection client component
      ========================================= */}
      <HeroSection />

      {/* =========================================
          SECTION: HOW I CONTRIBUTE
          (Where strategy becomes practice)
          Four-column architectural ledger.
      ========================================= */}
      <section className="relative border-t border-line bg-soft-stone">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Structural Header */}
          <ScrollReveal
            personality="structural"
            className="col-span-1 md:col-span-12 border-b border-line flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-line flex items-center">
              <Meta className="text-plum tracking-[0.06em]">WHERE STRATEGY BECOMES PRACTICE</Meta>
            </div>
            <div className="w-full md:w-3/4 p-6 md:p-12">
              <Headline size="xl" className="max-w-4xl leading-[1.08]">
                A strong idea still needs a coherent design, a workable operating approach and a way to learn from implementation.
              </Headline>
            </div>
          </ScrollReveal>

          {/* Four Capability Columns */}
          <ScrollReveal
            personality="structural"
            stagger
            staggerDelay={0.12}
            className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Column 01 — Architecture */}
            <div className="col-span-1 border-b lg:border-b-0 border-r-0 md:border-r border-line p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-5">
                  <Meta className="text-plum">Architecture</Meta>
                  <span
                    className="font-serif font-light text-ink select-none"
                    style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                    aria-hidden="true"
                  >01</span>
                </div>
                <div className="border-t border-line/60 mb-6" aria-hidden="true" />
                <h3
                  className="font-serif font-normal text-ink leading-[1.2] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.35rem, 1.5vw, 1.75rem)" }}
                >
                  Design the program.
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-sm md:text-base">
                  I turn a goal into a participant journey, activities, roles and an evidence plan, such as a six-week pilot for early-stage founders.
                </p>
              </div>
            </div>

            {/* Column 02 — Operations */}
            <div className="col-span-1 border-b lg:border-b-0 border-r-0 lg:border-r border-line p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-5">
                  <Meta className="text-plum">Operations</Meta>
                  <span
                    className="font-serif font-light text-ink select-none"
                    style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                    aria-hidden="true"
                  >02</span>
                </div>
                <div className="border-t border-line/60 mb-6" aria-hidden="true" />
                <h3
                  className="font-serif font-normal text-ink leading-[1.2] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.35rem, 1.5vw, 1.75rem)" }}
                >
                  Build the systems behind it.
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-sm md:text-base">
                  I build and improve the intake, CRM, communication, tracking and reporting systems that programs run on, so staff can deliver and funders and partners can see what happened.
                </p>
              </div>
            </div>

            {/* Column 03 — Execution */}
            <div className="col-span-1 border-b md:border-b-0 border-r-0 md:border-r border-line p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-5">
                  <Meta className="text-plum">Execution</Meta>
                  <span
                    className="font-serif font-light text-ink select-none"
                    style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                    aria-hidden="true"
                  >03</span>
                </div>
                <div className="border-t border-line/60 mb-6" aria-hidden="true" />
                <h3
                  className="font-serif font-normal text-ink leading-[1.2] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.35rem, 1.5vw, 1.75rem)" }}
                >
                  Lead delivery.
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-sm md:text-base">
                  I lead staff, facilitators, volunteer experts and partners, prepare contributors, and keep sessions, support and events running.
                </p>
              </div>
            </div>

            {/* Column 04 — Evaluation */}
            <div className="col-span-1 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-5">
                  <Meta className="text-plum">Evaluation</Meta>
                  <span
                    className="font-serif font-light text-ink select-none"
                    style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                    aria-hidden="true"
                  >04</span>
                </div>
                <div className="border-t border-line/60 mb-6" aria-hidden="true" />
                <h3
                  className="font-serif font-normal text-ink leading-[1.2] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.35rem, 1.5vw, 1.75rem)" }}
                >
                  Judge what the work shows.
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-sm md:text-base">
                  I decide what to measure, gather feedback and program data, review what participants produce, and state what the evidence does and does not support, so teams know what to keep, change or test next.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Full-width line & Pathway */}
          <ScrollReveal
            personality="standard"
            delay={0.1}
            className="col-span-1 md:col-span-12 border-t border-line p-6 md:p-12"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-20">
              <p className="font-serif italic text-ink leading-relaxed lg:max-w-[70%]" style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.35rem)" }}>
                In each role the pattern is the same: turn a goal into a program people can deliver, build the systems that keep it running, and use what the work shows to decide what comes next.
              </p>
              <Link
                href="/experience"
                className="group shrink-0 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-plum transition-colors duration-300"
              >
                <span
                  className="w-8 h-[1px] bg-ink group-hover:bg-plum group-hover:w-12 transition-all duration-300 inline-block"
                  aria-hidden="true"
                />
                <span>Learn more about my experience</span>
                <span
                  className="inline-block transform group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                >→</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================
          SECTION: WHO THIS WORK IS FOR
          Two-pillar architectural layout detailing
          organizational fit and collaboration models.
      ========================================= */}
      <section className="relative border-t border-line bg-paper py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <ScrollReveal
            personality="structural"
            className="flex justify-between items-center border-b border-line pb-6 mb-12 md:mb-16"
          >
            <Meta className="text-plum">Who this work is for</Meta>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Where this contribution fits */}
            <ScrollReveal
              personality="standard"
              className="lg:col-span-7 flex flex-col"
            >
              <h2
                className="font-serif italic text-clay leading-[1.15] tracking-tight mb-6"
                style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)" }}
              >
                Where this contribution fits
              </h2>
              
              <p className="font-serif text-base md:text-lg leading-relaxed text-ink mb-8">
                My experience is most relevant to organizations that run programs and services and need them to work in practice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Entrepreneurship-support and economic-development organizations",
                  "Nonprofits and community organizations",
                  "Colleges and universities",
                  "Government and international-development programs",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 md:p-6 border border-line bg-soft-stone/40 flex items-start gap-4 rounded-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-plum mt-2 shrink-0" aria-hidden="true" />
                    <span className="font-serif text-base text-ink leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Column: How we could work together */}
            <ScrollReveal
              personality="standard"
              delay={0.15}
              className="lg:col-span-5 flex flex-col justify-between h-full lg:border-l lg:border-line lg:pl-12 pt-8 lg:pt-0 border-t lg:border-t-0"
            >
              <div>
                <h3
                  className="font-serif font-normal text-ink leading-tight mb-6"
                  style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
                >
                  How we could work together
                </h3>
                <p className="font-serif font-light text-slate leading-[1.75] text-base md:text-lg mb-8">
                  I welcome conversations about program leadership, strategy and operations roles; scoped projects in program design, implementation, measurement, evaluation and learning; and selective contract, part-time or advisory work where the fit is right.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-plum text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-ink transition-colors duration-300 shadow-sm"
                >
                  Discuss a role or project
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* =========================================
          SECTION: SELECTED WORK
          Strict two-column ledger.
          What I built · What I contributed · What I learned.
      ========================================= */}
      <section className="relative border-t border-line bg-paper">
        <div className="max-w-[1400px] mx-auto">

          {/* Architectural header */}
          <ScrollReveal
            personality="structural"
            className="flex justify-between items-center border-b border-line px-6 md:px-12 lg:px-24 py-5 md:py-6"
          >
            <Meta className="text-plum">Selected Work</Meta>
            <Meta>Evidence &amp; Analysis</Meta>
          </ScrollReveal>

          <div className="px-6 md:px-12 lg:px-24 pt-14 md:pt-20 pb-20 md:pb-28">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* The Narrative — left column */}
              <ScrollReveal
                personality="standard"
                className="lg:col-span-7 flex flex-col"
              >
                {/* Case study title */}
                <h2
                  className="font-serif italic text-clay leading-[1.1] tracking-tight mb-8"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 3.2rem)" }}
                >
                  Designing a Founder Support Pilot—and Learning from Its Limits
                </h2>

                {/* Structured 3-part evidence prose */}
                <div className="space-y-6 mb-10 font-serif">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                      What I built
                    </span>
                    <p className="text-base md:text-lg leading-relaxed text-ink">
                      A six-week pilot for early-stage founders, including the program design and the intake, communication, resource and tracking workflow behind it.
                    </p>
                  </div>

                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                      What I contributed
                    </span>
                    <p className="text-base md:text-lg leading-relaxed text-ink">
                      I designed the program, led the six weekly sessions, supported participants between sessions and reviewed what they created.
                    </p>
                  </div>

                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider font-semibold text-plum block mb-1.5">
                      What I learned
                    </span>
                    <p className="text-base md:text-lg leading-relaxed text-ink">
                      Offering support is not the same as getting it used, and a meaningful assessment of change needs comparable measures planned and collected across the program. The case sets out what the evidence does and does not show.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-2">
                  <Link
                    href="/selected-work/venture-readiness-lab"
                    className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-plum transition-colors duration-300"
                  >
                    <span
                      className="w-8 h-[1px] bg-ink group-hover:bg-plum group-hover:w-12 transition-all duration-300 inline-block"
                      aria-hidden="true"
                    />
                    <span>Read the case study</span>
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                  </Link>

                  <Link
                    href="/selected-work"
                    className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] font-medium text-slate hover:text-ink transition-colors duration-300"
                  >
                    <span
                      className="w-8 h-[1px] bg-slate group-hover:bg-ink group-hover:w-12 transition-all duration-300 inline-block"
                      aria-hidden="true"
                    />
                    <span>See all selected work</span>
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* The Evidence Ledger — right column */}
              <ScrollReveal
                personality="standard"
                delay={0.15}
                className="lg:col-span-5"
              >
                <div className="border border-line p-8 md:p-10 flex flex-col gap-8 bg-soft-stone">
                  <Meta className="border-b border-line pb-4 w-full tracking-[0.1em]">PILOT AT A GLANCE</Meta>

                  <ScrollReveal personality="structural" stagger staggerDelay={0.1}>
                    <div className="flex justify-between items-baseline border-b border-line/50 pb-4 gap-8">
                      <span className="font-serif font-light text-slate text-base">Active founders</span>
                      <span className="font-serif font-light text-ink shrink-0" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)" }}>6</span>
                    </div>

                    <div className="flex justify-between items-baseline border-b border-line/50 pb-4 gap-8">
                      <span className="font-serif font-light text-slate text-base">Reached the final session</span>
                      <span className="font-serif font-light text-ink shrink-0" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)" }}>6</span>
                    </div>

                    <div className="flex justify-between items-baseline pb-4 gap-8">
                      <span className="font-serif font-light text-slate text-base">Participants with structural business deliverables personally reviewed and confirmed</span>
                      <span className="font-serif font-light text-ink shrink-0" style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)" }}>5</span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Grant Recognition with Official NC IDEA Logo */}
                <div className="border border-line p-5 md:p-6 bg-soft-stone/60 rounded-sm flex items-center gap-5 mt-4">
                  <div className="w-24 shrink-0 bg-paper p-1.5 rounded-sm border border-line/40">
                    <Image
                      src="/images/nc-idea-logo.svg"
                      alt="NC IDEA Logo"
                      width={96}
                      height={41}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <p className="font-serif text-xs text-slate leading-relaxed">
                    Venture Readiness Lab was designed and delivered through Ethnoir. This activity received support from NC IDEA through NC IDEA ENGAGE.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION: EXPERIENCE
          Sticky image with subtle counter-parallax.
          Where I have done this work.
      ========================================= */}
      <section className="relative border-t border-line bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          <ScrollReveal
            personality="structural"
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-line pb-8 gap-8"
          >
            <Headline as="h2" size="xl" className="max-w-3xl leading-tight">
              Where I have done this work
            </Headline>
            <Meta className="shrink-0 text-plum">Professional Arc</Meta>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Sticky image */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 w-full aspect-[4/5]">
                <ParallaxImage
                  speed={0.08}
                  containerClassName="w-full h-full bg-soft-stone"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/olajumoke-facilitation-experience.webp"
                      alt="Olajumoke Michael facilitating a session"
                      fill
                      loading="lazy"
                      decoding="async"
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </ParallaxImage>
              </div>
            </div>

            {/* The Ledger — right column */}
            <div className="lg:col-span-7 flex flex-col">

              <ScrollReveal personality="standard" className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink mb-12">
                <p>
                  My experience spans entrepreneurship support, higher education, and government and international-development programs in Nigeria.
                </p>
              </ScrollReveal>

              {/* Role rows */}
              <ScrollReveal
                personality="structural"
                stagger
                staggerDelay={0.12}
                className="flex flex-col border-t border-line"
              >
                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">Program Director</Meta>
                    <div className="font-serif font-normal text-ink mt-1">Winston-Salem Women&apos;s Business Center</div>
                  </div>
                  <p className="font-serif font-light text-slate leading-relaxed text-base">
                    I led regional entrepreneurship programs and strengthened the intake, CRM and reporting systems behind them.
                  </p>
                </div>

                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">U.S. Program Manager (Contract)</Meta>
                    <div className="font-serif font-normal text-ink mt-1">Bpeace</div>
                  </div>
                  <p className="font-serif font-light text-slate leading-relaxed text-base">
                    Within the Bpeace team, I helped coordinate delivery of a founder-support program in North Carolina and Georgia, created guidance for coaches and facilitators, and designed and facilitated peer-learning sessions.
                  </p>
                </div>

                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">Grants &amp; Program Manager</Meta>
                    <div className="font-serif font-normal text-ink mt-1">British High Commission, Abuja</div>
                  </div>
                  <p className="font-serif font-light text-slate leading-relaxed text-base">
                    I managed grants and programs in justice, economic development and security, working with government, civil-society and international partners in Nigeria.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal personality="standard" delay={0.2} className="mt-12">
                <Link
                  href="/experience"
                  className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
                >
                  View my experience
                </Link>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION: CURRENT WORK THROUGH ETHNOIR
      ========================================= */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          <ScrollReveal
            personality="structural"
            className="mb-16 md:mb-20 flex flex-col md:flex-row md:justify-between md:items-end border-b border-line pb-8 gap-8"
          >
            <Headline as="h2" size="xl">Current work through Ethnoir</Headline>
            <Meta className="shrink-0 text-plum">Organizational Context</Meta>
          </ScrollReveal>

          <ScrollReveal personality="standard" className="max-w-4xl flex flex-col">
            <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink mb-10 space-y-6">
              <p>
                I founded Ethnoir, a separate organization, to build practical support for founders and for the organizations that serve them. Through it I designed and ran the Venture Readiness Lab, a six-week pilot for early-stage founders.
              </p>
              <p>
                My work through Ethnoir includes founder-facing tools and pilots, learning from the evidence they produce, and questions about how entrepreneurship support is designed and delivered.
              </p>
            </div>
            <div>
              <a
                href="https://ethnoirconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
              >
                Visit Ethnoir
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================
          SECTION: THE FULLER PERSON BEHIND THE WORK
      ========================================= */}
      <section className="relative bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-line">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Portrait */}
          <ScrollReveal
            personality="quiet"
            className="lg:col-span-5 relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden"
          >
            <Image
              src="/images/olajumoke-portrait-quiet-fire.webp"
              alt="Olajumoke Michael portrait"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal
            personality="quiet"
            delay={0.3}
            className="lg:col-span-7 flex flex-col items-start lg:pl-8"
          >
            <p className="font-serif italic text-plum mb-5" style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)", letterSpacing: "0.01em" }}>
              The fuller person behind the work
            </p>
            <Headline size="xl" className="font-serif font-light text-ink mb-10 max-w-2xl leading-tight">
              Professional work is the front door here, but it is not the whole person.
            </Headline>
            <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-slate italic max-w-2xl mb-14 space-y-4">
              <p>
                Faith, culture, motherhood, creativity and reflection shape how I think about work, responsibility and becoming.
              </p>
              <p>
                <span className="font-semibold not-italic">The Quiet Fire</span> is a distinct reflective publication within that wider personal landscape.
              </p>
            </div>

            <a
              href="https://thequietfire.olajumokemichael.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
            >
              Visit The Quiet Fire
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================
          SECTION: CLOSING
          Have a role or program in mind?
      ========================================= */}
      <section className="relative bg-ink text-paper py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-line">
        {/* Ghost letterform */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-serif font-normal text-paper leading-none tracking-tight uppercase whitespace-nowrap"
            style={{ fontSize: "clamp(5rem, 18vw, 18rem)", opacity: 0.04 }}
          >
            CONNECT
          </span>
        </div>
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">

          <ScrollReveal
            personality="strong"
            className="flex flex-col items-center gap-8"
          >
            <Meta className="text-soft-stone/70 tracking-[0.2em]">CONNECT</Meta>

            <Headline
              as="h2"
              size="xl"
              className="mb-0 text-paper font-serif font-light text-center leading-[1.15] max-w-2xl"
              style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
            >
              Have a role or program in mind?
            </Headline>

            <p className="text-lg md:text-xl font-serif italic leading-relaxed text-soft-stone max-w-3xl">
              If you are considering me for a role, planning a program or service, or interested in collaborating, I would be glad to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-paper text-ink px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300 shadow-sm"
              >
                Discuss a role or project
              </Link>
              <Link
                href="/selected-work"
                className="inline-flex items-center justify-center bg-transparent border border-paper/70 text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:border-paper hover:bg-paper/10 transition-colors duration-300"
              >
                View selected work
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
