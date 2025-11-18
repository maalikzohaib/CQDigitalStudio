"use client";

import type { FC } from "react";
import React, { memo } from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn: FC<TestimonialsColumnProps> = memo(
  ({ className, testimonials, duration = 10 }) => {
    return (
      <div className={className}>
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex flex-col gap-6 pb-6 bg-background"
        >
          {Array.from({ length: 2 }).map((_, loopIndex) => (
            <React.Fragment key={loopIndex}>
              {testimonials.map(({ text, image, name, role }, index) => (
                <div
                  className="w-full max-w-xs rounded-3xl border p-10 shadow-lg shadow-primary/10"
                  key={`${loopIndex}-${index}`}
                >
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium leading-5 tracking-tight text-foreground">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight text-muted-foreground">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    );
  }
);

TestimonialsColumn.displayName = "TestimonialsColumn";
