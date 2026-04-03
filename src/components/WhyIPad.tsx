"use client";

import { motion } from "framer-motion";
import { AnimatedSection, itemVariants } from "./AnimatedSection";

const features = [
  {
    title: "Try things where\ninspiration hits",
    description:
      "See something worth generating from? Open your iPad and try it. On location, between meetings, on the sofa. Desktop tools mean the idea has to survive until you\u2019re back at your machine. Most don\u2019t.",
  },
  {
    title: "Touch-native\nediting",
    description:
      "Drag nodes with your fingers. Connect them with a swipe. Pinch to zoom. The canvas works how your hands expect \u2014 no right-click menus, no browser getting in the way.",
  },
  {
    title: "Pencil and camera\nin the pipeline",
    description:
      "Sketch into ControlNet with Apple Pencil. Photograph something straight into a node with the camera. Draw masks, scribble notes on outputs. The hardware you\u2019re already holding becomes part of the workflow.",
  },
  {
    title: "Runs without\na connection",
    description:
      "Smaller models run locally on Apple Silicon. Heavier ones hit the cloud when you\u2019ve got signal. Either way, you\u2019re not tethered to a desk or a GPU tower.",
  },
];

export function WhyIPad() {
  return (
    <section className="px-6 py-40">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            variants={itemVariants}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-dusk"
          >
            Why iPad
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 font-sans text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.05] tracking-tight text-parchment max-w-2xl"
          >
            Ideas don&apos;t wait till you&apos;re back at your desk.
          </motion.h2>
        </AnimatedSection>

        <div className="mt-24 grid grid-cols-1 gap-0 md:grid-cols-2">
          {features.map((feature, i) => (
            <AnimatedSection
              key={feature.title}
              className={`flex flex-col justify-between p-8 md:p-12 min-h-[280px] ${
                i < features.length - 1 ? "border-b border-drywall" : ""
              } ${i % 2 === 0 ? "md:border-r md:border-drywall" : ""} ${
                i < 2 ? "md:border-b md:border-drywall" : "md:border-b-0"
              }`}
            >
              <motion.h3
                variants={itemVariants}
                className="font-sans text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-[1.15] text-parchment whitespace-pre-line"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-sm text-base leading-relaxed text-fog"
              >
                {feature.description}
              </motion.p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
