"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  { src: "/photo2.jpg", alt: "Mount Everest at sunrise", tall: true },
  { src: "/photo2.jpg", alt: "Sherpa porter on trek", tall: false },
  { src: "/photo2.jpg", alt: "Buddhist monastery", tall: false },
  { src: "/photo2.jpg", alt: "Annapurna range", tall: true },
  { src: "/photo2.jpg", alt: "Traditional village", tall: false },
  { src: "/photo2.jpg", alt: "Suspension bridge crossing", tall: false },
]

export function GallerySection() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Moments From the Mountains
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            A glimpse into the breathtaking landscapes and unforgettable experiences awaiting you.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                image.tall ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${image.tall ? "h-[300px] md:h-[360px]" : "h-[180px] md:h-[220px]"}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent flex items-end p-4"
              >
                <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
