import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { FadeReveal } from "@/components/motion/FadeReveal";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Core Tension (Hero) */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 bg-paper">
        <FadeReveal stagger direction="up" className="max-w-[1200px] w-full mx-auto relative z-10">
          <Display italic className="text-ink leading-[1.1] tracking-tight max-w-5xl">
            I work at the point where a program’s purpose meets the realities of putting it into practice.
          </Display>
        </FadeReveal>
      </section>

      {/* 2. Experience Context */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-24 md:pb-32 bg-paper">
        <FadeReveal direction="up" delay={0.2} className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-8 md:col-start-5 xl:col-start-6 xl:col-span-6">
            <Body className="text-lg text-slate leading-relaxed mb-6 font-serif">
              An idea needs more than a compelling case for why it matters. It needs a structure people can deliver, a way to understand what is happening, and room to learn when reality differs from the plan.
            </Body>
            <Body className="text-lg text-slate leading-relaxed font-serif">
              My experience spans entrepreneurship support, economic and community development, higher education, and international-development work in Nigeria. Across those settings, I have led programs, coordinated people and partners, built operating approaches, and used evidence from implementation to inform what comes next. The contexts have differed; the recurring work has been connecting direction with delivery.
            </Body>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <Link href="/experience" className="group flex items-center gap-3 w-fit">
                <span className="text-sm font-medium tracking-wide uppercase text-plum">Explore my experience</span>
                <span className="w-10 h-[1px] bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
              </Link>
              <Link href="/selected-work" className="group flex items-center gap-3 w-fit">
                <span className="text-sm font-medium tracking-wide uppercase text-slate group-hover:text-plum transition-colors">View selected work</span>
                <span className="w-10 h-[1px] bg-slate/30 group-hover:bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
              </Link>
            </div>
          </div>
        </FadeReveal>
      </section>

      {/* 3. Methodology (Structural Blueprint) */}
      <section className="relative border-t border-line bg-soft-stone">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          
          <div className="col-span-1 md:col-span-12 border-b border-line flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-6 md:p-8 md:px-12 border-b md:border-b-0 md:border-r border-line flex items-start">
              <Meta className="text-plum">Methodology</Meta>
            </div>
            <div className="w-full md:w-3/4 p-6 md:p-8 md:p-12 xl:px-24">
              <Headline as="h2" size="xl" className="max-w-4xl leading-tight">
                How I approach the work
              </Headline>
            </div>
          </div>

          <div className="col-span-1 md:col-span-6 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 md:p-12 xl:p-24 flex flex-col h-full min-h-[450px] relative">
            <Meta className="mb-auto pb-12 text-plum">01. Connecting the elements</Meta>
            <div className="mt-auto">
              <Headline size="lg" className="mb-6 font-sans leading-snug max-w-md">Understanding purpose, people, and conditions</Headline>
              <Body className="text-slate max-w-md">I start by understanding the purpose, the people involved, and the conditions in which the work will happen. From there, I look at how the activities, responsibilities, resources and evidence need to connect. I care about whether a program can actually be carried out, not just whether it makes sense on paper.</Body>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-6 p-6 md:p-8 md:p-12 xl:p-24 flex flex-col h-full min-h-[450px] relative">
            <Meta className="mb-auto pb-12 text-plum">02. Learning from implementation</Meta>
            <div className="mt-auto">
              <Headline size="lg" className="mb-6 font-sans leading-snug max-w-md">Distinguishing feedback from outcomes</Headline>
              <Body className="text-slate max-w-md">Implementation is also a source of learning. Participation, feedback, completed work and gaps in the evidence can each tell us something different. I try to distinguish what happened from what people reported, and both from the outcomes we may still need to test.</Body>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Current Work (Bridge) */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center">
            <Meta className="text-plum mb-6">Current Work</Meta>
            <Headline as="h2" size="xl" italic className="text-ink leading-tight mb-8">
              I founded Ethnoir as a separate organization focused on venture development.
            </Headline>
            <Body className="text-slate mb-10 max-w-2xl mx-auto">
              Through it, I have designed and delivered founder-facing work, including the Venture Readiness Lab. That pilot is the first detailed case in my Selected Work: it shows the program I built and led, what the evidence established, and what remained unresolved.
            </Body>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/selected-work/venture-readiness-lab" className="group flex items-center gap-3 w-fit">
                <span className="text-sm font-medium tracking-wide text-plum uppercase">Read the Venture Readiness Lab case</span>
                <span className="w-10 h-[1px] bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
              </Link>
              <a href="https://ethnoirconsulting.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 w-fit">
                <span className="text-sm font-medium tracking-wide text-slate group-hover:text-plum uppercase transition-colors">Visit Ethnoir</span>
                <span className="w-10 h-[1px] bg-slate/30 group-hover:bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. The Human Dimension */}
      <section className="relative bg-soft-stone py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-xl bg-paper">
              <Image
                src="/images/03_Olajumoke-Michael_Shalom-Facilitation.jpg"
                alt="Olajumoke Michael facilitating"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <Meta className="text-plum mb-8">Beyond the work</Meta>
            <Headline as="h2" size="xl" className="text-ink leading-tight mb-8">
              Professional work is central to this site, but it is one part of my life.
            </Headline>
            <Body className="text-lg text-slate leading-relaxed mb-10 font-serif">
              Faith, culture, motherhood, creativity and reflection also shape how I think about work, responsibility and becoming. I explore some of that wider landscape through The Quiet Fire, a separate reflective publication.
            </Body>
            <a href="https://thequietfire.olajumokemichael.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 w-fit">
              <span className="text-sm font-medium tracking-wide uppercase text-plum">Visit The Quiet Fire</span>
              <span className="w-10 h-[1px] bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. Contact Invitation */}
      <section className="relative bg-ink py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-slate/30 pt-16">
          <div className="max-w-2xl">
            <Meta className="text-soft-stone/70 mb-6">A conversation</Meta>
            <Headline as="h2" size="lg" className="text-paper leading-tight mb-6">
              If my experience is relevant to a role, a program or service challenge, or a possible collaboration, I would be glad to hear from you.
            </Headline>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-plum text-white hover:bg-white hover:text-ink transition-colors duration-300 text-sm font-medium tracking-wide uppercase shrink-0"
          >
            Contact me
          </Link>
        </div>
      </section>

    </div>
  );
}
