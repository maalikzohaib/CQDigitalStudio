import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { ImageTrail } from "@/components/ui/image-trail";

export default function Hero() {
  const trailContainerRef = useRef<HTMLDivElement>(null);

  // Photography-related images from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
  ].map(url => `${url}?auto=format&fit=crop&w=300&q=80`);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={trailContainerRef}>
      {/* Image Trail Effect */}
      <div className="absolute inset-0 z-0">
        <ImageTrail containerRef={trailContainerRef}>
          {images.map((url, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-24 h-24 rounded-lg"
            >
              <img
                src={url}
                alt={`Photography ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background z-[1]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-6 leading-tight select-none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              CQ DIGITAL
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional photography and videography services that capture your most precious moments with artistic excellence
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/portfolio">
                <Button size="lg" className="min-h-12 px-8" data-testid="button-view-portfolio">
                  View Portfolio
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="min-h-12 px-8 backdrop-blur-md bg-background/20" 
                  data-testid="button-get-quote"
                >
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ChevronDown className="w-8 h-8 text-primary" data-testid="icon-scroll" />
      </motion.div>
    </div>
  );
}
