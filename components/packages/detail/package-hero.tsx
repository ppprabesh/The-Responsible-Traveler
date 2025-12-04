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
 
    A: "bg-red-600",
    B: "bg-green-500",
    C: "bg-orange-500",
    D: "bg-blue-500",
    E: "bg-yellow-500",
  }

  return (
    <section className="w-full ">
      
      <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh]">
        <Image
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        
      </div>

     
      <div className="relative  z-10 mx-auto max-w-7xl px-6 lg:px-8 py-4 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex gap-2"><h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground  ">{pkg.title}</h1>
          <Badge className={`${difficultyColors[pkg.difficulty]} w-6 h-6 text-white text-lg p-4 mb-2`}>{pkg.difficulty}</Badge></div>
          
        </motion.div>
      </div>
    </section>
  )
}
