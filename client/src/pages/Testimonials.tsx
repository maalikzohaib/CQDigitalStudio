import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      rating: 5,
      content: "CQ Digital Studio captured our wedding day perfectly! The photos are absolutely stunning and we couldn't be happier with the results. They made us feel so comfortable throughout the entire process.",
    },
    {
      name: "Michael Chen",
      role: "CEO, TechStart Inc.",
      rating: 5,
      content: "Professional, creative, and reliable. The team delivered exceptional corporate event coverage that exceeded our expectations. Highly recommended for any business needs.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      rating: 5,
      content: "The product photography they created for our brand was phenomenal. Every shot was perfectly lit and composed. Our sales increased by 40% after using their images.",
    },
    {
      name: "David Thompson",
      role: "Groom",
      rating: 5,
      content: "Our wedding video is a masterpiece! The cinematic quality and storytelling brought tears to our eyes. Worth every penny and more. Thank you CQ Digital Studio!",
    },
    {
      name: "Lisa Martinez",
      role: "Event Coordinator",
      rating: 5,
      content: "I've worked with many photographers, but CQ Digital Studio stands out. Their attention to detail and ability to capture candid moments is unmatched. Always my first choice.",
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      rating: 5,
      content: "Professional headshots and team photos that truly represent our brand. The team was efficient, friendly, and the results were delivered quickly. Absolutely fantastic!",
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
              What Our <span className="text-primary">Clients Say</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with CQ Digital Studio.
            </p>
          </motion.div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
              ))}
            </div>
          </div>

          <div className="lg:hidden max-w-2xl mx-auto px-12">
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.name}>
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
