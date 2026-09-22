import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
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
            <div className="w-full md:w-1/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-line flex items-start">
              <Meta className="text-plum">Where strategy becomes practice</Meta>
            </div>
            <div className="w-full md:w-3/4 p-6 md:p-8 md:p-12">
              <Headline size="xl" className="max-w-4xl leading-tight">
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
            <div className="col-span-1 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 flex flex-col h-full min-h-[400px] relative">
              <Meta className="mb-auto pb-12 text-plum">Architecture</Meta>
              <div className="mt-auto">
                <Headline size="lg" className="mb-4 font-sans">Program &amp; Service Architecture</Headline>
                <Body className="text-slate">I connect purpose, participants, activities, support and evidence to shape coherent programs and services.</Body>
              </div>
            </div>

            <div className="col-span-1 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 flex flex-col h-full min-h-[400px] relative">
              <Meta className="mb-auto pb-12 text-plum">Execution</Meta>
              <div className="mt-auto">
                <Headline size="lg" className="mb-4 font-sans">Implementation Leadership</Headline>
                <Body className="text-slate">I move designs into practice by establishing operating structures, coordinating delivery and responding to what implementation reveals.</Body>
              </div>
            </div>

            <div className="col-span-1 border-b border-line md:border-b-0 p-6 md:p-8 flex flex-col h-full min-h-[400px] relative">
              <Meta className="mb-auto pb-12 text-plum">Evaluation</Meta>
              <div className="mt-auto">
                <Headline size="lg" className="mb-4 font-sans">Measurement &amp; Learning</Headline>
                <Body className="text-slate">I build practical ways to gather and interpret evidence, distinguish what it supports from what remains uncertain and use the findings to guide the next decision.</Body>
              </div>
            </div>
          </ScrollReveal>

          {/* Closing thought */}
          <ScrollReveal
            personality="standard"
            delay={0.1}
            className="col-span-1 md:col-span-12 border-t border-line flex flex-col p-6 md:p-8 md:p-12"
          >
            <Body className="text-lg md:text-xl font-serif italic text-ink max-w-4xl leading-relaxed mb-10">
              Across this work, I move between strategy and execution: from proposition to program architecture, from architecture to delivery, and from implementation evidence to the next design decision.
            </Body>
            <div>
              <a
                href="/experience"
                className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
              >
                Learn more about my experience
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =========================================
          STATE 3: EVIDENCE (Case Study — VRL)
          Strict two-column ledger. Deliberate, unhurried entrance.
      ========================================= */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">

          <ScrollReveal
            personality="structural"
            className="mb-16 md:mb-24 flex justify-between items-end border-b border-line pb-8"
          >
            <Headline as="h2" size="xl">Selected Work</Headline>
            <Meta className="text-plum">Evidence &amp; Analysis</Meta>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* The Narrative — left column */}
            <ScrollReveal
              personality="standard"
              className="lg:col-span-6 flex flex-col gap-8"
            >
              <Headline size="lg" italic className="text-clay leading-tight">
                Designing a Founder Support Pilot—and Learning from Its Limits
              </Headline>
              <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink">
                <p>
                  For the Venture Readiness Lab, I translated an initial proposition into a six-week founder-support pilot through Ethnoir. I designed the program architecture and operating approach, led delivery and participant support, and examined the evidence the pilot produced.
                </p>
                <p>
                  The case examines what I built, what the pilot revealed and how its evidence and limitations shaped what I would retain, modify, test or defer.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="/selected-work/venture-readiness-lab"
                  className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
                >
                  Read the case study
                </a>
              </div>
            </ScrollReveal>

            {/* The Evidence Ledger — right column, staggered rows */}
            <ScrollReveal
              personality="standard"
              delay={0.15}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="border border-line p-8 flex flex-col gap-8 bg-soft-stone/30">
                <Meta className="border-b border-line pb-4 w-full">Pilot at a Glance</Meta>

                <ScrollReveal personality="structural" stagger staggerDelay={0.1}>
                  <div className="flex justify-between items-baseline border-b border-line/50 pb-4 gap-8">
                    <span className="font-sans text-slate text-sm">Active founders</span>
                    <span className="font-sans text-3xl text-ink font-medium">6</span>
                  </div>

                  <div className="flex justify-between items-baseline border-b border-line/50 pb-4 gap-8">
                    <span className="font-sans text-slate text-sm">Reached the final session</span>
                    <span className="font-sans text-3xl text-ink font-medium">6</span>
                  </div>

                  <div className="flex justify-between items-baseline pb-4 gap-8">
                    <span className="font-sans text-slate text-sm">Participants with structural business deliverables personally reviewed and confirmed</span>
                    <span className="font-sans text-3xl text-ink font-medium shrink-0">5</span>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

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
                  containerClassName="w-full h-full rounded-sm bg-soft-stone"
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
                    <div className="font-sans font-medium text-ink mt-1">Winston-Salem Women&apos;s Business Center</div>
                  </div>
                  <Body className="text-slate">I led entrepreneurship-support programming and its implementation.</Body>
                </div>

                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">Program Manager</Meta>
                    <div className="font-sans font-medium text-ink mt-1">Bpeace</div>
                  </div>
                  <Body className="text-slate">I managed implementation and coordinated delivery for a multi-state program supporting growth-stage founders.</Body>
                </div>

                <div className="role-row py-8 border-b border-line flex flex-col gap-3">
                  <div>
                    <Meta className="text-slate">Grants &amp; Program Manager</Meta>
                    <div className="font-sans font-medium text-ink mt-1">British High Commission</div>
                  </div>
                  <Body className="text-slate">I managed an international program portfolio spanning justice, economic development and security, working across government, civil-society and international partners.</Body>
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
              className="lg:col-span-5 flex flex-col bg-soft-stone/50 p-8 lg:p-12 border border-line rounded-sm"
            >
              <Meta className="mb-6 text-clay">Ethnoir Resource</Meta>
              <Headline size="lg" className="mb-4 font-sans">Venture Readiness Check-In</Headline>
              <Body className="text-slate mb-8 lg:mb-12">
                The Venture Readiness Check-In is an Ethnoir resource that gives founders a structured way to reflect on current venture conditions and consider what may deserve attention next. It is designed as a starting point for reflection, not a definitive assessment of a venture or its potential.
              </Body>
              <div className="mt-auto">
                <a
                  href="https://tally.so/r/XxEDD4"
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
              src="/images/PXL_20250323_163744469.PORTRAIT Copy.JPG"
              alt="Portrait of Olajumoke Michael"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </ScrollReveal>

          {/* Text — slow, deliberate fade */}
          <ScrollReveal
            personality="quiet"
            delay={0.3}
            className="lg:col-span-7 flex flex-col items-start lg:pl-12"
          >
            <Headline size="lg" italic className="text-plum mb-8">The fuller person behind the work</Headline>
            <Headline size="xl" className="font-serif font-medium text-ink mb-10 max-w-2xl leading-tight">
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
      <section className="relative bg-ink text-paper py-32 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">

          <ScrollReveal
            personality="strong"
            className="flex flex-col items-center gap-8"
          >
            <Headline as="h2" size="2xl" className="mb-0 text-paper">
              Let&apos;s connect
            </Headline>

            <Body className="text-lg md:text-xl font-serif italic leading-relaxed text-soft-stone max-w-3xl">
              If you are considering me for a role, exploring a program or service challenge, or interested in collaborating, I would be glad to hear from you.
            </Body>

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
