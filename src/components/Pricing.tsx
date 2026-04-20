import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionHeading } from "./ui/SectionHeading";
import { plans, type Plan } from "@/data/plans";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative px-8 py-[120px] border-t border-line"
    >
      <Reveal className="max-w-[1200px] mx-auto">
        <SectionLabel>Pricing</SectionLabel>
        <SectionHeading accent="not for seats.">Pay for runs,</SectionHeading>
        <p className="text-[17px] text-fg-dim max-w-[560px] leading-[1.5] tracking-[-0.01em]">
          The app is free. You bring your own API keys, or top up credits at
          cost. No markups, no seat minimums.
        </p>

        <div className="grid grid-cols-3 gap-3.5 mt-14 max-[860px]:grid-cols-1">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`${plan.featured ? "plan-featured" : "border border-line bg-gradient-to-b from-white/[0.015] to-transparent"} rounded-[18px] p-7 flex flex-col gap-4 min-h-[420px]`}
    >
      <div className="flex items-center justify-between text-sm font-medium text-fg">
        <span>{plan.name}</span>
        {plan.priceLabel}
      </div>
      <div className="text-[44px] tracking-[-0.04em] font-normal text-fg leading-none">
        {plan.price}
        <small className="text-sm text-fg-mute tracking-[-0.01em]">
          {plan.suffix}
        </small>
      </div>
      <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-fg-dim flex-1">
        {plan.items.map((it) => (
          <li key={it} className="flex gap-2.5 items-start">
            <svg
              className="w-3.5 h-3.5 shrink-0 mt-[3px]"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <rect
                width="14"
                height="14"
                rx="4"
                fill={
                  plan.featured
                    ? "var(--color-accent-soft)"
                    : "rgba(255,255,255,0.06)"
                }
              />
              <path
                d="M3.5 7.2L6 9.6L10.5 4.8"
                stroke={
                  plan.featured ? "var(--color-accent)" : "var(--color-fg)"
                }
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a
        href="#final"
        className={`mt-auto px-4 py-3 text-center border rounded-full text-[13.5px] transition-colors ${plan.featured ? "bg-fg text-[#141414] border-fg hover:bg-white" : "bg-white/[0.02] text-fg border-line-strong hover:bg-white/[0.06]"}`}
      >
        {plan.cta}
      </a>
    </div>
  );
}
