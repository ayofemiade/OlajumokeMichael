"use client";

import { useState } from "react";
import { Headline } from "@/components/typography/Headline";
import { Body } from "@/components/typography/Body";
import { Meta } from "@/components/typography/Meta";
import { FadeReveal } from "@/components/motion/FadeReveal";
import { Button } from "@/components/actions/Button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { elegantEase } from "@/lib/motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // Honeypot
    };

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          data.error ||
            "Unable to send message. Please try again or email omichael@ethnoirconsulting.com directly."
        );
      }
    } catch {
      // In local dev without PHP server running, or network disconnect
      setErrorMessage(
        "Network error sending message. Please try again or email omichael@ethnoirconsulting.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-paper min-h-screen">
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 md:pb-32">
        <FadeReveal stagger direction="up" className="max-w-[1400px] w-full mx-auto">
          
          {/* Main Title */}
          <div className="border-b border-line pb-8 mb-12 md:mb-16">
            <h1
              className="font-serif italic text-ink leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Contact
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Context, Three Ways to Start & Direct Info */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              {/* Lead paragraph */}
              <Body className="text-base md:text-lg text-ink font-serif leading-relaxed">
                If you are considering me for a role, working through a challenge in how a program or service is designed or run, or interested in collaborating, I would be glad to hear from you.
              </Body>

              {/* Three ways to start */}
              <div className="flex flex-col gap-5 border-t border-line pt-8">
                <Meta className="text-plum uppercase tracking-widest text-xs font-semibold">
                  Three ways to start
                </Meta>

                <div className="flex flex-col gap-4">
                  <div className="p-5 border border-line bg-soft-stone/40 rounded-sm flex flex-col gap-1.5">
                    <span className="font-serif font-semibold text-ink text-base">
                      A role.
                    </span>
                    <span className="font-serif text-slate text-sm leading-relaxed">
                      Tell me the position, the organization and the timing.
                    </span>
                  </div>

                  <div className="p-5 border border-line bg-soft-stone/40 rounded-sm flex flex-col gap-1.5">
                    <span className="font-serif font-semibold text-ink text-base">
                      A program or service.
                    </span>
                    <span className="font-serif text-slate text-sm leading-relaxed">
                      Tell me what you are trying to design, launch or improve, and by when.
                    </span>
                  </div>

                  <div className="p-5 border border-line bg-soft-stone/40 rounded-sm flex flex-col gap-1.5">
                    <span className="font-serif font-semibold text-ink text-base">
                      A collaboration.
                    </span>
                    <span className="font-serif text-slate text-sm leading-relaxed">
                      Tell me the program or service challenge and what you have in mind.
                    </span>
                  </div>
                </div>
              </div>

              {/* Follow-up Note & Email Routing */}
              <div className="flex flex-col gap-6 border-t border-line pt-8">
                <Body className="text-sm md:text-base text-slate font-serif leading-relaxed">
                  Send a short note about the opportunity or question and what you would like to discuss. For inquiries specifically related to Ethnoir&apos;s work or resources, please use{" "}
                  <a
                    href="https://ethnoirconsulting.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200 font-medium"
                  >
                    Ethnoir&apos;s contact page
                  </a>
                  . You can also email me directly at{" "}
                  <a
                    href="mailto:omichael@ethnoirconsulting.com"
                    className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200 font-medium"
                  >
                    omichael@ethnoirconsulting.com
                  </a>
                  .
                </Body>

                {/* Confidentiality Warning Note */}
                <div className="bg-soft-stone/60 p-5 border-l-2 border-plum rounded-r-sm">
                  <Body className="text-xs md:text-sm text-ink font-sans leading-relaxed">
                    Please do not include confidential documents or sensitive personal information in an initial message.
                  </Body>
                </div>
              </div>

            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7 lg:pl-6 xl:pl-12">
              <div className="min-h-[500px] flex flex-col justify-center border border-line p-8 md:p-12 bg-soft-stone/20 rounded-sm">
                <AnimatePresence mode="wait">
                  
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: elegantEase }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-8 w-full"
                    >
                      {/* Anti-spam honeypot field (hidden from real users) */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      {errorMessage && (
                        <div
                          id="contact-error"
                          className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-sans rounded-none"
                          role="alert"
                        >
                          {errorMessage}
                        </div>
                      )}

                      {/* Name (required) */}
                      <div className="flex flex-col gap-2.5 group">
                        <label
                          htmlFor="name"
                          className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300"
                        >
                          Name (required)
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          autoComplete="name"
                          required 
                          aria-required="true"
                          disabled={isSubmitting}
                          className="w-full bg-paper border border-line px-4 py-3 text-base md:text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 disabled:opacity-50 rounded-sm shadow-2xs" 
                        />
                      </div>
                      
                      {/* Email (required) */}
                      <div className="flex flex-col gap-2.5 group">
                        <label
                          htmlFor="email"
                          className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300"
                        >
                          Email (required)
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          autoComplete="email"
                          required 
                          aria-required="true"
                          disabled={isSubmitting}
                          className="w-full bg-paper border border-line px-4 py-3 text-base md:text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 disabled:opacity-50 rounded-sm shadow-2xs" 
                        />
                      </div>

                      {/* Organization (optional) */}
                      <div className="flex flex-col gap-2.5 group">
                        <label
                          htmlFor="organization"
                          className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300"
                        >
                          Organization (optional)
                        </label>
                        <input 
                          type="text" 
                          id="organization" 
                          name="organization" 
                          autoComplete="organization"
                          disabled={isSubmitting}
                          className="w-full bg-paper border border-line px-4 py-3 text-base md:text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 disabled:opacity-50 rounded-sm shadow-2xs" 
                        />
                      </div>
                      
                      {/* Message (required) */}
                      <div className="flex flex-col gap-2.5 group">
                        <label
                          htmlFor="message"
                          className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300"
                        >
                          Message (required)
                        </label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={5} 
                          required 
                          aria-required="true"
                          disabled={isSubmitting}
                          placeholder="What would you like to discuss?" 
                          className="w-full bg-paper border border-line p-4 text-base md:text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 resize-none disabled:opacity-50 placeholder:text-slate/40 rounded-sm shadow-2xs" 
                        />
                      </div>
                      
                      {/* Privacy text above the button & Submit */}
                      <div className="pt-2 flex flex-col gap-4">
                        <p className="text-xs text-slate font-sans leading-relaxed">
                          I use the information you send to review and respond to your inquiry. Read the{" "}
                          <Link 
                            href="/privacy" 
                            className="text-plum underline underline-offset-4 hover:text-ink transition-colors duration-200 font-medium"
                          >
                            Privacy Notice
                          </Link>
                          .
                        </p>
                        <div>
                          <Button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3.5 uppercase tracking-[0.15em] text-xs font-semibold"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Send message"}
                          </Button>
                        </div>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: elegantEase, delay: 0.1 }}
                      className="flex flex-col items-center justify-center text-center h-full gap-6 py-16 px-6 bg-paper border border-line rounded-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-plum/10 flex items-center justify-center text-plum">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <Headline as="h2" size="lg" className="text-ink font-serif font-normal">
                        Thank you. Your message has been sent.
                      </Headline>
                      <Body className="text-sm text-slate font-serif max-w-md leading-relaxed">
                        I will review your message and respond directly to your email address.
                      </Body>
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </div>
            </div>

          </div>
        </FadeReveal>
      </section>
    </div>
  );
}
