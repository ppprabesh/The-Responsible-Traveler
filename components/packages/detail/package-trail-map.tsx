"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mountain, Flag, Tent } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageTrailMapProps {
  pkg: Package
}

export function PackageTrailMap({ pkg }: PackageTrailMapProps) {
  // Extract key waypoints from itinerary for the map visualization
  const waypoints = pkg.itinerary
    .filter((day) => day.altitude)
    .map((day, index, arr) => ({
      day: day.day,
      title: day.title,
      altitude: day.altitude,
      isStart: index === 0,
      isEnd: index === arr.length - 1,
      progress: ((index + 1) / arr.length) * 100,
    }))

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Route Overview</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Trail Map</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Visual overview of your journey through the{" "}
            {pkg.title.toLowerCase().includes("trek") ? "trekking" : "adventure"} route
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-card border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Map visualization container */}
              <div className="relative h-[400px] md:h-[500px] bg-gradient-to-b from-sky-100 to-emerald-50 dark:from-sky-950 dark:to-emerald-950 overflow-hidden">
                {/* Mountain range background */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1200 500"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Background mountains */}
                  <path
                    d="M0,500 L0,350 L100,280 L200,320 L300,250 L400,290 L500,200 L600,180 L700,220 L800,150 L900,190 L1000,250 L1100,200 L1200,280 L1200,500 Z"
                    className="fill-muted/50"
                  />
                  {/* Foreground mountains */}
                  <path
                    d="M0,500 L0,400 L150,320 L300,380 L450,280 L600,250 L750,320 L900,260 L1050,340 L1200,300 L1200,500 Z"
                    className="fill-muted"
                  />

                  {/* Trail path */}
                  <motion.path
                    d="M100,420 Q200,380 300,350 T500,280 T700,220 T900,180 T1100,160"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    className="text-primary"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>

                {/* Waypoint markers */}
                <div className="absolute inset-0 flex items-end pb-20">
                  <div className="w-full px-8 flex justify-between items-end">
                    {waypoints.slice(0, 6).map((point, index) => (
                      <motion.div
                        key={point.day}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex flex-col items-center"
                        style={{
                          marginBottom: `${Math.min(index * 30, 150)}px`,
                        }}
                      >
                        <div className="relative group">
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            <p className="font-semibold text-sm text-foreground">{point.title}</p>
                            <p className="text-xs text-muted-foreground">{point.altitude}</p>
                          </div>

                          {/* Marker */}
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                              point.isStart
                                ? "bg-green-500 text-white"
                                : point.isEnd
                                  ? "bg-accent text-accent-foreground"
                                  : "bg-card border-2 border-primary text-primary"
                            }`}
                          >
                            {point.isStart ? (
                              <Flag className="h-5 w-5" />
                            ) : point.isEnd ? (
                              <Mountain className="h-5 w-5" />
                            ) : (
                              <Tent className="h-4 w-4" />
                            )}
                          </div>
                        </div>
                        <span className="mt-2 text-xs font-medium text-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded">
                          Day {point.day}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-foreground">Start</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-foreground">Summit/End</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="w-3 h-3 rounded-full border-2 border-primary" />
                    <span className="text-foreground">Camps</span>
                  </div>
                </div>

                {/* Altitude indicator */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Mountain className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Max Altitude</span>
                  </div>
                  <p className="text-xl font-bold text-primary">{pkg.maxAltitude}</p>
                </div>
              </div>

              {/* Key waypoints list */}
              <div className="p-6 bg-muted/50 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Key Waypoints
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {waypoints.slice(0, 6).map((point) => (
                    <div key={point.day} className="text-center">
                      <p className="text-xs text-muted-foreground">Day {point.day}</p>
                      <p className="font-medium text-foreground text-sm truncate">{point.title.split(" - ")[0]}</p>
                      {point.altitude && <p className="text-xs text-primary font-medium">{point.altitude}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
