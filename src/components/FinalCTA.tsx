"use client";

import { useActionState } from "react";
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
      className="studio-final relative overflow-hidden border-t border-line px-6 pb-20 pt-[clamp(110px,14vw,210px)] text-center"
    >
      <div
        aria-hidden
        className="studio-final-glow pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
      />
      <div className="relative z-[2] mx-auto max-w-[1180px]">
        <p className="studio-kicker">Early access</p>
        <h2>thirtyseven is opening up.</h2>
        <p className="mx-auto mb-8 max-w-[560px] text-[18px] leading-[1.55] text-fg-dim">
          Get first word when the next TestFlight batch is ready.
        </p>
        {state.status !== "success" ? (
          <>
            <form
              action={formAction}
              className="mb-3.5 inline-flex flex-wrap justify-center gap-2.5"
            >
              <input
                type="email"
                name="email"
                required
                disabled={pending}
                maxLength={254}
                placeholder="your@email.com"
                className="min-w-[260px] rounded-full border border-line-strong bg-[var(--color-tint-lo)] px-5 py-3 text-[13.5px] text-fg outline-none transition-colors focus:border-accent disabled:opacity-60"
              />
              <PrimaryCTA
                as="button"
                type="submit"
                disabled={pending}
                className="px-5 py-3 text-[13.5px]"
                glyphClassName="w-[13px] h-[13px] -mt-[1px]"
              >
                {pending ? "Sending..." : "Notify me"}
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
            You&apos;re on the list. We&apos;ll be in touch.
          </div>
        )}
        <div className="font-mono text-[11px] tracking-[0.1em] text-fg-mute uppercase">
          No spam · unsubscribe anytime · iPadOS 18+
        </div>
      </div>
    </section>
  );
}
