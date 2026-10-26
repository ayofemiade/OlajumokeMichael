import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Olajumoke Michael | Program Design, Delivery and Evaluation",
  },
  description:
    "About Olajumoke Michael: how she approaches program design, operations and delivery, her experience across sectors, and the wider life that shapes her work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Olajumoke Michael | Program Design, Delivery and Evaluation",
    description:
      "About Olajumoke Michael: how she approaches program design, operations and delivery, her experience across sectors, and the wider life that shapes her work.",
    url: "https://olajumokemichael.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Core Tension (Hero) */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 bg-paper border-b border-line/30">
        <div className="max-w-[1200px] w-full mx-auto relative z-10">
          <ScrollReveal personality="strong">
            <Display italic className="text-ink leading-[1.1] tracking-tight max-w-5xl">
              I work at the point where a program&apos;s purpose meets the realities of putting it into practice.
            </Display>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Pull Quote, Background & CTAs */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 md:py-28 bg-paper">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Philosophy Pullquote */}
          <ScrollReveal personality="structural" className="lg:col-span-5 flex flex-col">
            <blockquote className="border-l-2 border-plum pl-5 py-1">
              <p className="font-serif text-base md:text-lg text-ink leading-relaxed italic">
                &ldquo;An idea needs more than a compelling case for why it matters. It needs a structure people can deliver, a way to understand what is happening, and room to learn when reality differs from the plan.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          {/* Right Column: Background Narrative & CTAs */}
          <ScrollReveal personality="structural" delay={0.15} className="lg:col-span-7 flex flex-col pt-2 lg:pt-0">
            <Body className="text-lg text-slate leading-relaxed font-serif mb-10">
              I have worked in entrepreneurship support, economic and community development, higher education, and international-development work in Nigeria. In those settings I have led programs, coordinated staff, volunteers and partners, built and strengthened the operating systems programs depend on, and used what delivery revealed to decide what to change.
            </Body>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link
                href="/experience"
                className="inline-flex items-center justify-center bg-ink text-paper px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum transition-colors duration-300"
              >
                Explore my experience
              </Link>
              <Link
                href="/selected-work"
                className="inline-flex items-center justify-center bg-transparent border border-line text-ink px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:border-ink transition-colors duration-300"
              >
                View selected work
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. How I approach the work */}
      <section className="relative border-t border-line bg-soft-stone">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          
          <ScrollReveal
            personality="structural"
            className="col-span-1 md:col-span-12 border-b border-line p-6 md:p-8 md:p-12 xl:px-24"
          >
            <Headline as="h2" size="xl" className="max-w-4xl leading-tight">
              How I approach the work
            </Headline>
          </ScrollReveal>

          {/* 3 Columns detailing the progression of practice */}
          <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3">
            
            {/* Column 01: Purpose, People & Conditions */}
            <ScrollReveal
              personality="standard"
              delay={0.1}
              className="col-span-1 border-b md:border-b-0 border-r-0 md:border-r border-line p-6 md:p-8 md:p-10 xl:p-14 flex flex-col justify-between transition-colors duration-300 hover:bg-paper/40"
            >
              <div>
                <Body className="text-slate text-base md:text-lg leading-relaxed font-serif">
                  I start by understanding the purpose, the people involved, and the conditions in which the work will happen. From there, I look at how the activities, responsibilities, resources and evidence need to connect. I care about whether a program can actually be carried out, not just whether it makes sense on paper.
                </Body>
              </div>
            </ScrollReveal>

            {/* Column 02: Implementation as learning */}
            <ScrollReveal
              personality="standard"
              delay={0.2}
              className="col-span-1 border-b md:border-b-0 border-r-0 md:border-r border-line p-6 md:p-8 md:p-10 xl:p-14 flex flex-col justify-between transition-colors duration-300 hover:bg-paper/40"
            >
              <div>
                <Body className="text-slate text-base md:text-lg leading-relaxed font-serif">
                  Implementation is also a source of learning. Participation, feedback, completed work and gaps in the evidence can each tell us something different. I try to distinguish what happened from what people reported, and both from the outcomes we may still need to test.
                </Body>
              </div>
            </ScrollReveal>

            {/* Column 03: Practical demonstration */}
            <ScrollReveal
              personality="standard"
              delay={0.3}
              className="col-span-1 p-6 md:p-8 md:p-10 xl:p-14 flex flex-col justify-between transition-colors duration-300 hover:bg-paper/40"
            >
              <div>
                <Body className="text-slate text-base md:text-lg leading-relaxed font-serif">
                  In my Venture Readiness Lab pilot, office hours were available but rarely used. That showed me that offering support is not the same as making it usable.
                </Body>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 4. People and teams I have worked with */}
      <section className="relative border-t border-line bg-paper py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <ScrollReveal personality="standard" className="lg:col-span-5">
              <Headline as="h2" size="xl" className="text-ink leading-tight">
                People and teams I have worked with
              </Headline>
            </ScrollReveal>

            <ScrollReveal personality="standard" delay={0.15} className="lg:col-span-7 flex flex-col space-y-6 pt-1">
              <Body className="text-slate text-base md:text-lg leading-relaxed font-serif">
                My experience includes working with entrepreneurs and founders, college advancement teams, nonprofit staff and volunteer networks, and government, civil-society and international partners.
              </Body>
              <Body className="text-slate text-base md:text-lg leading-relaxed font-serif">
                Across these settings, I have connected different perspectives, clarified responsibilities and coordinated people around shared goals.
              </Body>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Current work */}
      <section className="relative border-t border-line bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <ScrollReveal
            personality="standard"
            className="lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center"
          >
            <Headline as="h2" size="xl" italic className="text-ink leading-tight mb-8">
              I founded Ethnoir to build practical support for founders.
            </Headline>
            <Body className="text-slate mb-10 max-w-2xl mx-auto font-serif text-base md:text-lg leading-relaxed">
              Ethnoir is a separate organization. Through it I designed and ran the Venture Readiness Lab, a six-week pilot for early-stage founders. It is the first case in my Selected Work and shows the program I built and led, what the evidence established, and what remained unresolved.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
              <Link
                href="/selected-work/venture-readiness-lab"
                className="inline-flex items-center justify-center bg-transparent border border-plum text-plum px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:bg-plum hover:text-paper transition-colors duration-300"
              >
                Read the Venture Readiness Lab case
              </Link>
              <a
                href="https://ethnoirconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-line text-ink px-8 py-3.5 font-sans uppercase tracking-[0.15em] text-xs font-semibold hover:border-ink transition-colors duration-300"
              >
                Visit Ethnoir
              </a>
            </div>
          </ScrollReveal>
          
        </div>
      </section>

      {/* 6. Beyond the work */}
      <section className="relative bg-paper py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-line">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          
          {/* Portrait — blending seamlessly with background */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center items-center">
            <ScrollReveal
              personality="quiet"
              className="relative w-full max-w-[440px] aspect-[3/4] [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
            >
              <Image
                src="/images/new.png"
                alt="Portrait of Olajumoke Michael"
                fill
                loading="lazy"
                decoding="async"
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </ScrollReveal>
          </div>
          
          {/* Quiet Fire Reflection */}
          <ScrollReveal
            personality="quiet"
            delay={0.2}
            className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 flex flex-col items-start"
          >
            <Meta className="text-plum mb-8">Beyond the work</Meta>
            <Headline as="h2" size="xl" className="text-ink leading-tight mb-8">
              What matters to me shapes how I work.
            </Headline>
            <div className="space-y-6">
              <Body className="text-lg text-slate leading-relaxed font-serif">
                Faith, family, learning and creativity are central to my life. They influence how I think about responsibility, achievement and the kind of contribution I want to make.
              </Body>
              <Body className="text-lg text-slate leading-relaxed font-serif">
                I value clarity, thoughtful follow-through and room for people to learn. I care about building things that endure while making space for family, reflection and creative expression.
              </Body>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 7. A conversation */}
      <section className="relative bg-ink text-paper py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-line">
        <ScrollReveal
          personality="strong"
          className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-slate/30 pt-16"
        >
          <div className="max-w-2xl">
            <Meta className="text-soft-stone/70 mb-6">A conversation</Meta>
            <Headline as="h2" size="lg" className="text-paper leading-tight mb-6">
              If my experience is relevant to a role, a program or service challenge, or a possible collaboration, I would be glad to hear from you.
            </Headline>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 shrink-0">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-plum text-white hover:bg-paper hover:text-ink transition-colors duration-300 text-xs font-semibold tracking-[0.15em] uppercase text-center"
            >
              Discuss a role or project
            </Link>
            <Link 
              href="/selected-work" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-paper/70 text-paper hover:bg-paper hover:text-ink transition-colors duration-300 text-xs font-semibold tracking-[0.15em] uppercase text-center"
            >
              View selected work
            </Link>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
