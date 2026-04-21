import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  effectiveDate,
  sections,
  tldr,
  type PrivacyBlock,
} from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy — thirtyseven",
  description:
    "How thirtyseven handles your data. Local-first by default, short on collection, plain-English throughout.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="relative">
        <section className="px-8 pt-[120px] pb-14 border-t border-line">
          <div className="max-w-[640px] mx-auto">
            <SectionLabel>Privacy Policy</SectionLabel>
            <SectionHeading accent="briefly." sizeClamp="clamp(34px, 5vw, 56px)">
              Your data,
            </SectionHeading>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mt-2">
              Effective: {effectiveDate}
            </p>
          </div>
        </section>

        <section className="px-8 pb-10">
          <div className="max-w-[640px] mx-auto border border-line rounded-[18px] p-7 bg-gradient-to-b from-white/[0.015] to-transparent">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-mute mb-3.5">
              The short version
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[14.5px] text-fg-dim leading-[1.5]">
              {tldr.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span
                    aria-hidden
                    className="w-1.5 h-1.5 rounded-full bg-accent mt-[7px] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-8 pb-[120px]">
          <div className="max-w-[640px] mx-auto flex flex-col gap-12">
            {sections.map((s) => (
              <article key={s.num}>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mb-3.5">
                  <span className="text-accent tabular-nums">{s.num}</span>
                  <span
                    aria-hidden
                    className="w-[3px] h-[3px] rounded-full bg-fg-mute"
                  />
                  <span>{s.label}</span>
                </div>
                <h2 className="font-sans font-normal text-[22px] leading-[1.2] tracking-[-0.02em] m-0 mb-4 text-fg">
                  {s.label}
                </h2>
                <div className="flex flex-col gap-3.5 text-[15.5px] text-fg-dim leading-[1.65]">
                  {s.blocks.map((b, i) => (
                    <Block key={i} block={b} />
                  ))}
                </div>
              </article>
            ))}

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-fg-mute hover:text-fg transition-colors"
              >
                <span aria-hidden>←</span>
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Block({ block }: { block: PrivacyBlock }) {
  if (block.kind === "p") {
    return <p className="m-0">{block.text}</p>;
  }
  if (block.kind === "h3") {
    return (
      <h3 className="font-sans font-medium text-[15.5px] text-fg m-0 mt-1.5 tracking-[-0.01em]">
        {block.text}
      </h3>
    );
  }
  return (
    <ul className="list-disc pl-5 m-0 flex flex-col gap-2 marker:text-fg-mute">
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
