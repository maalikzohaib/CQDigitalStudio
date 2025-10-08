import { useState, useEffect, useCallback, useRef } from "react";

interface RadiusOnScrollOptions {
  startRadius?: number;
  endRadius?: number;
  startPadding?: number;
  endPadding?: number;
  startTrigger?: "enter-top" | "enter-center" | "enter-bottom" | "exit-top" | "exit-center" | "exit-bottom";
  endTrigger?: "enter-top" | "enter-center" | "enter-bottom" | "exit-top" | "exit-center" | "exit-bottom";
  offset?: number;
  transformDistance?: number;
}

const getWindowHeight = () => typeof window !== "undefined" ? window.innerHeight : 1000;

const getTriggerPosition = (
  trigger: string,
  elementTop: number,
  elementHeight: number
) => {
  const windowHeight = getWindowHeight();
  switch (trigger) {
    case "enter-top":
      return elementTop - windowHeight;
    case "enter-center":
      return elementTop + elementHeight / 2 - windowHeight;
    case "enter-bottom":
      return elementTop + elementHeight - windowHeight;
    case "exit-top":
      return elementTop;
    case "exit-center":
      return elementTop + elementHeight / 2;
    case "exit-bottom":
      return elementTop + elementHeight;
    default:
      return elementTop - windowHeight;
  }
};

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function useRadiusOnScroll(options: RadiusOnScrollOptions = {}) {
  const {
    startRadius = 0,
    endRadius = 48,
    startPadding = 0,
    endPadding = 48,
    startTrigger = "enter-top",
    endTrigger = "exit-top",
    offset = 0,
    transformDistance = 100,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const computeRange = useCallback(() => {
    if (!containerRef.current) return [0, 1];

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const elementTop = rect.top + scrollTop;
    const elementHeight = rect.height;

    let s = getTriggerPosition(startTrigger, elementTop, elementHeight) + offset;
    let e = getTriggerPosition(endTrigger, elementTop, elementHeight) + offset;

    const dist = Math.abs(e - s);
    const adjusted = (dist * transformDistance) / 100;
    const center = (s + e) / 2;

    s = center - adjusted / 2;
    e = center + adjusted / 2;

    if (e <= s) e = s + 1;

    return [s, e];
  }, [startTrigger, endTrigger, offset, transformDistance]);

  useEffect(() => {
    let rafId: number | null = null;

    const tick = () => {
      const [s, e] = computeRange();
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const raw = (scrollTop - s) / (e - s);
      const target = clamp01(raw);

      setProgress(target);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [computeRange]);

  const currentRadius = Math.round(lerp(startRadius, endRadius, progress) * 100) / 100;
  const currentPadding = Math.round(lerp(startPadding, endPadding, progress) * 100) / 100;

  const containerStyle = {
    borderRadius: `${currentRadius}px`,
    padding: `${currentPadding}px`,
  };

  return {
    containerRef,
    progress,
    containerStyle,
    currentRadius,
    currentPadding,
  };
}
