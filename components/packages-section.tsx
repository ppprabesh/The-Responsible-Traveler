"use client"

import { PackageCard } from "./package-card"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackagesSectionProps {
  title: string
  description: string
  packages: Package[]
  id: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function PackagesSection({ title, description, packages, id }: PackagesSectionProps) {
  if (packages.length === 0) return null

  return (
    <section id={id} className="mb-16 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {packages.map((pkg) => (
          <motion.div key={pkg.id} variants={cardVariants}>
            <PackageCard pkg={pkg} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
