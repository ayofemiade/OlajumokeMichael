"use client";

import { useState } from "react";
import { Display } from "@/components/typography/Display";
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
    } catch (err) {
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
          
          <Display italic className="text-ink leading-[1.1] tracking-tight mb-16 md:mb-24">
            Contact
          </Display>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Context & Rules */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <Body className="text-base md:text-lg text-ink font-semibold leading-relaxed font-serif">
                If you’re considering me for a role, exploring a program or service challenge, or interested in collaborating, I would be glad to hear from you.
              </Body>
              
              <div className="flex flex-col gap-8 border-t border-line pt-8">
                <div>
                  <Body className="text-base text-slate font-sans leading-relaxed">
                    Send a short note about the opportunity or question and what you would like to discuss. 
                    For inquiries specifically related to Ethnoir’s work or resources, please use <a href="https://ethnoirconsulting.com" target="_blank" rel="noopener noreferrer" className="text-plum hover:text-ink transition-colors duration-300 underline underline-offset-4">Ethnoir’s contact route</a>.
                  </Body>
                </div>

                <div>
                  <Meta className="text-plum mb-2">Direct Contact</Meta>
                  <Body className="text-base text-ink font-sans">
                    Email: <a href="mailto:omichael@ethnoirconsulting.com" className="underline underline-offset-4 hover:text-plum transition-colors duration-200">omichael@ethnoirconsulting.com</a>
                  </Body>
                </div>
                
                <div className="bg-soft-stone/50 p-6 border-l-2 border-plum">
                  <Meta className="text-plum mb-2">Note</Meta>
                  <Body className="text-sm text-ink font-sans leading-relaxed">
                    Please do not include confidential documents or sensitive personal information in an initial message.
                  </Body>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7 lg:pl-12 xl:pl-24">
              <div className="min-h-[500px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.6, ease: elegantEase }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-10 w-full"
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
                        <div id="contact-error" className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-sans rounded-none" role="alert">
                          {errorMessage}
                        </div>
                      )}

                      <div className="flex flex-col gap-4 group">
                        <label htmlFor="name" className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300">Name (required)</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          autoComplete="name"
                          required 
                          aria-required="true"
                          disabled={isSubmitting}
                          className="w-full bg-transparent border-b border-line pb-3 text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 disabled:opacity-50" 
                        />
                      </div>
                      
                      <div className="flex flex-col gap-4 group">
                        <label htmlFor="email" className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300">Email (required)</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          autoComplete="email"
                          required 
                          aria-required="true"
                          disabled={isSubmitting}
                          className="w-full bg-transparent border-b border-line pb-3 text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 disabled:opacity-50" 
                        />
                      </div>

                      <div className="flex flex-col gap-4 group">
                        <label htmlFor="organization" className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300">Organization (optional)</label>
                        <input 
                          type="text" 
                          id="organization" 
                          name="organization" 
                          autoComplete="organization"
                          disabled={isSubmitting}
                          className="w-full bg-transparent border-b border-line pb-3 text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 disabled:opacity-50" 
                        />
                      </div>
                      
                      <div className="flex flex-col gap-4 group">
                        <label htmlFor="message" className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300">Message (required)</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={4} 
                          required 
                          aria-required="true"
                          disabled={isSubmitting}
                          placeholder="What would you like to discuss?" 
                          className="w-full bg-transparent border-b border-line pb-3 text-lg font-serif text-ink focus:outline-none focus:border-plum transition-colors duration-300 resize-none disabled:opacity-50 placeholder:text-slate/40" 
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send message"}
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: elegantEase, delay: 0.2 }}
                      className="flex flex-col items-center justify-center text-center h-full gap-6 py-20 px-8 bg-soft-stone/30 border border-line"
                    >
                      <div className="w-12 h-12 rounded-full bg-plum/10 flex items-center justify-center text-plum">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <Headline size="lg" className="text-ink font-serif">
                        Thank you. Your message has been sent.
                      </Headline>
                      <Body className="text-sm text-slate font-sans max-w-md">
                        Your message has been transmitted directly to <strong className="text-ink font-semibold">omichael@ethnoirconsulting.com</strong>. I will be in touch soon.
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
