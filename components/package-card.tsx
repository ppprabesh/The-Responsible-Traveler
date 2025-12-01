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

          <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {pkg.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Mountain className="h-4 w-4 text-primary" />
              {pkg.maxAltitude}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              {pkg.groupSize} people
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-primary" />
              {pkg.bestSeason}
            </span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-xl font-bold text-primary">${pkg.price.toLocaleString()}</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" asChild>
                <Link href="/contact">Inquire</Link>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
