import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";
import CircularGallery from "@/components/CircularGallery";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import weddingImage from "@assets/generated_images/Wedding_portfolio_sample_1f6f9bd5.png";
import eventImage from "@assets/generated_images/Event_portfolio_sample_f4a5e768.png";
import portraitImage from "@assets/generated_images/Portrait_portfolio_sample_63794526.png";
import productImage from "@assets/generated_images/Product_portfolio_sample_6fc4bba1.png";

export default function Home() {
  useScrollAnimation();
  
  const galleryItems = [
    { image: weddingImage, text: "Wedding Photography" },
    { image: eventImage, text: "Corporate Events" },
    { image: portraitImage, text: "Portrait Sessions" },
    { image: productImage, text: "Product Photography" },
    { 
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop", 
      text: "Fashion Portraits" 
    },
    { 
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop", 
      text: "Event Coverage" 
    },
    { 
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop", 
      text: "Bridal Moments" 
    },
    { 
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop", 
      text: "Corporate Headshots" 
    },
    { 
      image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&h=600&fit=crop", 
      text: "Conference Photography" 
    },
    { 
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=600&fit=crop", 
      text: "Lifestyle Photography" 
    },
  ];

  const portfolioItems = [
    { image: weddingImage, title: "Sarah & Michael's Wedding", category: "Wedding" },
    { image: eventImage, title: "Tech Summit 2024", category: "Event" },
    { image: portraitImage, title: "Executive Portraits", category: "Portrait" },
    { image: productImage, title: "Luxury Product Line", category: "Product" },
  ];

  return (
    <div>
      <Hero />

      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="py-24"
        >
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our stunning collection of photography and videography work
            </p>
          </div>
          <CircularGallery 
            items={galleryItems}
            bend={2.5}
            textColor="#ffffff"
            borderRadius={0.02}
            font="bold 24px Figtree"
            scrollSpeed={2.5}
            scrollEase={0.08}
          />
        </motion.div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-scroll-animation="fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning photography and videography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.title} {...item} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" data-testid="button-view-full-portfolio">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div data-scroll-animation="scale">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's create something extraordinary together. Contact us today for a free consultation.
            </p>
            <Link href="/contact">
              <Button size="lg" className="min-h-12 px-8" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
