"use client";

import { useRef } from "react";
import { NodeCanvas } from "./canvas/NodeCanvas";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionHeading } from "./ui/SectionHeading";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import type { NodeDef } from "./canvas/types";
import { baseNodes, edges, order, callouts } from "@/data/pipeline";

export function PipelineDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { progress, step } = useScrollProgress(wrapperRef, order.length);

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
          <SectionLabel>A live pipeline</SectionLabel>
          <SectionHeading accent="one surface.">
            Your whole workflow,
          </SectionHeading>
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
