"use client";

import { useEffect, useRef, useState } from "react";
import { Node } from "./Node";
import type { NodeDef, EdgeDef } from "./types";

const NODE_WIDTH = 180;

export function NodeCanvas({
  nodes,
  edges,
  className,
  flow = true,
}: {
  nodes: NodeDef[];
  edges: readonly EdgeDef[];
  className?: string;
  flow?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const byId = new Map(nodes.map((n) => [n.id, n]));

  type EdgeState = "idle" | "flow" | "done";
  const paths = edges
    .map(([fromId, toId], idx) => {
      const a = byId.get(fromId);
      const b = byId.get(toId);
      if (!a || !b || size.width === 0) return null;
      const ax = (a.x / 100) * size.width + NODE_WIDTH / 2 - 4;
      const ay = (a.y / 100) * size.height;
      const bx = (b.x / 100) * size.width - NODE_WIDTH / 2 + 4;
      const by = (b.y / 100) * size.height;
      const cx = (ax + bx) / 2;
      const d = `M ${ax} ${ay} C ${cx} ${ay}, ${cx} ${by}, ${bx} ${by}`;
      const edgeState: EdgeState =
        b.state === "running"
          ? "flow"
          : b.state === "done"
            ? "done"
            : "idle";
      return { d, edgeState, idx };
    })
    .filter(
      (p): p is { d: string; edgeState: EdgeState; idx: number } => p !== null,
    );

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${size.width || 1} ${size.height || 1}`}
        preserveAspectRatio="none"
      >
        {paths.map(({ d, edgeState, idx }) => (
          <g key={idx}>
            <path
              d={d}
              className={edgeState === "idle" ? "edge" : "edge edge-lit"}
            />
            {edgeState === "flow" && flow ? (
              <path
                d={d}
                className="edge-dash"
                style={{ animationDelay: `${idx * 0.3}s` }}
              />
            ) : null}
          </g>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <Node key={n.id} node={n} animationDelay={i * 0.1} />
      ))}
    </div>
  );
}
