"use client"

import { motion } from "framer-motion"

export function PackagesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/prayerflaglangtang.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm uppercase tracking-widest text-secondary mb-4"
        >
          Find Your Adventure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
        >
          Our Packages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg text-primary-foreground/90 leading-relaxed"
        >
          From gentle cultural explorations to challenging summit expeditions,
          discover the perfect adventure for your skill level and interests.
        </motion.p>
      </div>
    </section>
  )
}
