"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Users, Calendar } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageHeroProps {
  pkg: Package
}

export function PackageHero({ pkg }: PackageHeroProps) {
  const difficultyColors = {
    Easy: "bg-green-500",
    Moderate: "bg-yellow-500",
    Challenging: "bg-orange-500",
    Extreme: "bg-red-500",
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end">
      <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative z-10 w-full pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className={`${difficultyColors[pkg.difficulty]} text-white mb-4`}>{pkg.difficulty}</Badge>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{pkg.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">{pkg.description}</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex flex-wrap gap-4 p-4 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-lg"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                <Mountain className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Max {pkg.maxAltitude}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">{pkg.groupSize} people</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">{pkg.bestSeason}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
