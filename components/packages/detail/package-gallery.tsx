"use client"

import Image from "next/image"
import type { Package } from "@/lib/packages-data"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, Images } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PackageGalleryProps {
  pkg: Package
}

export function PackageGallery({ pkg }: PackageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  if (!pkg.gallery || pkg.gallery.length === 0) return null

  const INITIAL_DISPLAY = 6
  const hasMore = pkg.gallery.length > INITIAL_DISPLAY
  const displayedImages = showAll ? pkg.gallery : pkg.gallery.slice(0, INITIAL_DISPLAY)
  const remainingCount = pkg.gallery.length - INITIAL_DISPLAY

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? pkg.gallery!.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === pkg.gallery!.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      <section className="py-20 bg-linear-to-b from-background via-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Images className="h-4 w-4" />
              <span>Visual Journey</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Trip Gallery</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Explore stunning moments from this incredible adventure
            </p>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {displayedImages.map((image, index) => {
              // Create varied sizes for visual interest
              const isLarge = index === 0 || index === 5
              const isTall = index === 2

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    relative group cursor-pointer overflow-hidden rounded-xl
                    ${isLarge ? "col-span-2 row-span-2" : ""}
                    ${isTall ? "row-span-2" : ""}
                    ${!isLarge && !isTall ? "aspect-square" : "aspect-auto min-h-[200px] md:min-h-[280px]"}
                  `}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${pkg.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="h-5 w-5 text-foreground" />
                    </div>
                  </div>

                  {/* Image Number Badge */}
                  <div className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1} / {pkg.gallery!.length}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Show More / Show Less Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="group font-semibold  rounded-full px-8 border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                {showAll ? (
                  <>Show Less</>
                ) : (
                  <>
                    View All Photos
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      +{remainingCount}
                    </span>
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={pkg.gallery![selectedImage] || "/placeholder.svg"}
                alt={`${pkg.title} gallery image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              {selectedImage + 1} / {pkg.gallery!.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4">
              {pkg.gallery!.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(index)
                  }}
                  className={`
                    relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200
                    ${
                      selectedImage === index
                        ? "ring-2 ring-white ring-offset-2 ring-offset-black/50 scale-110"
                        : "opacity-50 hover:opacity-100"
                    }
                  `}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
