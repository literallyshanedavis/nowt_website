"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "./AnimatedSection";

const categories = [
  {
    label: "Inputs",
    title: "Start from\nanywhere",
    description:
      "Type a prompt, draw with Apple Pencil, snap a photo with the camera, or pick something from your library. Four ways into the pipeline — whatever you\u2019ve got to hand.",
    details: "4 node types",
  },
  {
    label: "AI & Generate",
    title: "The interesting\nbit",
    description:
      "Claude, GPT-4o, and Gemini for text. Flux for images. Six video models including Runway, Veo, and Kling. Music from a sentence. Speech in twenty-five voices. SVG generation too.",
    details: "7 node types \u00b7 15+ models",
  },
  {
    label: "Process",
    title: "Clean it up,\ncombine it, convert it",
    description:
      "Remove backgrounds, composite layers, resize and sharpen, vectorise rasters, restyle video. The boring-but-essential stuff that turns raw output into something finished.",
    details: "6 processing tools",
  },
  {
    label: "Control & Structure",
    title: "Make it\nclever",
    description:
      "Branch your pipeline with if/else logic. Collapse chunks of nodes into reusable groups. Workflows that think for themselves.",
    details: "Branching \u00b7 Groups",
  },
];

export function NodesShowcase() {
  return (
    <section className="px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            variants={itemVariants}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-dusk"
          >
            The toolkit
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-sans text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight text-parchment"
          >
            Nineteen nodes<span className="text-brass">.</span> One canvas
            <span className="text-brass">.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-fog sm:text-xl"
          >
            Text generation from three major LLM providers. Image generation.
            Six different video models — Runway, Veo, Kling, and more. Music
            from a description. Speech in over twenty-five voices. Background
            removal, compositing, vectorisation, conditional branching. All
            wired together on your iPad.
          </motion.p>
        </AnimatedSection>

        <div className="mt-24 grid grid-cols-1 gap-0 md:grid-cols-2">
          {categories.map((cat, i) => (
            <AnimatedSection
              key={cat.label}
              className={`flex flex-col justify-between p-8 md:p-12 min-h-[280px] ${
                i < categories.length - 1
                  ? "border-b border-drywall"
                  : ""
              } ${i % 2 === 0 ? "md:border-r md:border-drywall" : ""} ${
                i < 2
                  ? "md:border-b md:border-drywall"
                  : "md:border-b-0"
              }`}
            >
              <div>
                <motion.span
                  variants={itemVariants}
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-dusk"
                >
                  {cat.label}
                </motion.span>
                <motion.h3
                  variants={itemVariants}
                  className="mt-3 font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-[1.15] text-parchment whitespace-pre-line"
                >
                  {cat.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="mt-4 max-w-sm text-base leading-relaxed text-fog"
                >
                  {cat.description}
                </motion.p>
              </div>
              <motion.p
                variants={itemVariants}
                className="mt-6 font-mono text-xs tracking-wide text-dusk"
              >
                {cat.details}
              </motion.p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
