import type { ReactNode } from "react";

export type Plan = {
  name: string;
  featured?: boolean;
  priceLabel?: ReactNode;
  price: string;
  suffix: string;
  items: string[];
  cta: string;
};

export const plans: Plan[] = [
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
