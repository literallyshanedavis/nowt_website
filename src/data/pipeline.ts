import type { NodeDef, EdgeDef } from "@/components/canvas/types";

export const baseNodes: NodeDef[] = [
  {
    id: "brief",
    type: "text",
    x: 10,
    y: 22,
    title: "Brand Brief",
    body: "# Terra Botanica\nartisan skincare",
  },
  {
    id: "mood",
    type: "text",
    x: 10,
    y: 72,
    title: "Mood Prompt",
    body: "fog · glass · moss",
  },
  {
    id: "dir",
    type: "text",
    x: 38,
    y: 47,
    title: "Art Direction",
    body: "Claude Sonnet 4\nCreative Director",
    model: "claude",
  },
  {
    id: "logo",
    type: "image",
    x: 65,
    y: 22,
    title: "Logo",
    model: "recraft",
  },
  {
    id: "scene",
    type: "image",
    x: 65,
    y: 72,
    title: "Product Scene",
    model: "nano banana",
  },
  {
    id: "film",
    type: "video",
    x: 88,
    y: 47,
    title: "Brand Film",
    body: "Veo 3.1",
    model: "veo 3.1",
  },
];

export const edges: readonly EdgeDef[] = [
  ["brief", "dir"],
  ["mood", "dir"],
  ["dir", "logo"],
  ["dir", "scene"],
  ["logo", "film"],
  ["scene", "film"],
];

export const order = ["brief", "mood", "dir", "logo", "scene", "film"] as const;

export type Callout = {
  id: (typeof order)[number];
  label: string;
  headline: string;
  body: string;
};

export const callouts: Callout[] = [
  {
    id: "brief",
    label: "Brand Brief",
    headline: "Structured context, not vibes.",
    body: "Paste a brief, PRD, or transcript. The canvas reads it as real input — every downstream node inherits the facts.",
  },
  {
    id: "mood",
    label: "Mood Prompt",
    headline: "Visual direction, side-by-side with copy.",
    body: "Fragments, keywords, references — whatever steers the model. No separate moodboard tool, no context-switching.",
  },
  {
    id: "dir",
    label: "Art Direction",
    headline: "One creative lead for the whole board.",
    body: "A reasoning model sets tone and prompt strategy before anything renders. Every asset pulls from the same direction.",
  },
  {
    id: "logo",
    label: "Logo",
    headline: "Ship assets in parallel, not in sequence.",
    body: "Recraft, Ideogram, Flux — any image model on any branch. Iterate one without blocking the next.",
  },
  {
    id: "scene",
    label: "Product Scene",
    headline: "Same direction, different surface.",
    body: "Stop re-explaining the brand for every asset. The art direction node hands context down once, consistently.",
  },
  {
    id: "film",
    label: "Brand Film",
    headline: "Video off the same canvas.",
    body: "Every node sees the same lineage, so a Veo shot matches the logo matches the scene. Brand integrity, end to end.",
  },
];
