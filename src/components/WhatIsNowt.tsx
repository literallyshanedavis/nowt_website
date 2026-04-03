"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "./AnimatedSection";

const stats = [
  {
    label: "9 node types",
    description: "Image gen, LLM, upscale, mask, sketch, and more to come.",
  },
  {
    label: "Infinite canvas",
    description: "Lay things out however your brain works.",
  },
  {
    label: "Your keys, your costs",
    description: "Bring your own API keys. No middleman markup.",
  },
];

export function WhatIsNowt() {
  return (
    <AnimatedSection className="px-6 py-40">
      <div className="mx-auto max-w-4xl">
        <motion.p
          variants={itemVariants}
          className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-[1.6] text-parchment font-light"
        >
          You know how most AI tools work: type a prompt, wait, get a single
          result, start again.{" "}
          <span className="text-brass">nowt. is a canvas.</span>{" "}
          You place nodes — an image generator here, an upscaler there, a text
          model feeding into both — and wire them together. Hit run and the
          whole thing executes as a pipeline. Same workflow tomorrow with
          different inputs, or rearrange the lot and try something new.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="border-t border-drywall pt-6"
            >
              <p className="font-mono text-sm tracking-wide text-parchment">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fog">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
