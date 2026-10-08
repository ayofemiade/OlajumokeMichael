import { Headline } from "@/components/typography/Headline";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { HeroSection } from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* =========================================
          STATE 1: IDEA
          Hero — sequenced entrance via HeroSection client component
      ========================================= */}
      <HeroSection />

      {/* =========================================
          STATE 2: STRUCTURE (Where strategy becomes practice)
          Grid becomes visible. Structural stagger entrance.
      ========================================= */}
      <section className="relative border-t border-line bg-soft-stone">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Structural Header — fades in as one unit */}
          <ScrollReveal
            personality="structural"
            className="col-span-1 md:col-span-12 border-b border-line flex flex-col md:flex-row"
          >
            {/* Left: section label — centered vertically against the tall right headline */}
            <div className="w-full md:w-1/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-line flex items-center">
              <Meta className="text-plum tracking-[0.06em]">Where strategy becomes practice</Meta>
            </div>
            <div className="w-full md:w-3/4 p-6 md:p-12">
              <Headline size="xl" className="max-w-4xl leading-[1.08]">
                A strong idea still needs a coherent design, a workable operating approach and a way to learn from implementation.
              </Headline>
            </div>
          </ScrollReveal>

          {/* Capability columns — stagger in */}
          <ScrollReveal
            personality="structural"
            stagger
            staggerDelay={0.13}
            className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3"
          >
            {/* Column 01 — Architecture */}
            <div className="col-span-1 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="flex items-baseline justify-between mb-5">
                <Meta className="text-plum">Architecture</Meta>
                <span
                  className="font-serif font-light text-ink select-none"
                  style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                  aria-hidden="true"
                >01</span>
              </div>
              <div className="border-t border-line/60 mb-8 md:mb-10" aria-hidden="true" />
              <div>
                <h3
                  className="font-serif font-normal text-ink leading-[1.15] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.45rem, 1.8vw, 2rem)" }}
                >
                  Program &amp; Service Architecture
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-base">I connect purpose, participants, activities, support and evidence to shape coherent programs and services.</p>
              </div>
            </div>

            {/* Column 02 — Execution */}
            <div className="col-span-1 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="flex items-baseline justify-between mb-5">
                <Meta className="text-plum">Execution</Meta>
                <span
                  className="font-serif font-light text-ink select-none"
                  style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                  aria-hidden="true"
                >02</span>
              </div>
              <div className="border-t border-line/60 mb-8 md:mb-10" aria-hidden="true" />
              <div>
                <h3
                  className="font-serif font-normal text-ink leading-[1.15] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.45rem, 1.8vw, 2rem)" }}
                >
                  Implementation Leadership
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-base">I move designs into practice by establishing operating structures, coordinating delivery and responding to what implementation reveals.</p>
              </div>
            </div>

            {/* Column 03 — Evaluation */}
            <div className="col-span-1 border-b border-line md:border-b-0 p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="flex items-baseline justify-between mb-5">
                <Meta className="text-plum">Evaluation</Meta>
                <span
                  className="font-serif font-light text-ink select-none"
                  style={{ fontSize: "0.65rem", opacity: 0.25, letterSpacing: "0.06em" }}
                  aria-hidden="true"
                >03</span>
              </div>
              <div className="border-t border-line/60 mb-8 md:mb-10" aria-hidden="true" />
              <div>
                <h3
                  className="font-serif font-normal text-ink leading-[1.15] tracking-tight mb-4"
                  style={{ fontSize: "clamp(1.45rem, 1.8vw, 2rem)" }}
                >
                  Measurement &amp; Learning
                </h3>
                <p className="font-serif font-light text-slate leading-relaxed text-base">I build practical ways to gather and interpret evidence, distinguish what it supports from what remains uncertain and use the findings to guide the next decision.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Closing thought */}
          <ScrollReveal
            personality="standard"
            delay={0.1}
            className="col-span-1 md:col-span-12 border-t border-line p-6 md:p-12"
          >
            {/*
              Closing: quote left, arrow CTA right on desktop.
              Quote is the editorial punchline; CTA uses the hero's arrow-link pattern.
            */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-20">
              <p className="font-serif italic text-ink leading-relaxed lg:max-w-[68%]" style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.35rem)" }}>
                Across this work, I move between strategy and execution: from proposition to program architecture, from architecture to delivery, and from implementation evidence to the next design decision.
              </p>
              <a
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
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================
          STATE 3: EVIDENCE (Case Study — VRL)
          Strict two-column ledger. Deliberate, unhurried entrance.
      ========================================= */}
      <section className="relative border-t border-line bg-paper">
        <div className="max-w-[1400px] mx-auto">

          {/* Architectural header — matches capabilities section rhythm */}
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
                className="lg:col-span-6 flex flex-col"
              >
                {/* Case study title — the dominant visual of this section */}
                <h2
                  className="font-serif italic text-clay leading-[1.1] tracking-tight mb-8"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 3.2rem)" }}
                >
                  Designing a Founder Support Pilot - and Learning from Its Limits
                </h2>

                {/* Body prose — clean serif, no Tailwind prose plugin */}
                <p className="font-serif text-base leading-[1.8] text-ink mb-10">
                  I translated a venture-readiness proposition into a six-week founder-support pilot, designed its program and operating structure, led delivery, and examined what the evidence could - and could not - show. All six active founders reached the final session. Five participants created structural business deliverables that I personally reviewed and confirmed. The case shows how implementation, missed targets and measurement gaps shaped the next design questions.
                </p>

                {/* CTAs — both use the hero's arrow-link pattern */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <a
                    href="/selected-work/venture-readiness-lab"
                    className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-plum transition-colors duration-300"
                  >
                    <span
                      className="w-8 h-[1px] bg-ink group-hover:bg-plum group-hover:w-12 transition-all duration-300 inline-block"
                      aria-hidden="true"
                    />
                    <span>Read the case study</span>
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                  </a>
                  <a
                    href="/selected-work"
                    className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] font-medium text-slate hover:text-ink transition-colors duration-300"
                  >
                    <span
                      className="w-8 h-[1px] bg-slate group-hover:bg-ink group-hover:w-12 transition-all duration-300 inline-block"
                      aria-hidden="true"
                    />
                    <span>View all selected work</span>
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* The Evidence Ledger — right column, staggered rows */}
              <ScrollReveal
                personality="standard"
                delay={0.15}
                className="lg:col-span-5 lg:col-start-8"
              >
                <div className="border border-line p-8 md:p-10 flex flex-col gap-8 bg-soft-stone">
                  <Meta className="border-b border-line pb-4 w-full">Pilot at a Glance</Meta>

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
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          STATE 4: EXPERIENCE PREVIEW
          Sticky image with subtle counter-parallax.
          Role rows with hover bookmark accent.
      ========================================= */}
      <section className="relative border-t border-line bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          <ScrollReveal
            personality="structural"
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-line pb-8 gap-8"
          >
            <Headline as="h2" size="xl" className="max-w-3xl leading-tight">Experience across sectors and across the work itself</Headline>
            <Meta className="shrink-0 text-plum">Professional Arc</Meta>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Sticky image — with subtle counter-parallax */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 w-full aspect-[4/5]">
                <ParallaxImage
                  speed={0.08}
                  containerClassName="w-full h-full bg-soft-stone"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/FAO_Wedding_2024_WomensConference-3.jpg"
                      alt="Olajumoke Michael speaking at podium"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </ParallaxImage>
              </div>
            </div>

            {/* The Ledger — right column */}
            <div className="lg:col-span-7 flex flex-col">

              <ScrollReveal personality="standard" className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink mb-16">
                <p>
                  My experience spans entrepreneurship support, economic and community development, higher education, and UK-government and international-development contexts.
                </p>
              </ScrollReveal>

              {/* Role rows with stagger + hover bookmark */}
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
                  <p className="font-serif font-light text-slate leading-relaxed text-base">I led entrepreneurship-support programming and its implementation.</p>
                </div>

                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">U.S. Program Manager (Contract)</Meta>
                    <div className="font-serif font-normal text-ink mt-1">Bpeace</div>
                  </div>
                  <p className="font-serif font-light text-slate leading-relaxed text-base">I managed implementation and coordinated delivery for a multi-state program supporting growth-stage founders.</p>
                </div>

                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">Grants &amp; Program Manager</Meta>
                    <div className="font-serif font-normal text-ink mt-1">British High Commission</div>
                  </div>
                  <p className="font-serif font-light text-slate leading-relaxed text-base">I managed an international program portfolio spanning justice, economic development and security, working across government, civil-society and international partners.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal
                personality="standard"
                delay={0.2}
                className="mt-16 prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink"
              >
                <p>
                  Across these settings, the consistent thread has been turning direction into structure, coordinating the people and processes needed for delivery, and learning from what happens in practice.
                </p>
              </ScrollReveal>

              <ScrollReveal personality="standard" delay={0.3} className="mt-12">
                <a
                  href="/experience"
                  className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
                >
                  View my experience
                </a>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          STATE 5: CURRENT WORK & ETHNOIR CONTEXT
      ========================================= */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          <ScrollReveal
            personality="structural"
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-line pb-8 gap-8"
          >
            <Headline as="h2" size="xl">Current work through Ethnoir</Headline>
            <Meta className="shrink-0 text-plum">Organizational Context</Meta>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

            <ScrollReveal personality="standard" className="lg:col-span-7 flex flex-col">
              <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink mb-12">
                <p>
                  I founded Ethnoir to contribute to venture development by helping people navigating ventures and relevant institutions understand current conditions and make informed decisions about direction and support.
                </p>
                <p>
                  My work through Ethnoir currently includes founder-facing tools and interventions, evidence-informed program learning, and exploration of questions about how entrepreneurship support is designed, delivered and improved.
                </p>
              </div>
              <div className="mt-auto">
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

            <ScrollReveal
              personality="standard"
              delay={0.2}
              className="lg:col-span-5 flex flex-col border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-12"
            >
              <Meta className="mb-6 text-clay">Ethnoir Resource</Meta>
              <Headline size="lg" className="mb-4 font-serif">Venture Readiness Check-In</Headline>
              <p className="font-serif font-light text-slate leading-relaxed mb-8 lg:mb-12">
                The Venture Readiness Check-In is an Ethnoir resource that gives founders a structured way to reflect on current venture conditions and consider what may deserve attention next. It is designed as a starting point for reflection, not a definitive assessment of a venture or its potential.
              </p>
              <div className="mt-auto">
                <a
                  href="https://ethnoirconsulting.com/venture-readiness-check-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
                >
                  Explore the Check-In
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* =========================================
          STATE 6: THE QUIET FIRE
          Deliberately the quietest section.
          Motion slows. No y-translation. Just weight arriving.
      ========================================= */}
      <section className="relative bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Portrait — emerges, no y shift, just opacity */}
          <ScrollReveal
            personality="quiet"
            className="lg:col-span-5 relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden"
          >
            <Image
              src="/images/IMG_1941.jpg"
              alt="Olajumoke Michael portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </ScrollReveal>

          {/* Text — slow, deliberate fade */}
          <ScrollReveal
            personality="quiet"
            delay={0.3}
            className="lg:col-span-7 flex flex-col items-start lg:pl-8"
          >
            <p className="font-serif italic text-plum mb-5" style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)", letterSpacing: "0.01em" }}>The fuller person behind the work</p>
            <Headline size="xl" className="font-serif font-light text-ink mb-10 max-w-2xl leading-tight">
              Professional work is the front door here, but it is not the whole person.
            </Headline>
            <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-slate italic max-w-2xl mb-14">
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
          STATE 7: CLOSING ROUTE
          High contrast. The dark background IS the announcement.
          Elements slide up with authority.
      ========================================= */}
      <section className="relative bg-ink text-paper py-24 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Ghost letterform — closes the PROGRAM/STRATEGY motif from the hero */}
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
            <Headline as="h2" size="3xl" className="mb-0 text-paper">
              Let&apos;s connect
            </Headline>

            <p className="text-lg md:text-xl font-serif italic leading-relaxed text-soft-stone max-w-3xl">
              If you are considering me for a role, exploring a program or service challenge, or interested in collaborating, I would be glad to hear from you.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border border-paper text-paper px-10 py-4 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-paper hover:text-ink transition-colors duration-300"
            >
              Contact me
            </a>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
