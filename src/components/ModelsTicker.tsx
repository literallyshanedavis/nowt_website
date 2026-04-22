import { models } from "@/data/models";

export function ModelsTicker() {
  const items = [...models, ...models];
  return (
    <section
      id="models"
      className="relative py-[60px] border-t border-b border-line overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[120px] z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-[120px] z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}
      />
      <div className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-fg-mute mb-[30px]">
        Plugs into the models you already use
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-16 w-max items-center"
          style={{ animation: "ticker 38s linear infinite" }}
        >
          {items.map((m, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-fg-dim text-[17px] tracking-[-0.01em] whitespace-nowrap"
            >
              <span className="w-[22px] h-[22px] rounded-md border border-line-strong bg-[var(--color-tint-lo)] inline-flex items-center justify-center font-mono text-[11px] text-fg">
                {m.letter}
              </span>
              {m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
