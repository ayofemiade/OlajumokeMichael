import type { Metadata } from "next";
import { Display } from "@/components/typography/Display";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { FadeReveal } from "@/components/motion/FadeReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Privacy Notice for olajumokemichael.com. Explains how personal information is handled when you visit or contact Olajumoke Michael.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Notice | Olajumoke Michael",
    description:
      "Privacy Notice for olajumokemichael.com. Explains how personal information is handled when you visit or contact Olajumoke Michael.",
    url: "https://olajumokemichael.com/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pb-32">
        <FadeReveal stagger direction="up" className="max-w-[1400px] w-full mx-auto">
          
          {/* Header Block */}
          <div className="border-b border-line pb-12 mb-16 md:mb-20">
            <Meta className="text-plum mb-4 block">Policy &amp; Data Practices</Meta>
            <Display italic className="text-ink leading-[1.05] tracking-tight mb-6">
              Privacy Notice
            </Display>
            <Body className="text-sm font-sans text-slate uppercase tracking-wider font-medium">
              Effective date: October 23, 2026
            </Body>
          </div>

          {/* Reading Layout: 12-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sidebar Context */}
            <aside className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-32">
              <div className="bg-soft-stone/40 p-6 md:p-8 border-l-2 border-plum">
                <Meta className="text-plum mb-3 block">Overview</Meta>
                <Body className="text-sm font-serif text-ink leading-relaxed">
                  This notice explains how personal information is handled when you visit olajumokemichael.com or contact Olajumoke Michael.
                </Body>
              </div>

              <div className="border border-line/60 p-6">
                <Meta className="text-plum mb-3 block">Direct Inquiries</Meta>
                <Body className="text-sm font-sans text-slate leading-relaxed mb-3">
                  For questions or privacy requests about this website:
                </Body>
                <a
                  href="mailto:omichael@ethnoirconsulting.com"
                  className="text-sm font-sans font-medium text-ink underline underline-offset-4 hover:text-plum transition-colors duration-200 break-all"
                >
                  omichael@ethnoirconsulting.com
                </a>
              </div>
            </aside>

            {/* Main Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-14 max-w-3xl">

              {/* 1. Who operates this website */}
              <section className="flex flex-col gap-4">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Who operates this website
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    I am Olajumoke Michael, based in North Carolina, United States. This notice explains how personal information is handled when you visit olajumokemichael.com or contact me through it.
                  </p>
                  <p>
                    This website presents my professional experience and work. Ethnoir and The Quiet Fire are separate sites with their own content, and they may have their own privacy practices. Following a link to either one does not subscribe you to updates or submit information to its forms.
                  </p>
                  <p>
                    For questions or privacy requests about this website, email{" "}
                    <a
                      href="mailto:omichael@ethnoirconsulting.com"
                      className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200"
                    >
                      omichael@ethnoirconsulting.com
                    </a>
                    . This is the professional inbox I use for personal-site inquiries and for Ethnoir correspondence.
                  </p>
                </div>
              </section>

              {/* 2. Information collected */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Information collected
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    If you contact me through the form or by email, I receive your name, email address, organization (if provided), your message, and any further information you choose to include in later correspondence.
                  </p>
                  <p>
                    The providers that host the website, protect it from abuse and deliver form messages may process technical information, such as an IP address, browser and device information, request times, delivery status and spam or error logs.
                  </p>
                  <p className="bg-soft-stone/30 p-5 border-l-2 border-line text-base text-ink">
                    Please do not send financial account details, government identification numbers, passwords, health information, confidential participant records or other sensitive personal information through the form or in a first email. The form does not accept file uploads.
                  </p>
                </div>
              </section>

              {/* 3. How information is used */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  How information is used
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    I use inquiry information to understand and respond to your message, assess a possible role, project or collaboration, keep relevant correspondence, and handle support or privacy requests. Technical information is used to operate and secure the website and fix problems.
                  </p>
                  <p>
                    Sending an inquiry does not add you to a mailing list or permit promotional messages. If a separate subscription is ever offered, it will have its own choice and its own explanation of how information is used.
                  </p>
                </div>
              </section>

              {/* 4. Providers and disclosures */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Providers and disclosures
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>These providers support the website and its correspondence:</p>
                  <ul className="list-disc pl-6 space-y-2 text-ink">
                    <li>
                      <strong className="font-semibold text-ink">Website hosting:</strong> Hostinger.
                    </li>
                    <li>
                      <strong className="font-semibold text-ink">Contact form, spam prevention and message delivery:</strong> Native server processing on Hostinger, spam-prevention honeypot checks, and direct email delivery to Google Workspace. Inquiries are transmitted via email and are not stored in a separate website database.
                    </li>
                    <li>
                      <strong className="font-semibold text-ink">Professional email:</strong> Google Workspace, used for messages received at{" "}
                      <a
                        href="mailto:omichael@ethnoirconsulting.com"
                        className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200"
                      >
                        omichael@ethnoirconsulting.com
                      </a>
                      .
                    </li>
                  </ul>
                  <p>
                    Authorized technical support providers may have limited access when needed to maintain the site or resolve a problem. I do not sell or rent inquiry information. I may disclose information when applicable law requires it, or when it is reasonably necessary to protect rights, safety or security.
                  </p>
                  <p>
                    If your message concerns Ethnoir, I may respond in that capacity or point you to Ethnoir&apos;s contact route. I do not share your inquiry with potential employers, funders or unrelated program partners unless you ask me to or agree beforehand, except where disclosure is legally required.
                  </p>
                </div>
              </section>

              {/* 5. Cookies and analytics */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Cookies and analytics
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    This website does not use advertising cookies or tags, and it does not use optional analytics. The website and its providers may use technically necessary functions to deliver pages and protect the contact form from abuse.
                  </p>
                </div>
              </section>

              {/* 6. Retention */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Retention
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    I keep inquiry information while responding and for a reasonable period afterward to manage relevant correspondence. I periodically review it and delete information no longer needed, subject to legal obligations and ongoing engagements.
                  </p>
                  <p>
                    Technical logs and provider backups are kept by those providers under their own retention schedules.
                  </p>
                </div>
              </section>

              {/* 7. Your choices */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Your choices
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    You can choose whether to send an inquiry and what to include. You may ask to see, correct or delete your inquiry information. I may need to confirm who you are, and I may keep some records where the law permits or requires it.
                  </p>
                  <p>
                    Send requests to{" "}
                    <a
                      href="mailto:omichael@ethnoirconsulting.com"
                      className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200"
                    >
                      omichael@ethnoirconsulting.com
                    </a>
                    , naming the email address you used and what you are asking for. Please do not send extra sensitive information to confirm your identity unless we have agreed on a suitable method.
                  </p>
                </div>
              </section>

              {/* 8. Security and where information is processed */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Security and where information is processed
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    I use reasonable safeguards and the security features of the services that support this website and my email. No system for sending or storing information online is completely secure.
                  </p>
                  <p>
                    I am based in the United States, so information you send may be processed here. The providers listed above may also process information in other countries where they or their subprocessors operate.
                  </p>
                </div>
              </section>

              {/* 9. Children and third-party links */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Children and third-party links
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    This professional website and its contact form are not directed to children. If you believe a child has sent personal information through it, contact me so I can review the situation and remove the information where appropriate.
                  </p>
                  <p>
                    Other websites linked here, including LinkedIn, Ethnoir and The Quiet Fire, follow their own privacy practices.
                  </p>
                </div>
              </section>

              {/* 10. Updates */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Updates
                </Headline>
                <div className="flex flex-col gap-4 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p>
                    I may update this notice as the website or its information practices change. The revised notice will show its effective date.
                  </p>
                </div>
              </section>

              {/* 11. Contact */}
              <section className="flex flex-col gap-4 border-t border-line/40 pt-10">
                <Headline as="h2" size="lg" className="text-ink font-serif">
                  Contact
                </Headline>
                <div className="flex flex-col gap-2 text-slate text-base md:text-lg font-serif leading-relaxed">
                  <p className="font-semibold text-ink">Olajumoke Michael</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:omichael@ethnoirconsulting.com"
                      className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200"
                    >
                      omichael@ethnoirconsulting.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <Link
                      href="/"
                      className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200"
                    >
                      https://olajumokemichael.com/
                    </Link>
                  </p>
                </div>
              </section>

            </div>

          </div>

        </FadeReveal>
      </section>
    </div>
  );
}
