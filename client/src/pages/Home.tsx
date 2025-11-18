import Hero from "@/components/Hero";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { TestimonialsColumnsDemo } from "@/components/ui/testimonials-columns-demo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { ServicesSlideshow } from "@/components/ServicesSlideshow";
import { PricingPlans } from "@/components/PricingPlans";

export default function Home() {
  useScrollAnimation();

  return (
    <div>
      <Hero />
      
      <ServicesSlideshow />

      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="py-12"
        >
          <div className="px-6">
            <h3 className="text-3xl font-display font-semibold text-foreground text-center mb-4">
              Why We Choose Us
            </h3>
            <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-10">
              Discover the reasons brands and couples trust CQ Digital Studio to tell their stories.
            </p>
            <GlowingEffectDemo />
          </div>
        </motion.div>
      </section>

      <PricingPlans />

      <TestimonialsColumnsDemo />
    </div>
  );
}
