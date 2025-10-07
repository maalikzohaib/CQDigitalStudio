import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import { Camera, Video, Users, Package } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import weddingImage from "@assets/generated_images/Wedding_portfolio_sample_1f6f9bd5.png";
import eventImage from "@assets/generated_images/Event_portfolio_sample_f4a5e768.png";
import portraitImage from "@assets/generated_images/Portrait_portfolio_sample_63794526.png";
import productImage from "@assets/generated_images/Product_portfolio_sample_6fc4bba1.png";

export default function Home() {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Capture your special day with stunning imagery that tells your unique love story.",
    },
    {
      icon: Video,
      title: "Cinematic Videography",
      description: "Create lasting memories with professionally crafted cinematic videos.",
    },
    {
      icon: Users,
      title: "Event Coverage",
      description: "Professional photography and videography for corporate and social events.",
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

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate moments to grand celebrations, we bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning photography and videography
            </p>
          </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
