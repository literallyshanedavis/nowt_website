import type { NodeDef } from "./types";

export function Node({
  node,
  animationDelay,
}: {
  node: NodeDef;
  animationDelay?: number;
}) {
  const state = node.state ?? "idle";
  const pillClass =
    state === "done"
      ? "pill-done"
      : state === "running"
        ? "pill-running"
        : "";
  const pillLabel =
    state === "done"
      ? "Done"
      : state === "running"
        ? "Running"
        : state === "queued"
          ? "Queued"
          : "Idle";
  const bodyLines = (node.body ?? "").split("\n");

  return (
    <div
      className={`node node-${node.type} node-${state}`}
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        animationDelay: animationDelay ? `${animationDelay}s` : undefined,
      }}
    >
      <div className="node-head">
        <span className="swatch" />
        {node.title}
      </div>
      {node.type === "image" || node.type === "video" ? (
        <div className="node-preview" />
      ) : (
        <div className="node-body">
          {bodyLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < bodyLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </div>
      )}
      <div className="node-foot">
        <span className={`pill ${pillClass}`}>{pillLabel}</span>
        {node.model ? (
          <span style={{ color: "var(--color-fg-mute)" }}>{node.model}</span>
        ) : null}
      </div>
      <span className="port port-in" />
      <span className={`port port-out ${state === "running" ? "port-lit" : ""}`} />
    </div>
  );
}
