"use client"

import { Leaf, Heart, Users, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const values = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "We minimize our environmental footprint through waste reduction, renewable energy use, and conservation efforts in sensitive areas.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "We employ local guides and porters, source locally, and contribute directly to community development projects.",
  },
  {
    icon: Users,
    title: "Cultural Respect",
    description:
      "We educate travelers about local customs and ensure our tours support rather than exploit traditional cultures.",
  },
  {
    icon: Shield,
    title: "Safety Excellence",
    description:
      "All our guides are certified with extensive training in mountain rescue, first aid, and altitude sickness management.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ValuesSection() {
  return (
    <section id="sustainability" className="py-24 bg-muted scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">What We Stand For</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Every decision we make is guided by these core principles that define who we are and how we operate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={cardVariants}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-border bg-card h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <value.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
