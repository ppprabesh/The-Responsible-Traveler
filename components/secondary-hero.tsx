"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "100%", label: "Local Guides & Staff" },
  { value: "$50K+", label: "Donated to Communities" },
  { value: "Zero", label: "Single-Use Plastics" },
  { value: "10+", label: "Schools Supported" },
]

export function SecondaryHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
       style={{
  backgroundImage: "url('/herosection/peak1.jpg')",
}}

      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-secondary mb-4">Responsible Tourism</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Travel With Purpose, Leave a Positive Impact
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              We believe in travel that enriches both the traveler and the destination. Our sustainable practices
              support local communities, preserve cultural heritage, and protect the pristine Himalayan environment for
              future generations.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/about">
                  Learn About Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 ${index % 2 === 1 ? "mt-8" : ""}`}
              >
                <p className="font-serif text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
