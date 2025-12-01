"use client"

import { useState, useMemo, useEffect } from "react"
import { PackagesFilter } from "./packages-filter"
import { PackagesSection } from "./packages-section"
import { packages } from "@/lib/packages-data"
import { PackageCard } from "./package-card"
import { motion } from "framer-motion"

export function PackagesContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [])

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || pkg.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || pkg.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, selectedCategory, selectedDifficulty])

  const trekkingPackages = filteredPackages.filter((pkg) => pkg.category === "trekking")
  const climbingPackages = filteredPackages.filter((pkg) => pkg.category === "climbing")
  const hikingPackages = filteredPackages.filter((pkg) => pkg.category === "hiking")
  const discoveryPackages = filteredPackages.filter((pkg) => pkg.category === "discovery")
  const culturalPackages = filteredPackages.filter((pkg) => pkg.category === "cultural")
  const cyclingPackages = filteredPackages.filter((pkg) => pkg.category === "cycling")

  const isFiltered = searchQuery || selectedCategory !== "all" || selectedDifficulty !== "all"

  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PackagesFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />

        {filteredPackages.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No packages found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        ) : isFiltered && selectedCategory !== "all" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <>
            <PackagesSection
              id="trekking"
              title="Trekking Expeditions"
              description="Classic Himalayan treks through stunning mountain landscapes and traditional villages."
              packages={trekkingPackages}
            />
            <PackagesSection
              id="climbing"
              title="Climbing Adventures"
              description="Conquer peaks with our expert mountaineering guides and comprehensive climbing programs."
              packages={climbingPackages}
            />
            <PackagesSection
              id="hiking"
              title="Hiking Adventures"
              description="Short and scenic hikes perfect for day trips and weekend getaways."
              packages={hikingPackages}
            />
            <PackagesSection
              id="discovery"
              title="Discovery Sites"
              description="Explore remote and hidden regions of Nepal, off the beaten path."
              packages={discoveryPackages}
            />
            <PackagesSection
              id="cultural"
              title="Cultural Tours"
              description="Immerse yourself in Nepal's rich heritage, ancient temples, and living traditions."
              packages={culturalPackages}
            />
            <PackagesSection
              id="cycling"
              title="Cycling Adventures"
              description="Explore Nepal on two wheels with our exciting cycling and mountain biking tours."
              packages={cyclingPackages}
            />
          </>
        )}
      </div>
    </div>
  )
}
