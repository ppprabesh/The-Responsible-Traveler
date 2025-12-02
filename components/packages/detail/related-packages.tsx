"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import type { Package, PackageCategory } from "@/lib/packages-data"
import { motion } from "framer-motion"
import { PackageCard } from "@/components/package-card"

interface RelatedPackagesProps {
  packages: Package[]
  currentCategory: PackageCategory
}

const categoryLabels: Record<PackageCategory, string> = {
  trekking: "Trekking",
  climbing: "Climbing",
  hiking: "Hiking",
  discovery: "Discovery",
  cultural: "Cultural",
  cycling: "Cycling",
}

export function RelatedPackages({ packages, currentCategory }: RelatedPackagesProps) {
  if (packages.length === 0) return null

  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-3">More Adventures</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Related {categoryLabels[currentCategory]} Packages
            </h2>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0 bg-transparent">
            <Link href={`/packages#${currentCategory}`}>
              View All {categoryLabels[currentCategory]}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
