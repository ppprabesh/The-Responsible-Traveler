"use client"

import { Users, Mountain, Award, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Travelers" },
  { icon: Mountain, value: "150+", label: "Successful Treks" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "50+", label: "Destinations" },
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center group">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <p className="font-serif text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
