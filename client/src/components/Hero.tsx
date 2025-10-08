import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { CursorProvider, CursorFollow } from "@/components/ui/animated-cursor";

export default function Hero() {
  const [scope, animate] = useAnimate();

  // Photography portfolio images from Unsplash
  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2400&auto=format&fit=crop",
      title: "Wedding Photography",
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
      title: "Event Photography", 
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2400&auto=format&fit=crop",
      title: "Wedding Moments",
    },
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2400&auto=format&fit=crop",
      title: "Portrait Session",
    },
    {
      url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2400&auto=format&fit=crop",
      title: "Fashion Portrait",
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2400&auto=format&fit=crop",
      title: "Corporate Event",
    },
    {
      url: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2400&auto=format&fit=crop",
      title: "Product Photography",
    },
    {
      url: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=2400&auto=format&fit=crop",
      title: "Event Coverage",
    },
  ];

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, []);

  return (
    <CursorProvider>
      <div
        className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
        ref={scope}
      >
        <CursorFollow 
          className="absolute inset-0 z-10"
          content={
            <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm shadow-xl font-medium">
              Explore
            </div>
          }
        >
          {/* Empty div to capture hover events across the hero */}
        </CursorFollow>
        <motion.div
          className="z-50 text-center space-y-8 items-center flex flex-col px-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 1.5 }}
        >
        <div>
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            CQ DIGITAL
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            Cinematic Stories Through Lens
          </motion.p>
        </div>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          Professional photography and videography services that capture your most precious moments with artistic excellence
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
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
              className="min-h-12 px-8" 
              data-testid="button-get-quote"
            >
              Get a Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[0].url}
            alt={portfolioImages[0].title}
            className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[1].url}
            alt={portfolioImages[1].title}
            className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[2].url}
            alt={portfolioImages[2].title}
            className="w-28 h-40 md:w-40 md:h-52 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[3].url}
            alt={portfolioImages[3].title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[4].url}
            alt={portfolioImages[4].title}
            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[7].url}
            alt={portfolioImages[7].title}
            className="w-28 h-28 md:w-36 md:h-48 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[5].url}
            alt={portfolioImages[5].title}
            className="w-40 md:w-52 h-full object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={portfolioImages[6].url}
            alt={portfolioImages[6].title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 2.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ChevronDown className="w-8 h-8 text-primary" data-testid="icon-scroll" />
      </motion.div>
    </div>
    </CursorProvider>
  );
}