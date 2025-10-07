import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Camera, Video, Users, Package, Briefcase, Heart } from "lucide-react";

export default function Services() {
  const photographyServices = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture every precious moment of your special day with our comprehensive wedding photography packages.",
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Professional coverage for corporate events, conferences, and special occasions.",
    },
    {
      icon: Camera,
      title: "Portrait Photography",
      description: "Stunning portraits for individuals, families, and professional headshots.",
    },
    {
      icon: Package,
      title: "Product Photography",
      description: "High-quality product images perfect for e-commerce and marketing materials.",
    },
  ];

  const videographyServices = [
    {
      icon: Video,
      title: "Cinematic Wedding Films",
      description: "Create a timeless wedding film that captures the emotion and beauty of your celebration.",
    },
    {
      icon: Briefcase,
      title: "Commercial Videos",
      description: "Professional video production for brands, products, and advertising campaigns.",
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive photography and videography services tailored to your needs
            </p>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Photography Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {photographyServices.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Videography Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {videographyServices.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
