"use client"

import Image from "next/image"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageGalleryProps {
  pkg: Package
}

export function PackageGallery({ pkg }: PackageGalleryProps) {
  if (!pkg.gallery || pkg.gallery.length === 0) return null

  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Visual Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Trip Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pkg.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${pkg.title} gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
