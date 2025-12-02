"use client";

import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TestimonialsSectionProps {

  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({ 
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, 
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={cn(
      "bg-background text-foreground py-8 sm:py-20 md:py-28 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
              
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Have to Say</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                  Comprehensive adventure services designed to give you the most authentic and memorable Himalayan experience.
                </p>
              </motion.div>

        {/* Scrolling Row */}
        <div className="relative w-full overflow-hidden mt-8">
          <motion.div
            animate={controls}
            className="flex gap-8"
          >
            {loopTestimonials.map((testimonial, i) => (
              <div key={i} className="shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
