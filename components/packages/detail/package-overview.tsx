"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Utensils, Car, UserCheck, Activity } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageOverviewProps {
  pkg: Package
}

export function PackageOverview({ pkg }: PackageOverviewProps) {
  const details = [
    { icon: MapPin, label: "Start/End", value: `${pkg.startingPoint} / ${pkg.endingPoint}` },
    { icon: Home, label: "Accommodation", value: pkg.accommodation },
    { icon: Utensils, label: "Meals", value: pkg.meals },
    { icon: Car, label: "Transportation", value: pkg.transportation },
    { icon: UserCheck, label: "Min Age", value: `${pkg.minAge} years` },
    { icon: Activity, label: "Fitness Level", value: pkg.fitnessLevel },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{pkg.longDescription}</p>

            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Trip Highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {pkg.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="h-2 w-2 bg-primary rounded-full" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="bg-card border-border sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6 pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-1">From</p>
                  <p className="text-4xl font-bold text-primary">${pkg.price.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>

                <div className="space-y-4">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <detail.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{detail.label}</p>
                        <p className="text-sm text-foreground">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
