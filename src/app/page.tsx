import { EditorialContainer } from "@/components/layout/EditorialContainer";
import { Grid } from "@/components/layout/Grid";
import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { FadeReveal } from "@/components/motion/FadeReveal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* =========================================
          STATE 1: IDEA
          Unresolved, spacious, fluid, Newsreader.
          Editorial integration of the human portrait (Clean 2-Column).
      ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12">

        
        <FadeReveal stagger direction="up" className="max-w-[1400px] w-full mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* The Typography - Left Column */}
            <div className="lg:col-span-7 flex flex-col z-20">
              <Display italic className="text-ink leading-[0.85] tracking-tight">
                Ideas
              </Display>
              <Display className="text-ink leading-[0.85] tracking-tight md:ml-[15%]">
                Structures
              </Display>
              
              <div className="flex flex-col md:flex-row md:items-center mt-8 lg:mt-10 md:ml-[10%]">
                <Body className="text-lg text-slate font-serif italic leading-relaxed max-w-sm lg:max-w-md">
                  I turn complex program ideas into structures that can be implemented, evaluated, and improved.
                </Body>
              </div>
            </div>

            {/* The Image - Right Column */}
            <div className="lg:col-span-5 relative z-10 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[400px] aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-soft-stone">
                <Image
                  src="/images/PXL_20250323_163744469.PORTRAIT Copy.JPG"
                  alt="Olajumoke Michael"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
            
          </div>
        </FadeReveal>
      </section>

      {/* =========================================
          STATE 2: STRUCTURE (Where strategy becomes practice)
          Grid becomes visible. Lines appear. Inter takes over for metadata.
      ========================================= */}
      <section className="relative border-t border-line bg-soft-stone">
        {/* This creates the architectural drafting look using explicit DOM borders */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full">
          
          {/* Structural Header */}
          <div className="col-span-1 md:col-span-12 border-b border-line flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-line flex items-start">
              <Meta className="text-plum">Phase 01</Meta>
            </div>
            <div className="w-full md:w-3/4 p-6 md:p-8 md:p-12">
              <Headline size="xl" className="max-w-4xl leading-tight">
                Before any system is built, we must define the intellectual core. What are we actually trying to solve, and why does it matter?
              </Headline>
            </div>
          </div>

          {/* Core Capabilities as Structural Modules */}
          <div className="col-span-1 md:col-span-4 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 flex flex-col h-full min-h-[400px] relative">
            <Meta className="mb-auto pb-12 text-plum">Architecture</Meta>
            <div className="mt-auto">
              <Headline size="lg" className="mb-4 font-sans">Program & Service Architecture</Headline>
              <Body className="text-slate">Translating the idea into a robust structural model. This is where conceptual elegance meets operational reality.</Body>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-4 border-b md:border-b-0 md:border-r border-line p-6 md:p-8 flex flex-col h-full min-h-[400px] relative">
            <Meta className="mb-auto pb-12 text-plum">Execution</Meta>
            <div className="mt-auto">
              <Headline size="lg" className="mb-4 font-sans">Implementation Leadership</Headline>
              <Body className="text-slate">Building it. Testing it. The moment when the plan collides with the friction of the real world.</Body>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-4 p-6 md:p-8 flex flex-col h-full min-h-[400px] border-b border-line md:border-b-0 relative">
            <Meta className="mb-auto pb-12 text-plum">Evaluation</Meta>
            <div className="mt-auto">
              <Headline size="lg" className="mb-4 font-sans">Measurement & Learning</Headline>
              <Body className="text-slate">Gathering the evidence. Learning where reality differed from our assumptions, and making the next crucial decision.</Body>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          STATE 3: EVIDENCE (Case Study - VRL)
          Strict two-column ledger. High precision.
      ========================================= */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16 md:mb-24 flex justify-between items-end border-b border-line pb-8">
            <Headline as="h2" size="xl">Selected Work</Headline>
            <Meta className="text-plum">Evidence & Analysis</Meta>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* The Narrative (Left Column) */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <Headline size="lg" italic className="text-clay leading-tight">
                Designing a Founder Support Pilot—and Learning from Its Limits
              </Headline>
              <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink">
                <p>
                  The Venture Readiness Lab was designed as a structural intervention. The hypothesis was that providing structured, intensive support would directly correlate with funding readiness.
                </p>
                <p>
                  Implementation revealed a more complex reality. While the structural deliverables were met, the human variables—founder capacity, market timing, and operational friction—demanded adaptation. 
                </p>
                <p>
                  We gathered the evidence. We learned exactly where reality differed from our assumptions. This isn't failure; it's the data required for the next crucial decision.
                </p>
              </div>
            </div>

            {/* The Evidence Ledger (Right Column) */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-line p-8 flex flex-col gap-8 bg-soft-stone/30">
                <Meta className="border-b border-line pb-4 w-full">Verified Outcomes</Meta>
                
                <div className="flex justify-between items-baseline border-b border-line/50 pb-4">
                  <span className="font-sans text-slate text-sm">Active Founders</span>
                  <span className="font-sans text-3xl text-ink font-medium">6</span>
                </div>
                
                <div className="flex justify-between items-baseline border-b border-line/50 pb-4">
                  <span className="font-sans text-slate text-sm">Completed Final Session</span>
                  <span className="font-sans text-3xl text-ink font-medium">6</span>
                </div>
                
                <div className="flex justify-between items-baseline pb-4">
                  <span className="font-sans text-slate text-sm">Produced Structural Deliverables</span>
                  <span className="font-sans text-3xl text-ink font-medium">5</span>
                </div>
                
                <div className="mt-8 pt-8 border-t border-line">
                  <Meta className="mb-4 text-clay">Intellectual Honesty</Meta>
                  <Body size="sm" className="text-slate italic font-serif">
                    The evidence proves engagement and deliverable completion. It does <em className="not-italic font-semibold text-ink">not</em> definitively establish long-term funding success without further longitudinal tracking.
                  </Body>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          STATE 4: EXPERIENCE PREVIEW
          Institutional credibility and professional arc.
      ========================================= */}
      <section className="relative border-t border-line bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-line pb-8 gap-8">
            <Headline as="h2" size="xl" className="max-w-3xl leading-tight">Experience across sectors—and across the work itself</Headline>
            <Meta className="shrink-0 text-plum">Professional Arc</Meta>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* The Image Anchor (Left Column) */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-soft-stone">
                <Image
                  src="/images/FAO_Wedding_2024_WomensConference-3.jpg"
                  alt="Olajumoke Michael speaking at podium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* The Ledger (Right Column) */}
            <div className="lg:col-span-7 flex flex-col">
              
              <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink mb-16">
                <p>
                  My experience spans entrepreneurship support, economic and community development, higher education, and UK-government and international-development contexts.
                </p>
              </div>

              {/* Roles Ledger */}
              <div className="flex flex-col border-t border-line">
                
                <div className="py-8 border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-4">
                    <Meta className="text-slate">Program Director</Meta>
                    <div className="font-sans font-medium text-ink mt-2">Winston-Salem Women's Business Center</div>
                  </div>
                  <div className="md:col-span-8">
                    <Body className="text-slate">I led entrepreneurship-support programming and its implementation.</Body>
                  </div>
                </div>

                <div className="py-8 border-b border-line grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-4">
                    <Meta className="text-slate">Program Manager</Meta>
                    <div className="font-sans font-medium text-ink mt-2">Bpeace</div>
                  </div>
                  <div className="md:col-span-8">
                    <Body className="text-slate">I managed implementation and coordinated delivery for a multi-state program supporting growth-stage founders.</Body>
                  </div>
                </div>



              </div>

              <div className="mt-16 prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink">
                <p>
                  Across these settings, the consistent thread has been turning direction into structure, coordinating the people and processes needed for delivery, and learning from what happens in practice.
                </p>
              </div>

              <div className="mt-12">
                <a href="#experience" className="inline-block relative overflow-hidden group">
                  <span className="font-sans uppercase tracking-[0.2em] text-sm font-semibold text-plum transition-colors duration-300">
                    View my experience
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-plum transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          STATE 5: CURRENT WORK & ETHNOIR CONTEXT
          Organizational context and founder resources.
      ========================================= */}
      <section className="relative border-t border-line bg-paper py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-line pb-8 gap-8">
            <Headline as="h2" size="xl">Current work through Ethnoir</Headline>
            <Meta className="shrink-0 text-plum">Organizational Context</Meta>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Column 1: Ethnoir Narrative */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="prose prose-lg prose-slate font-serif text-lg leading-relaxed text-ink mb-12">
                <p>
                  I founded Ethnoir to contribute to venture development—helping people understand current conditions and make informed decisions through founder-facing tools and evidence-informed program learning.
                </p>
              </div>

              <div className="mt-auto">
                <a href="#ethnoir" className="inline-block relative overflow-hidden group">
                  <span className="font-sans uppercase tracking-[0.2em] text-sm font-semibold text-plum transition-colors duration-300">
                    Visit Ethnoir
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-plum transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
              </div>
            </div>

            {/* Column 2: Check-In Resource Card */}
            <div className="lg:col-span-4 flex flex-col bg-soft-stone/50 p-8 border border-line rounded-sm">
              <Meta className="mb-6 text-clay">Ethnoir Resource</Meta>
              <Headline size="lg" className="mb-4 font-sans">Venture Readiness Check-In</Headline>
              
              <Body className="text-slate mb-8">
                A structured way for founders to reflect on current venture conditions and consider what deserves attention next. Designed as a starting point for reflection.
              </Body>

              <div className="mt-auto">
                <a href="#ethnoir-checkin" className="inline-block relative overflow-hidden group">
                  <span className="font-sans uppercase tracking-[0.2em] text-sm font-semibold text-plum transition-colors duration-300">
                    Explore the Check-In
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-plum transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
              </div>
            </div>

            {/* Column 3: The Image Anchor */}
            <div className="lg:col-span-4 relative w-full aspect-square lg:aspect-auto lg:h-full rounded-sm overflow-hidden bg-soft-stone">
              <Image
                src="/images/03_Olajumoke-Michael_Shalom-Facilitation.jpg"
                alt="Olajumoke Michael facilitating a workshop"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          STATE 6: LEARNING & NEXT DECISION (The Quiet Fire)
          Grid disappears. Warmer background. Human.
      ========================================= */}
      <section className="relative bg-soft-stone py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Human Portrait (Full Color, Unrestricted) */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/PXL_20250323_163744469.PORTRAIT Copy.JPG"
              alt="Portrait of Olajumoke Michael"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Introspection Text */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-12">
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
            
            <a href="https://thequietfire.com" target="_blank" rel="noopener noreferrer" className="inline-block relative overflow-hidden group">
              <span className="font-sans uppercase tracking-[0.2em] text-sm font-semibold text-plum transition-colors duration-300">
                Visit The Quiet Fire
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-plum transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================
          STATE 7: CLOSING ROUTE
          High contrast. Definitive end of page.
      ========================================= */}
      <section className="relative bg-ink text-paper py-32 md:py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          
          <Headline as="h2" size="2xl" className="mb-8 text-paper">
            Let's connect
          </Headline>
          
          <Body className="text-lg md:text-xl font-serif italic leading-relaxed text-soft-stone max-w-3xl mb-16">
            If you are considering me for a role, exploring a program or service challenge, or interested in collaborating, I would be glad to hear from you.
          </Body>
          
          <a href="mailto:contact@olajumokemichael.com" className="inline-block relative overflow-hidden group">
            <span className="font-sans uppercase tracking-[0.2em] text-sm md:text-base font-semibold text-paper group-hover:text-soft-stone transition-colors duration-300 pb-2">
              Contact me
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-soft-stone transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </a>

        </div>
      </section>

    </div>
  );
}
