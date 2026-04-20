import { NodeCanvas } from "./canvas/NodeCanvas";
import type { NodeDef, EdgeDef } from "./canvas/types";

const heroNodes: NodeDef[] = [
  {
    id: "brief",
    type: "text",
    x: 14,
    y: 22,
    title: "Brand Brief",
    body: "Artisan botanical skincare,\nwarm earthtones, editorial",
    state: "done",
  },
  {
    id: "mood",
    type: "text",
    x: 14,
    y: 72,
    title: "Mood Prompt",
    body: "fog · glass · moss · handmade · quiet luxury",
    state: "done",
  },
  {
    id: "dir",
    type: "text",
    x: 44,
    y: 45,
    title: "Art Direction",
    body: "Claude Sonnet\nSystem: senior creative director",
    state: "running",
  },
  {
    id: "logo",
    type: "image",
    x: 76,
    y: 22,
    title: "Logo Mark",
    state: "done",
  },
  {
    id: "hero",
    type: "image",
    x: 76,
    y: 72,
    title: "Hero Render",
    state: "queued",
  },
];

const heroEdges: readonly EdgeDef[] = [
  ["brief", "dir"],
  ["mood", "dir"],
  ["dir", "logo"],
  ["dir", "hero"],
];

export function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden isolate"
    >
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.42]"
        style={{ filter: "saturate(0.85)" }}
      >
        <NodeCanvas nodes={heroNodes} edges={heroEdges} />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, var(--color-bg) 15%, rgba(10,10,11,0.7) 40%, transparent 80%), radial-gradient(ellipse 30% 22% at 50% 44%, var(--color-accent-soft), transparent 70%)",
        }}
      />
      <div className="relative z-[3] text-center px-6 max-w-[860px]">
        <h1
          className="font-sans font-medium tracking-[-0.055em] leading-[0.95] m-0 mb-[18px]"
          style={{ fontSize: "clamp(56px, 11vw, 156px)" }}
        >
          thirtyseven
        </h1>
        <p
          className="text-fg mx-auto mb-4 leading-[1.2] tracking-[-0.02em] text-balance"
          style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
        >
          An infinite canvas for AI. On iPad.
        </p>
        <p
          className="text-fg-dim max-w-[480px] mx-auto mb-9 leading-[1.55] tracking-[-0.003em]"
          style={{ fontSize: "clamp(12px, 0.95vw, 14px)" }}
        >
          Pan a thousand nodes. Wire any model to any input. Run any branch.
        </p>
        <div className="inline-flex items-center gap-3 flex-wrap justify-center">
          <a
            href="#final"
            className="inline-flex items-center gap-2 px-[22px] py-[13px] rounded-full text-sm font-medium bg-fg text-[#141414] hover:bg-white transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 384 512"
              className="w-[14px] h-[14px] -mt-[1px]"
              fill="currentColor"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Join the waitlist →
          </a>
        </div>
        <div className="mt-6 font-mono text-[11px] tracking-[0.16em] uppercase text-fg-mute">
          TestFlight · Build 003 · iPadOS 18+
        </div>
      </div>
    </header>
  );
}
