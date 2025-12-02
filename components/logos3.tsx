"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  logos = [
    { id: "logo-1", description: "Logo 1", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg", className: "h-7 w-auto" },
    { id: "logo-2", description: "Logo 2", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg", className: "h-7 w-auto" },
    { id: "logo-3", description: "Logo 3", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg", className: "h-7 w-auto" },
    { id: "logo-4", description: "Logo 4", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg", className: "h-7 w-auto" },
    { id: "logo-5", description: "Logo 5", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg", className: "h-7 w-auto" },
    { id: "logo-6", description: "Logo 6", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg", className: "h-7 w-auto" },
    { id: "logo-7", description: "Logo 7", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg", className: "h-4 w-auto" },
    { id: "logo-8", description: "Logo 8", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg", className: "h-7 w-auto" },
  ],
}: Logos3Props) => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Partners
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
          Comprehensive adventure partnership designed to give you the most authentic and memorable Himalayan experience.
        </p>
      </motion.div>

      <div className="relative mx-auto flex items-center justify-center lg:max-w-[90%] overflow-x-hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true })]}
        >
          <CarouselContent className="ml-0 flex gap-6 overflow-visible">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 justify-center"
              >
                <div className="px-4 flex shrink-0 items-center justify-center">
                  <img src={logo.image} alt={logo.description} className={logo.className} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Side fade overlays */}
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-linear-to-r from-background to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-linear-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
};

export { Logos3 };
