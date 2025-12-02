"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageIncludesProps {
  pkg: Package
}

export function PackageIncludes({ pkg }: PackageIncludesProps) {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">What's Covered</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Inclusions & Exclusions</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <X className="h-5 w-5" />
                  What's Not Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
