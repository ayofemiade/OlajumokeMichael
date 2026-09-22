"use client";

import { useState } from "react";
import { Display } from "@/components/typography/Display";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
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
              <Body className="text-xl md:text-2xl text-ink leading-relaxed font-serif">
                If you’re considering me for a role, exploring a program or service challenge, or interested in collaborating, I would be glad to hear from you.
              </Body>
              
              <div className="flex flex-col gap-8 border-t border-line pt-8">
                <div>
                  <Body className="text-base text-slate font-sans leading-relaxed">
                    Send a short note about the opportunity or question and what you would like to discuss. 
                    For inquiries specifically related to Ethnoir’s work or resources, please use <a href="https://ethnoirconsulting.com" target="_blank" rel="noopener noreferrer" className="text-plum hover:text-ink transition-colors duration-300 underline underline-offset-4">Ethnoir’s contact route</a>.
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
                      className="flex flex-col gap-12 w-full"
                    >
                      <div className="flex flex-col gap-4 group">
                        <label htmlFor="name" className="font-sans font-medium text-xs tracking-widest uppercase text-slate group-focus-within:text-plum transition-colors duration-300">Name (required)</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
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
                          required 
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
                      className="flex flex-col items-center justify-center text-center h-full gap-6 py-24 bg-soft-stone/30 border border-line"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-plum">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Body className="text-xl text-ink font-serif">
                        Thank you. Your message has been sent.
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
