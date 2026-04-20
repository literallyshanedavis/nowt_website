import { Reveal } from "./Reveal";

type Plan = {
  name: string;
  featured?: boolean;
  priceLabel?: React.ReactNode;
  price: string;
  suffix: string;
  items: string[];
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Hobby",
    priceLabel: (
      <span className="text-fg-mute font-mono text-[11px]">free</span>
    ),
    price: "$0",
    suffix: " / forever",
    items: [
      "Unlimited canvases",
      "Bring your own API keys",
      "Local drafts, 2 devices",
      "Community templates",
    ],
    cta: "Download on TestFlight",
  },
  {
    name: "Studio",
    featured: true,
    priceLabel: (
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent px-2 py-0.5 bg-accent-soft rounded-full">
        Most popular
      </span>
    ),
    price: "$12",
    suffix: " / month",
    items: [
      "Credits at cost across all 7 models",
      "Version history, 180 days",
      "Shared canvases, up to 3 collaborators",
      "Pencil gestures & advanced routing",
      "Priority queue",
    ],
    cta: "Start free 14-day trial",
  },
  {
    name: "Team",
    price: "$24",
    suffix: " / editor / mo",
    items: [
      "Everything in Studio",
      "Shared workspace & folders",
      "SSO & SCIM",
      "Custom model endpoints",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative px-8 py-[120px] border-t border-line"
    >
      <Reveal className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mb-[18px] before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-[2px]">
          Pricing
        </div>
        <h2
          className="font-sans font-normal leading-[1.02] tracking-[-0.04em] m-0 mb-[18px] text-balance"
          style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
        >
          Pay for runs,{" "}
          <em
            className="text-accent not-italic"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            not for seats.
          </em>
        </h2>
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
