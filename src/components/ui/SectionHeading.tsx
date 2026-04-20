import type { ReactNode } from "react";

export function SectionHeading({
  children,
  accent,
  sizeClamp = "clamp(34px, 5vw, 64px)",
}: {
  children: ReactNode;
  accent: ReactNode;
  sizeClamp?: string;
}) {
  return (
    <h2
      className="font-sans font-normal leading-[1.02] tracking-[-0.04em] m-0 mb-[18px] text-balance"
      style={{ fontSize: sizeClamp }}
    >
      {children}{" "}
      <em
        className="text-accent not-italic"
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
      >
        {accent}
      </em>
    </h2>
  );
}
