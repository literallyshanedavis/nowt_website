export type NodeState = "idle" | "queued" | "running" | "done";
export type NodeType = "text" | "image" | "video" | "audio";

export type NodeDef = {
  id: string;
  type: NodeType;
  x: number;
  y: number;
  title: string;
  body?: string;
  model?: string;
  state?: NodeState;
};

export type EdgeDef = readonly [from: string, to: string];
