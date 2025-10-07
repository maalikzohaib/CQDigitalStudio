import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useParallax } from "@/hooks/useScrollAnimation";
import heroImage from "@assets/generated_images/Studio_hero_background_f49db05f.png";
import FlipCard from "@/components/FlipCard";
import weddingImage from "@assets/generated_images/Wedding_portfolio_sample_1f6f9bd5.png";
import eventImage from "@assets/generated_images/Event_portfolio_sample_f4a5e768.png";
import portraitImage from "@assets/generated_images/Portrait_portfolio_sample_63794526.png";
import productImage from "@assets/generated_images/Product_portfolio_sample_6fc4bba1.png";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 0.3);

  const flipCards = [
    {
      image: { src: weddingImage, alt: "Wedding Photography" },
      title: "Weddings",
      description: "Capturing love stories",
    },
    {
      image: { src: eventImage, alt: "Event Photography" },
      title: "Events",
      description: "Professional coverage",
    },
    {
      image: { src: portraitImage, alt: "Portrait Photography" },
      title: "Portraits",
      description: "Stunning headshots",
    },
    {
      image: { src: productImage, alt: "Product Photography" },
      title: "Products",
      description: "Commercial excellence",
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cinematic Stories
              <br />
              <span className="text-primary">Through Lens</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-12 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional photography and videography services that capture your most precious moments with artistic excellence
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
            data-testid="flipcard-container"
          >
            <FlipCard
              cards={flipCards}
              cardWidth={280}
              cardHeight={380}
              stackOffset={10}
              stackRotation={3}
              dragThreshold={80}
              borderRadius={16}
              shadowIntensity={0.3}
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
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
