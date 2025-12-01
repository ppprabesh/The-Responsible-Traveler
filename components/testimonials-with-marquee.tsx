"use client";

import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({ 
  title,
  description,
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
      "bg-background text-foreground py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

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
