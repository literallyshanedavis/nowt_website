"use client";

import { useEffect, useState, type RefObject } from "react";

export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  steps: number,
): { progress: number; step: number } {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) return;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      const idx = Math.min(steps - 1, Math.floor(p * steps));
      setProgress(p);
      setStep(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, steps]);

  return { progress, step };
}
