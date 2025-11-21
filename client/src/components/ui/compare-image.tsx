import { useState, useRef, useCallback, useEffect } from "react";

interface CompareImageProps {
  beforeImage: string;
  afterImage: string;
  background?: string;
  borderRadius?: number;
  imageRadius?: number;
  padding?: number;
  gap?: number;
  beforeLabel?: string;
  afterLabel?: string;
  labelStyles?: {
    beforeTextColor?: string;
    afterTextColor?: string;
    beforeBackgroundColor?: string;
    afterBackgroundColor?: string;
    beforeBorderRadius?: number;
    afterBorderRadius?: number;
    fontSize?: string;
  };
  className?: string;
}

export function CompareImage({
  beforeImage,
  afterImage,
  background = "#333",
  borderRadius = 24,
  imageRadius = 12,
  padding = 0,
  gap = 3,
  beforeLabel = "Before",
  afterLabel = "After",
  labelStyles = {},
  className = "",
}: CompareImageProps) {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultLabelStyles = {
    beforeTextColor: "white",
    afterTextColor: "white",
    beforeBackgroundColor: "rgba(0, 0, 0, 0.5)",
    afterBackgroundColor: "rgba(0, 0, 0, 0.5)",
    beforeBorderRadius: 8,
    afterBorderRadius: 8,
    fontSize: "14px",
    ...labelStyles,
  };

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    window.requestAnimationFrame(() => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerLeft = rect.left;
      const position = ((clientX - containerLeft) / rect.width) * 100;
      setDividerPosition(Math.max(0, Math.min(100, position)));
    });
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!isDragging) return;
      updatePosition(event.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent) => {
      if (!isDragging || !event.touches[0]) return;
      updatePosition(event.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  const renderImage = (
    src: string,
    alt: string,
    clipPath: string,
    extraStyles = {}
  ) => (
    <div
      style={{
        position: "absolute",
        width: `calc(100% - ${padding * 2}px)`,
        height: `calc(100% - ${padding * 2}px)`,
        clipPath: clipPath,
        ...extraStyles,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: `${imageRadius}px`,
          userSelect: "none",
          pointerEvents: "none",
        }}
        draggable={false}
      />
    </div>
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "400px",
        background: background,
        borderRadius: `${borderRadius}px`,
        overflow: "hidden",
        padding: `${padding}px`,
        boxSizing: "border-box",
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
    >
      {/* Before Image */}
      {renderImage(
        beforeImage,
        "Before",
        `polygon(0 0, ${dividerPosition}% 0, ${dividerPosition}% 100%, 0 100%)`
      )}

      {/* After Image */}
      {renderImage(
        afterImage,
        "After",
        `polygon(${dividerPosition}% 0, 100% 0, 100% 100%, ${dividerPosition}% 100%)`
      )}

      {/* Divider Line */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${dividerPosition}%`,
          width: `${gap}px`,
          height: "100%",
          background: "white",
          zIndex: 5,
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        {/* Divider Handle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            background: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            cursor: isDragging ? "grabbing" : "grab",
            pointerEvents: "auto",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
            <line x1="12" y1="2" x2="12" y2="22" />
          </svg>
        </div>
      </div>

      {/* Before Label */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          background: defaultLabelStyles.beforeBackgroundColor,
          padding: "8px 16px",
          borderRadius: `${defaultLabelStyles.beforeBorderRadius}px`,
          fontSize: defaultLabelStyles.fontSize,
          color: defaultLabelStyles.beforeTextColor,
          zIndex: 6,
          backdropFilter: "blur(10px)",
          fontWeight: 600,
          userSelect: "none",
        }}
      >
        {beforeLabel}
      </div>

      {/* After Label */}
      <div
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          background: defaultLabelStyles.afterBackgroundColor,
          padding: "8px 16px",
          borderRadius: `${defaultLabelStyles.afterBorderRadius}px`,
          fontSize: defaultLabelStyles.fontSize,
          color: defaultLabelStyles.afterTextColor,
          zIndex: 6,
          backdropFilter: "blur(10px)",
          fontWeight: 600,
          userSelect: "none",
        }}
      >
        {afterLabel}
      </div>
    </div>
  );
}
