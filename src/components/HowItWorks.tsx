"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Wire it up",
    description:
      "Drop nodes onto the canvas and connect them. Text into image gen, image gen into upscaler, upscaler into output. The connections are type-safe, so you\u2019ll know straight away if something doesn\u2019t fit.",
  },
  {
    number: "02",
    title: "Hit run",
    description:
      "Tap the button and watch it go. Each node lights up as it processes \u2014 you can see exactly where your pipeline is and what it\u2019s doing.",
  },
  {
    number: "03",
    title: "Keep what works",
    description:
      "Save the workflow. Next time, swap out the input image or change a prompt and run it again. Your best creative processes stop being one-offs.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            variants={itemVariants}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-dusk"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-sans text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight text-parchment"
          >
            From nowt to summat<span className="text-brass">.</span>
          </motion.h2>
        </AnimatedSection>

        <div className="mt-24 grid grid-cols-1 gap-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedSection
              key={step.number}
              className={`relative p-8 md:p-10 ${
                i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-drywall" : ""
              }`}
            >
              <motion.span
                variants={itemVariants}
                className="block font-sans text-[5rem] font-extralight leading-none text-brass/20"
              >
                {step.number}
              </motion.span>

              <motion.h3
                variants={itemVariants}
                className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-parchment"
              >
                {step.title}
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="mt-4 text-base leading-relaxed text-fog"
              >
                {step.description}
              </motion.p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
