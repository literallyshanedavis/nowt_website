import type { NodeDef, EdgeDef } from "@/components/canvas/types";

export const heroNodes: NodeDef[] = [
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

export const heroEdges: readonly EdgeDef[] = [
  ["brief", "dir"],
  ["mood", "dir"],
  ["dir", "logo"],
  ["dir", "hero"],
];

export const heroNodesMobile: NodeDef[] = [
  {
    id: "brief",
    type: "text",
    x: 24,
    y: 18,
    title: "Brand Brief",
    body: "Artisan botanical",
    state: "done",
  },
  {
    id: "dir",
    type: "text",
    x: 50,
    y: 82,
    title: "Art Direction",
    body: "Claude Sonnet",
    state: "running",
  },
  {
    id: "hero",
    type: "image",
    x: 76,
    y: 18,
    title: "Hero Render",
    state: "queued",
  },
];

export const heroEdgesMobile: readonly EdgeDef[] = [
  ["brief", "dir"],
  ["dir", "hero"],
];
