import { useRef, useState, useEffect, useCallback } from "react";

interface RadiusOnScrollProps {
  imageUrl?: string;
  startRadius?: number;
  endRadius?: number;
  startPadding?: number;
  endPadding?: number;
  startTrigger?: "enter-top" | "enter-center" | "enter-bottom" | "exit-top" | "exit-center" | "exit-bottom";
  endTrigger?: "enter-top" | "enter-center" | "enter-bottom" | "exit-top" | "exit-center" | "exit-bottom";
  offset?: number;
  transformDistance?: number;
  children?: React.ReactNode;
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

export default function RadiusOnScroll({
  imageUrl,
  startRadius = 0,
  endRadius = 48,
  startPadding = 0,
  endPadding = 48,
  startTrigger = "enter-top",
  endTrigger = "exit-top",
  offset = 0,
  transformDistance = 100,
  children,
}: RadiusOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement>(null);
  const [progress, setProgress] = useState(0);
  const [wrapperSize, setWrapperSize] = useState({ w: 0, h: 0 });
  const [mediaNatural, setMediaNatural] = useState({ w: 0, h: 0 });

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

  const latestProgressRef = useRef(progress);

  useEffect(() => {
    let rafId: number | null = null;

    const tick = () => {
      const [s, e] = computeRange();
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const raw = (scrollTop - s) / (e - s);
      const target = clamp01(raw);

      if (Math.abs(target - latestProgressRef.current) > 0.001) {
        latestProgressRef.current = target;
        setProgress(target);
      }

      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        if (rect.width !== wrapperSize.w || rect.height !== wrapperSize.h) {
          setWrapperSize({ w: rect.width, h: rect.height });
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [computeRange, wrapperSize.w, wrapperSize.h]);

  const currentRadius = Math.round(lerp(startRadius, endRadius, progress) * 100) / 100;
  const currentPaddingTop = lerp(startPadding, endPadding, progress);
  const currentPaddingRight = lerp(startPadding, endPadding, progress);
  const currentPaddingBottom = lerp(startPadding, endPadding, progress);
  const currentPaddingLeft = lerp(startPadding, endPadding, progress);

  const borderRadiusStyle = `${currentRadius}px`;

  const getMediaContainerStyle = () => {
    return {
      position: "absolute" as const,
      top: currentPaddingTop,
      right: currentPaddingRight,
      bottom: currentPaddingBottom,
      left: currentPaddingLeft,
      overflow: "hidden",
      width: `calc(100% - ${currentPaddingLeft + currentPaddingRight}px)`,
      height: `calc(100% - ${currentPaddingTop + currentPaddingBottom}px)`,
      borderRadius: "inherit",
    };
  };

  const mediaContainerStyle = getMediaContainerStyle();

  const computeMediaStyle = () => {
    const baseStyle = {
      position: "absolute" as const,
      display: "block",
      borderRadius: "inherit",
    };

    if (!wrapperSize.w || !wrapperSize.h || !mediaNatural.w || !mediaNatural.h) {
      return {
        ...baseStyle,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
      };
    }

    const containerW = wrapperSize.w - currentPaddingLeft - currentPaddingRight;
    const containerH = wrapperSize.h - currentPaddingTop - currentPaddingBottom;

    if (containerW <= 0 || containerH <= 0) {
      return { ...baseStyle, display: "none" };
    }

    const scale = Math.max(containerW / mediaNatural.w, containerH / mediaNatural.h);
    const scaledW = mediaNatural.w * scale;
    const scaledH = mediaNatural.h * scale;

    return {
      ...baseStyle,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: scaledW,
      height: scaledH,
      objectFit: "cover" as const,
    };
  };

  const mediaStyle = computeMediaStyle();

  return (
    <div
      ref={containerRef}
      style={{
        boxSizing: "border-box",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: borderRadiusStyle,
      }}
      data-testid="radius-scroll-container"
    >
      <div
        ref={wrapperRef}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: "hidden",
          borderRadius: "inherit",
        }}
      >
        <div style={mediaContainerStyle}>
          {imageUrl && (
            <img
              ref={mediaRef}
              src={imageUrl}
              alt=""
              onLoad={(e) =>
                setMediaNatural({
                  w: e.currentTarget.naturalWidth,
                  h: e.currentTarget.naturalHeight,
                })
              }
              draggable={false}
              style={mediaStyle}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
