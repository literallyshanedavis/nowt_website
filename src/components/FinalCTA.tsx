"use client";

import { useActionState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionHeading } from "./ui/SectionHeading";
import { PrimaryCTA } from "./ui/PrimaryCTA";
import {
  joinWaitlist,
  type WaitlistState,
} from "@/app/actions/waitlist";

const INITIAL_STATE: WaitlistState = { status: "idle" };

export function FinalCTA() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    INITIAL_STATE,
  );

  return (
    <section
      id="final"
      className="relative text-center px-8 pt-[140px] pb-20 border-t border-line overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-[60%] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, var(--color-accent-soft), transparent 70%)",
        }}
      />
      <Reveal className="max-w-[1200px] mx-auto relative z-[2]">
        <SectionLabel>Soft launch · TestFlight</SectionLabel>
        <SectionHeading accent="runs." sizeClamp="clamp(44px, 8vw, 112px)">
          A canvas that
        </SectionHeading>
        <p className="text-fg-dim text-[18px] max-w-[560px] mx-auto mb-8 leading-[1.5]">
          We&apos;re rolling out invites weekly. Drop your email and we&apos;ll
          send you a TestFlight link in the next batch.
        </p>
        {state.status !== "success" ? (
          <>
            <form
              action={formAction}
              className="inline-flex gap-2.5 flex-wrap justify-center mb-3.5"
            >
              <input
                type="email"
                name="email"
                required
                disabled={pending}
                maxLength={254}
                placeholder="you@studio.com"
                className="px-5 py-2 bg-[var(--color-tint-lo)] border border-line-strong rounded-full text-fg text-[13.5px] min-w-[240px] outline-none focus:border-accent transition-colors disabled:opacity-60"
              />
              <PrimaryCTA
                as="button"
                type="submit"
                disabled={pending}
                className="px-5 py-2 text-[13.5px]"
                glyphClassName="w-[13px] h-[13px] -mt-[1px]"
              >
                {pending ? "Sending…" : "Request invite →"}
              </PrimaryCTA>
            </form>
            {state.status === "error" && (
              <div
                role="alert"
                className="inline-flex items-center gap-2 justify-center text-red-400 font-mono text-xs mb-3.5"
              >
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                {state.message}
              </div>
            )}
          </>
        ) : (
          <div className="inline-flex items-center gap-2 justify-center text-accent font-mono text-xs mb-3.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            You&apos;re in the queue — check your inbox within 7 days.
          </div>
        )}
        <div className="font-mono text-[11px] tracking-[0.1em] text-fg-mute uppercase">
          No spam · unsubscribe anytime · iPadOS 18+
        </div>
      </Reveal>
    </section>
  );
}
