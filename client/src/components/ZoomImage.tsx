import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
  zoomScale?: number;
}

export default function ZoomImage({
  src,
  alt,
  className = "",
  zoomScale = 1.5
}: ZoomImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPosition({ x, y });
    setIsOpen(true);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        onClick={handleImageClick}
        data-testid="zoomable-image"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
            data-testid="zoom-overlay"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover-elevate active-elevate-2 z-10"
              data-testid="button-close-zoom"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.5,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
              className="relative max-w-7xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={src}
                alt={alt}
                className="w-full h-full object-contain cursor-zoom-out"
                style={{
                  transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
                }}
                initial={{ scale: 1 }}
                whileHover={{ scale: zoomScale }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                onClick={() => setIsOpen(false)}
                data-testid="zoomed-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
