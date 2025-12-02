"use client"
import { Button } from "@/components/ui/button"
import { Download, MapPin, ChevronRight } from "lucide-react"
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
    // Create a comprehensive itinerary text content
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

    // Create and trigger download
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
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Journey Overview</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Summarized Trip Itinerary</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />

          <div className="relative bg-background/60 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
              {pkg.itinerary.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group relative flex items-center"
                >
                  {/* Card */}
                  <div className="relative flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/80 border border-border/50 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    {/* Day badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-xs font-bold shadow-lg">
                      {day.day}
                    </div>

                    {/* Decorative line */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-l-xl opacity-60" />

                    <div className="pr-10">
                      <div className="flex items-center gap-1.5 text-primary/70 mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-wider font-medium">Day {day.day}</span>
                      </div>
                      <h4 className="font-semibold text-foreground text-sm leading-tight mb-1.5 line-clamp-2">
                        {day.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {getShortSummary(day.description)}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
                  </div>

                  {/* Arrow connector - show on desktop only, not on last item of each row */}
                  {index < pkg.itinerary.length - 1 && (
                    <>
                      {/* Desktop arrows - horizontal for items not at end of row */}
                      <div className="hidden lg:flex items-center justify-center w-6 shrink-0">
                        {(index + 1) % 3 !== 0 && (
                          <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 + 0.1 }}
                            className="flex items-center text-primary/50"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        )}
                      </div>
                      {/* Tablet arrows */}
                      <div className="hidden md:flex lg:hidden items-center justify-center w-6 shrink-0">
                        {(index + 1) % 2 !== 0 && (
                          <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 + 0.1 }}
                            className="flex items-center text-primary/50"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </motion.div>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: Math.floor((pkg.itinerary.length - 1) / 3) }).map((_, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + rowIndex * 0.1 }}
                  className="absolute right-8 text-primary/40"
                  style={{ top: `${140 + rowIndex * 130}px` }}
                >
                  <svg width="40" height="50" viewBox="0 0 40 50" fill="none" className="rotate-90">
                    <path
                      d="M5 5 C 5 25, 35 25, 35 45"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M30 40 L 35 45 L 40 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Download section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-border/50"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-5">
                <p className="text-muted-foreground text-sm text-center sm:text-left">
                  Please download the complete itinerary for detailed day to day description details
                </p>
                <Button
                  size="default"
                  onClick={handleDownloadItinerary}
                  className="gap-2 shrink-0 shadow-lg hover:shadow-primary/20 transition-shadow"
                >
                  <Download className="h-4 w-4" />
                  Download Itinerary
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
