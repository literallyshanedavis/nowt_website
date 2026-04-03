"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "./AnimatedSection";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <AnimatedSection id="waitlist" className="px-6 py-40">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          variants={itemVariants}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-dusk"
        >
          Early access
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="mt-4 font-sans text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.95] tracking-tight text-parchment"
        >
          Nowt&apos;s better<span className="text-brass">.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-md text-lg text-fog"
        >
          Get first word when it&apos;s ready.
        </motion.p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 text-lg text-parchment"
          >
            <span className="mr-2 text-beck">&#10003;</span>
            Right then. We&apos;ll be in touch.
          </motion.p>
        ) : (
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="mt-12 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-drywall bg-white px-4 py-3.5 text-sm text-parchment placeholder:text-dusk outline-none transition-colors focus:border-brass"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg border border-brass px-6 py-3.5 text-sm font-medium text-brass transition-all hover:bg-brass hover:text-slate-bg hover:shadow-[0_0_30px_rgba(224,90,56,0.15)]"
            >
              Notify me
            </button>
          </motion.form>
        )}
      </div>
    </AnimatedSection>
  );
}
