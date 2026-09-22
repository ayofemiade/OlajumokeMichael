import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { FadeReveal } from "@/components/motion/FadeReveal";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      
      {/* 1. Opening Orientation */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pb-32">
        <FadeReveal stagger direction="up" className="max-w-[1400px] w-full mx-auto">
          <Display italic className="text-ink leading-[1.1] tracking-tight mb-8">
            Experience
          </Display>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8 md:col-start-5 xl:col-start-6 xl:col-span-6">
              <Body className="text-xl md:text-2xl text-slate leading-relaxed font-serif">
                My work has taken place in different organizations and sectors, with different responsibilities in each. This page offers a selective account of that progression: from managing grants and operations to leading programs, coordinating delivery and learning from implementation.
              </Body>
            </div>
          </div>
        </FadeReveal>
      </section>

      {/* 2. The Chronology */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[1400px] mx-auto border-t border-line">
          
          {/* Ethnoir */}
          <FadeReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-line">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-4">2025–present · Winston-Salem, North Carolina</Meta>
              <Headline size="lg" className="text-ink">Ethnoir</Headline>
              <Meta className="text-slate uppercase tracking-wider">Founder</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
              <Body className="text-lg text-slate leading-relaxed font-serif mb-8">
                I started Ethnoir to help founders build better businesses. I designed and ran our first six-week pilot program, ensuring that every session, activity, and piece of advice was practical and tied directly to real-world results. You can read the full case study in Selected Work, which breaks down what I did, what the founders created, and what we actually learned.
              </Body>
              <Link href="/selected-work/venture-readiness-lab" className="group flex items-center gap-3 w-fit">
                <span className="text-sm font-medium tracking-wide uppercase text-plum">Read the Venture Readiness Lab case</span>
                <span className="w-10 h-[1px] bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
              </Link>
            </div>
          </FadeReveal>

          {/* Bpeace */}
          <FadeReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-line">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-4">2025–2026 · Remote / NC & GA</Meta>
              <Headline size="lg" className="text-ink">Bpeace</Headline>
              <Meta className="text-slate uppercase tracking-wider">U.S. Program Manager (Contract)</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
              <Body className="text-lg text-slate leading-relaxed font-serif">
                For Bpeace’s Breaking the $1M Barrier program, I managed implementation and coordinated delivery across a multi-state founder-support initiative. The role brought together participant engagement, learning and coaching activities, communications, stakeholder coordination and reporting. The work required keeping contributors, activities and moving parts aligned throughout implementation while responding to the realities of delivery.
              </Body>
            </div>
          </FadeReveal>

          {/* Winston-Salem WBC */}
          <FadeReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-line">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-4">2023–2025 · Winston-Salem, North Carolina</Meta>
              <Headline size="lg" className="text-ink">Winston-Salem Women’s Business Center</Headline>
              <Meta className="text-slate uppercase tracking-wider">Program Director</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
              <Body className="text-lg text-slate leading-relaxed font-serif">
                I led regional entrepreneurship-support programming and the operations behind it. My responsibilities included program planning and delivery, partnerships, staff and contributor coordination, grant requirements, and reporting. This role deepened my experience in connecting what entrepreneurs needed with the resources, relationships and operating structures available to support them.
              </Body>
            </div>
          </FadeReveal>

          {/* Guilford College */}
          <FadeReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-line">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-4">2021–2023 · Greensboro, North Carolina</Meta>
              <Headline size="lg" className="text-ink">Guilford College</Headline>
              <Meta className="text-slate uppercase tracking-wider">Assistant Director, Advancement Operations</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
              <Body className="text-lg text-slate leading-relaxed font-serif">
                I worked in advancement operations, strengthening the processes behind gift administration, stewardship, data quality and reporting. The work involved coordinating across colleagues and functions, resolving operational issues and making information more reliable for the people responsible for using it.
              </Body>
            </div>
          </FadeReveal>

          {/* SuccorAfrica */}
          <FadeReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24 border-b border-line">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-4">2019–2021 · Remote</Meta>
              <Headline size="lg" className="text-ink">SuccorAfrica Communications Ltd</Headline>
              <Meta className="text-slate uppercase tracking-wider">Project Consultant</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
              <Body className="text-lg text-slate leading-relaxed font-serif">
                I worked on project planning and implementation support, including operating processes, monitoring and review. This role drew on my earlier program-management experience while extending my work with organizations seeking to carry out and learn from their initiatives.
              </Body>
            </div>
          </FadeReveal>

          {/* British High Commission */}
          <FadeReveal direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-24">
            <div className="lg:col-span-4 flex flex-col gap-2">
              <Meta className="text-plum mb-4">2014–2019 · Abuja, Nigeria</Meta>
              <Headline size="lg" className="text-ink">British High Commission</Headline>
              <Meta className="text-slate uppercase tracking-wider">Grants & Program Manager</Meta>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col">
              <Body className="text-lg text-slate leading-relaxed font-serif">
                I managed grants and program work within the British High Commission in Nigeria. The portfolio covered justice, economic development and security-related initiatives. My responsibilities included partner coordination, grant administration, monitoring, compliance, reporting and analysis for program decisions. The work involved government, civil-society and international stakeholders; it was not work performed in the United Kingdom.
              </Body>
            </div>
          </FadeReveal>

        </div>
      </section>

      {/* 3. The Thread (Synthesis) */}
      <section className="relative bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center">
            <Headline size="xl" italic className="text-ink leading-tight mb-8">
              The thread across the roles
            </Headline>
            <Body className="text-lg text-slate leading-relaxed mb-10 max-w-3xl mx-auto font-serif">
              These positions did not involve identical work. Together, they show a progression in responsibility for turning intentions into organized delivery, coordinating people and processes, and using information from practice to inform decisions. My Selected Work examines one project in greater depth.
            </Body>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/selected-work" className="group flex items-center gap-3 w-fit">
                <span className="text-sm font-medium tracking-wide text-plum uppercase">View selected work</span>
                <span className="w-10 h-[1px] bg-plum group-hover:w-16 transition-all duration-500 ease-out"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Invitation */}
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
