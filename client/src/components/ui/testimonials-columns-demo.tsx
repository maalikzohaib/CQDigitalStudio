"use client";

import { motion } from "motion/react";

import { TestimonialsColumn } from "./testimonials-columns-1";

const testimonials = [
  {
    text: "CQ Digital Studio captured our Mehndi and Baraat with complete finesse. Every detail from the décor to the emotions felt timeless.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    name: "Ayesha Khan",
    role: "Bride",
  },
  {
    text: "Their team planned our Karachi product launch with precision. The visuals lifted our conversion numbers the very next week.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
    name: "Hamza Raza",
    role: "Brand Manager",
  },
  {
    text: "Lightning-fast edits and proactive communication made our corporate shoot in Lahore effortless.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    name: "Sara Qureshi",
    role: "Marketing Lead",
  },
  {
    text: "The drone and studio shots elevated our Gulberg property listings to a new level of luxury.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Bilal Siddiqui",
    role: "Creative Director",
  },
  {
    text: "CQ’s post-production was flawless. They delivered a polished fashion film for our Karachi campaign under a tight deadline.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
    name: "Nida Rehman",
    role: "Head of Content",
  },
  {
    text: "From concept to final delivery, the team listened and delivered exactly what our Islamabad launch needed.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    name: "Ahmed Farooq",
    role: "CMO",
  },
  {
    text: "Our social media engagement soared with the storytelling-focused reels they produced for our café opening.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    name: "Mahira Aslam",
    role: "Social Media Strategist",
  },
  {
    text: "They turned a hectic corporate retreat schedule into a seamless production with impressive results.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    name: "Usman Tariq",
    role: "Event Producer",
  },
  {
    text: "The cinematic edits tell our brand story beautifully. We have already booked them for our next Lahore campaign.",
    image: "https://images.unsplash.com/photo-1542157585-ef20bfcce89f?auto=format&fit=crop&w=200&q=80",
    name: "Hira Saeed",
    role: "Founder, Hira Studio",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsColumnsDemo() {
  return (
    <section className="relative my-20 bg-background">
      <div className="container mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center text-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Testimonials
            </div>
          </div>

          <h2 className="mt-5 text-xl font-bold tracking-tighter text-foreground sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            What our clients say
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Real feedback from couples, creators, and brands who trust CQ Digital Studio.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
