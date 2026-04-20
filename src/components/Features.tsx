import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionHeading } from "./ui/SectionHeading";

export function Features() {
  return (
    <section
      id="features"
      className="relative px-8 py-[120px] border-t border-line"
    >
      <Reveal className="max-w-[1200px] mx-auto">
        <SectionLabel>Built for the iPad</SectionLabel>
        <SectionHeading accent="not just chat.">Thinking tools,</SectionHeading>
        <p className="text-[17px] text-fg-dim max-w-[560px] leading-[1.5] tracking-[-0.01em]">
          thirtyseven feels like a whiteboard that runs. Pinch to zoom a
          thousand nodes, pencil-tap to re-route, play any branch to see a
          different future.
        </p>

        <div className="grid grid-cols-12 gap-4 mt-14 max-[860px]:grid-cols-1">
          <FeatureCard
            span="col-span-8 max-[860px]:col-span-1"
            tag="01 · Infinite canvas"
            title="Zoom from one prompt to a thousand."
            copy="Pan, pinch, scribble with Apple Pencil. Nodes snap to a dot grid; connections route themselves. Designed for the iPad, not ported to it."
          >
            <svg
              className="absolute inset-x-0 bottom-0 h-40 w-full pointer-events-none"
              viewBox="0 0 600 160"
              preserveAspectRatio="none"
            >
              <g fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1">
                <path d="M 20 120 C 120 120, 140 40, 240 40 S 380 120, 480 120 580 40, 600 40" />
                <path d="M 20 80 C 120 80, 140 20, 240 20 S 380 140, 480 140" />
              </g>
              <g fill="var(--color-accent)">
                <circle cx="40" cy="120" r="3" />
                <circle cx="240" cy="40" r="3" />
                <circle cx="480" cy="120" r="3" />
                <circle cx="580" cy="45" r="3" />
              </g>
            </svg>
          </FeatureCard>

          <FeatureCard
            span="col-span-4 max-[860px]:col-span-1"
            tag="02 · Every model"
            title="One canvas. Seven models. No tabs."
            copy="Claude, Veo, Nano Banana, Recraft, ElevenLabs, RunwayML, Gemini Flash — wire any of them to any input."
          />

          <FeatureCard
            span="col-span-4 max-[860px]:col-span-1"
            tag="03 · Branch & compare"
            title="Fork a node. Race two versions."
            copy="Split a pipeline into variants and run them in parallel. The best path wins. The others stay, muted, for later."
          />

          <FeatureCard
            span="col-span-8 max-[860px]:col-span-1"
            tag="04 · Local-first"
            title="Drafts on-device. Runs on demand."
            copy="Everything you build stays on your iPad. Only the node you execute hits the network — each model billed transparently, per run, per token."
          >
            <svg
              className="absolute inset-x-0 bottom-0 h-40 w-full pointer-events-none"
              viewBox="0 0 600 160"
              preserveAspectRatio="none"
            >
              <g fill="none" stroke="rgba(255,255,255,0.08)">
                <rect x="30" y="30" width="120" height="80" rx="10" />
                <rect x="170" y="30" width="120" height="80" rx="10" />
                <rect x="310" y="30" width="120" height="80" rx="10" />
                <rect x="450" y="30" width="120" height="80" rx="10" />
                <path
                  d="M 150 70 H 170 M 290 70 H 310 M 430 70 H 450"
                  stroke="var(--color-accent-line)"
                  strokeWidth="1.2"
                />
              </g>
              <g fill="var(--color-accent)">
                <circle cx="150" cy="70" r="3" />
                <circle cx="170" cy="70" r="3" />
                <circle cx="290" cy="70" r="3" />
                <circle cx="310" cy="70" r="3" />
                <circle cx="430" cy="70" r="3" />
                <circle cx="450" cy="70" r="3" />
              </g>
            </svg>
          </FeatureCard>
        </div>
      </Reveal>
    </section>
  );
}

function FeatureCard({
  span,
  tag,
  title,
  copy,
  children,
}: {
  span: string;
  tag: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`${span} border border-line rounded-[18px] p-7 min-h-[300px] relative overflow-hidden bg-gradient-to-b from-white/[0.015] to-transparent hover:border-line-strong transition-colors`}
    >
      <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-mute mb-3.5">
        {tag}
      </div>
      <h3 className="font-normal text-[26px] leading-[1.15] tracking-[-0.02em] m-0 mb-2.5 max-w-[24ch]">
        {title}
      </h3>
      <p className="text-fg-dim text-[14.5px] leading-[1.5] m-0 max-w-[38ch]">
        {copy}
      </p>
      {children}
    </div>
  );
}
