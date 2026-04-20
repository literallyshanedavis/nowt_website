"use client";

import { useActionState } from "react";
import { Reveal } from "./Reveal";
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
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute mb-[18px] before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-[2px]">
          Soft launch · TestFlight
        </div>
        <h2
          className="font-sans font-normal leading-[1.02] tracking-[-0.04em] m-0 mb-[18px] text-balance"
          style={{ fontSize: "clamp(44px, 8vw, 112px)" }}
        >
          A canvas that{" "}
          <em
            className="text-accent not-italic"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            runs.
          </em>
        </h2>
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
                className="px-5 py-2 bg-white/[0.04] border border-line-strong rounded-full text-fg text-[13.5px] min-w-[240px] outline-none focus:border-accent transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center gap-2 px-5 py-2 bg-fg text-[#141414] rounded-full font-medium text-[13.5px] hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 384 512"
                  className="w-[13px] h-[13px] -mt-[1px]"
                  fill="currentColor"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                {pending ? "Sending…" : "Request invite →"}
              </button>
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
