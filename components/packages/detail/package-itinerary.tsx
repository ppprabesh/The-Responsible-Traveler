"use client"
import { Button } from "@/components/ui/button"
import { Download, MapPin } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageItineraryProps {
  pkg: Package
}

function getShortSummary(description: string): string {
  const firstSentence = description.split(".")[0]
  if (firstSentence.length <= 60) {
    return firstSentence + "."
  }
  return firstSentence.substring(0, 57) + "..."
}

export function PackageItinerary({ pkg }: PackageItineraryProps) {
  const handleDownloadItinerary = () => {
    let content = `${pkg.title}\n${"=".repeat(pkg.title.length)}\n\n`
    content += `Duration: ${pkg.duration}\n`
    content += `Maximum Altitude: ${pkg.maxAltitude}\n`
    content += `Group Size: ${pkg.groupSize} people\n`
    content += `Best Season: ${pkg.bestSeason}\n`
    content += `Difficulty: ${pkg.difficulty}\n\n`
    content += `DESCRIPTION\n${"-".repeat(11)}\n${pkg.longDescription || pkg.description}\n\n`
    content += `DETAILED ITINERARY\n${"=".repeat(18)}\n\n`

    pkg.itinerary.forEach((day) => {
      content += `Day ${day.day}: ${day.title}\n`
      if (day.altitude) content += `Altitude: ${day.altitude}\n`
      content += `${day.description}\n\n`
    })

    content += `\nWHAT'S INCLUDED\n${"-".repeat(15)}\n`
    pkg.includes.forEach((item) => {
      content += `• ${item}\n`
    })

    content += `\nWHAT'S NOT INCLUDED\n${"-".repeat(19)}\n`
    pkg.excludes.forEach((item) => {
      content += `• ${item}\n`
    })

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${pkg.id}-complete-itinerary.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section className="py-20 bg-linear-to-b from-background via-muted/20 to-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Trip Itinerary</h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-12 bg-primary/40" />
            <p className="text-muted-foreground text-sm tracking-wide">{pkg.duration} Journey</p>
            <span className="h-px w-12 bg-primary/40" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-[31px] top-4 bottom-4 w-0.5 bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full" />

          <div className="space-y-3">
            {pkg.itinerary.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className="relative flex items-center gap-5 md:gap-6 group"
              >
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
                    <div className="text-center">
                      <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Day</span>
                      <p className="text-sm md:text-lg font-bold text-foreground -mt-0.5">{day.day}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 py-3 px-5 md:py-4 md:px-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 group-hover:bg-card group-hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                  <h4 className="font-medium text-foreground text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                    {day.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-linear-to-br from-primary/5 via-transparent to-primary/5 border border-primary/10">
            <p className="text-muted-foreground text-sm mb-5 max-w-md">
              Please download the complete itinerary for detailed day to day description details
            </p>
            <Button
              onClick={handleDownloadItinerary}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Download Complete Itinerary
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
