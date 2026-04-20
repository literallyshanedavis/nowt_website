import type { ReactNode } from "react";
import { AppleGlyph } from "./AppleGlyph";

type Common = {
  children: ReactNode;
  className?: string;
  glyphClassName?: string;
};

type AsLink = Common & {
  as?: "a";
  href: string;
};

type AsButton = Common & {
  as: "button";
  type?: "submit" | "button";
  disabled?: boolean;
};

type Props = AsLink | AsButton;

const BASE =
  "inline-flex items-center gap-2 rounded-full font-medium bg-fg text-[#141414] hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

export function PrimaryCTA(props: Props) {
  const {
    children,
    className = "px-[22px] py-[13px] text-sm",
    glyphClassName = "w-[14px] h-[14px] -mt-[1px]",
  } = props;

  const content = (
    <>
      <AppleGlyph className={glyphClassName} />
      {children}
    </>
  );

  if (props.as === "button") {
    return (
      <button
        type={props.type ?? "button"}
        disabled={props.disabled}
        className={`${BASE} ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <a href={props.href} className={`${BASE} ${className}`}>
      {content}
    </a>
  );
}
