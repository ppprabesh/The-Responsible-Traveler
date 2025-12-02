"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, Mountain, Users } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageCardProps {
  pkg: Package
}

export function PackageCard({ pkg }: PackageCardProps) {
  const difficultyColors = {
    Easy: "bg-green-100 text-green-800",
    Moderate: "bg-yellow-100 text-yellow-800",
    Challenging: "bg-orange-100 text-orange-800",
    Extreme: "bg-red-100 text-red-800",
  }

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link href={`/packages/${pkg.id}`} className="block h-full">
        <Card className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 h-full">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={pkg.image || "/placeholder.svg"}
              alt={pkg.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <Badge className={`absolute top-4 left-4 ${difficultyColors[pkg.difficulty]}`}>{pkg.difficulty}</Badge>
          </div>
          <CardContent className="p-6">
            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2">{pkg.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>

            <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-lg bg-muted/50">
              <span className="flex items-center gap-1.5 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{pkg.duration}</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Mountain className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{pkg.maxAltitude}</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{pkg.groupSize} people</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{pkg.bestSeason}</span>
              </span>
            </div>

            <div className="flex items-center justify-center pt-4 border-t border-border">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button>View Details</Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
