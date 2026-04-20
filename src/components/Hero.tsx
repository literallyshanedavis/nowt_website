import { NodeCanvas } from "./canvas/NodeCanvas";
import { PrimaryCTA } from "./ui/PrimaryCTA";
import { heroNodes, heroEdges } from "@/data/hero-canvas";

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
          <PrimaryCTA href="#final">Join the waitlist →</PrimaryCTA>
        </div>
        <div className="mt-6 font-mono text-[11px] tracking-[0.16em] uppercase text-fg-mute">
          TestFlight · Build 003 · iPadOS 18+
        </div>
      </div>
    </header>
  );
}
