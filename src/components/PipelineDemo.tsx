"use client";

import { useEffect, useRef, useState } from "react";
import { NodeCanvas } from "./canvas/NodeCanvas";
import { Reveal } from "./Reveal";
import type { NodeDef, EdgeDef } from "./canvas/types";

const baseNodes: NodeDef[] = [
  {
    id: "brief",
    type: "text",
    x: 10,
    y: 22,
    title: "Brand Brief",
    body: "# Terra Botanica\nartisan skincare",
  },
  {
    id: "mood",
    type: "text",
    x: 10,
    y: 72,
    title: "Mood Prompt",
    body: "fog · glass · moss",
  },
  {
    id: "dir",
    type: "text",
    x: 38,
    y: 47,
    title: "Art Direction",
    body: "Claude Sonnet 4\nCreative Director",
    model: "claude",
  },
  {
    id: "logo",
    type: "image",
    x: 65,
    y: 22,
    title: "Logo",
    model: "recraft",
  },
  {
    id: "scene",
    type: "image",
    x: 65,
    y: 72,
    title: "Product Scene",
    model: "nano banana",
  },
  {
    id: "film",
    type: "video",
    x: 88,
    y: 47,
    title: "Brand Film",
    body: "Veo 3.1",
    model: "veo 3.1",
  },
];

const edges: readonly EdgeDef[] = [
  ["brief", "dir"],
  ["mood", "dir"],
  ["dir", "logo"],
  ["dir", "scene"],
  ["logo", "film"],
  ["scene", "film"],
];

const order = ["brief", "mood", "dir", "logo", "scene", "film"] as const;

type Callout = {
  id: (typeof order)[number];
  label: string;
  headline: string;
  body: string;
};

const callouts: Callout[] = [
  {
    id: "brief",
    label: "Brand Brief",
    headline: "Structured context, not vibes.",
    body: "Paste a brief, PRD, or transcript. The canvas reads it as real input — every downstream node inherits the facts.",
  },
  {
    id: "mood",
    label: "Mood Prompt",
    headline: "Visual direction, side-by-side with copy.",
    body: "Fragments, keywords, references — whatever steers the model. No separate moodboard tool, no context-switching.",
  },
  {
    id: "dir",
    label: "Art Direction",
    headline: "One creative lead for the whole board.",
    body: "A reasoning model sets tone and prompt strategy before anything renders. Every asset pulls from the same direction.",
  },
  {
    id: "logo",
    label: "Logo",
    headline: "Ship assets in parallel, not in sequence.",
    body: "Recraft, Ideogram, Flux — any image model on any branch. Iterate one without blocking the next.",
  },
  {
    id: "scene",
    label: "Product Scene",
    headline: "Same direction, different surface.",
    body: "Stop re-explaining the brand for every asset. The art direction node hands context down once, consistently.",
  },
  {
    id: "film",
    label: "Brand Film",
    headline: "Video off the same canvas.",
    body: "Every node sees the same lineage, so a Veo shot matches the logo matches the scene. Brand integrity, end to end.",
  },
];

export function PipelineDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      const idx = Math.min(order.length - 1, Math.floor(p * order.length));
      setProgress(p);
      setStep(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const nodes: NodeDef[] = baseNodes.map((n) => {
    const idx = order.indexOf(n.id as (typeof order)[number]);
    const state =
      idx < step ? "done" : idx === step ? "running" : "queued";
    return { ...n, state };
  });

  return (
    <section id="demo" className="relative border-t border-line">
      <div className="px-8 pt-[120px] pb-14">
        <Reveal className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mb-[18px] before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-[2px]">
            A live pipeline
          </div>
          <h2
            className="font-sans font-normal leading-[1.02] tracking-[-0.04em] m-0 mb-[18px] text-balance"
            style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
          >
            Your whole workflow,{" "}
            <em
              className="text-accent not-italic"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              one surface.
            </em>
          </h2>
          <p className="text-[17px] text-fg-dim max-w-[560px] leading-[1.5] tracking-[-0.01em]">
            Scroll to step through a real run. Each node is a model, a prompt,
            or an asset — wired together and executing in order. No hidden
            state, no black boxes.
          </p>
        </Reveal>
      </div>

      <div ref={wrapperRef} className="relative h-[260vh]">
        <div className="sticky top-[6vh] px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative h-[min(580px,72vh)] border border-line rounded-[18px] overflow-hidden bg-bg-elev">
              <div className="flex items-center justify-between px-[18px] py-3 border-b border-line font-mono text-xs text-fg-dim">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-line-strong" />
                    <span className="w-2.5 h-2.5 rounded-full bg-line-strong" />
                    <span className="w-2.5 h-2.5 rounded-full bg-line-strong" />
                  </div>
                  <span className="text-fg">Terra Botanica · Brand kit</span>
                </div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-accent-line text-accent bg-accent-soft text-[11px]">
                  <span
                    className="w-1.5 h-1.5 bg-accent rounded-full"
                    style={{ animation: "pulse 1.6s infinite" }}
                  />
                  running · step {step + 1}/6
                </div>
              </div>
              <div className="dotfield relative h-[calc(100%-46px)]">
                <NodeCanvas nodes={nodes} edges={edges} />
                <div className="absolute bottom-3.5 left-[18px] right-[18px] h-1 rounded-full bg-line overflow-hidden z-[4]">
                  <span
                    className="block h-full bg-accent transition-[width] duration-150 ease-out"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-7 min-h-[120px]">
              {callouts.map((c, i) => (
                <div
                  key={c.id}
                  aria-hidden={step !== i}
                  className={`absolute inset-x-0 top-0 transition-opacity duration-500 ease-out ${
                    step === i
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mb-2.5">
                    <span className="text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-[3px] h-[3px] rounded-full bg-fg-mute" />
                    <span>{c.label}</span>
                  </div>
                  <p className="text-fg font-sans font-normal leading-[1.25] tracking-[-0.02em] text-balance max-w-[700px]"
                     style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}>
                    {c.headline}
                  </p>
                  <p className="text-fg-dim text-[15px] leading-[1.5] tracking-[-0.005em] max-w-[620px] mt-2">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px]" />
    </section>
  );
}
