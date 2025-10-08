import { createContext, useContext, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

interface CursorContextType {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

interface CursorProviderProps {
  children: React.ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <CursorContext.Provider value={{ isActive, setIsActive, content, setContent }}>
      {children}
      <AnimatePresence>
        {isActive && content && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </CursorContext.Provider>
  );
}

interface CursorFollowProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function CursorFollow({ children, content, className }: CursorFollowProps) {
  const context = useContext(CursorContext);
  const elementRef = useRef<HTMLDivElement>(null);

  if (!context) {
    throw new Error("CursorFollow must be used within CursorProvider");
  }

  const { setIsActive, setContent } = context;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      setIsActive(true);
      setContent(content);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setContent(null);
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [content, setIsActive, setContent]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}