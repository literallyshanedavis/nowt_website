"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const IPadScene = dynamic(
  () => import("@/components/three/IPadScene").then((mod) => mod.IPadScene),
  { ssr: false }
);

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
};

export function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pt-20">
      {/* Text — compact, centered */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-dusk"
        >
          Node-based AI workflows for iPad
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-6 font-sans font-normal tracking-tight text-parchment text-[clamp(3rem,8vw,7rem)] leading-[0.95]"
        >
          Start with nowt<span className="text-brass">.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-lg text-lg leading-relaxed text-fog sm:text-xl"
        >
          Wire up AI models on an infinite canvas. Run the whole pipeline
          with a tap. Tweak it till it&apos;s right. All on your iPad.
        </motion.p>
      </motion.div>

      {/* 3D iPad — massive, overlaps text slightly */}
      <motion.div
        className="relative -mt-32 w-full"
        style={{ height: "90vh" }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
      >
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[70%] w-[70%] rounded-full bg-brass/[0.08] blur-[100px]" />
        </div>
        <IPadScene />
      </motion.div>
    </section>
  );
}
