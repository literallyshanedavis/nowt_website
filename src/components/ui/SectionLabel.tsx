import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mb-[18px] before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-[2px]">
      {children}
    </div>
  );
}
