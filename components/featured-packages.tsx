"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const featuredPackages = [
  {
    title: "Everest Base Camp Trek",
    image: "/photo2.jpg",
    duration: "14 Days",
    difficulty: "Moderate",
    price: "$1,850",
    tag: "Most Popular",
  },
  {
    title: "Annapurna Circuit",
    image: "/photo2.jpg",
    duration: "18 Days",
    difficulty: "Challenging",
    price: "$1,650",
    tag: "Adventure",
  },
  {
    title: "Langtang Valley Trek",
    image: "/photo2.jpg",
    duration: "10 Days",
    difficulty: "Easy",
    price: "$1,200",
    tag: "Best Value",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function FeaturedPackages() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Featured Adventures</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Popular Packages</h2>
          </div>
          <motion.div whileHover={{ x: 5 }} className="mt-4 md:mt-0">
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/packages">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPackages.map((pkg) => (
            <motion.div key={pkg.title} variants={cardVariants}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="group overflow-hidden border-border bg-card hover:shadow-2xl transition-shadow h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                    <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ delay: 0.3 }}>
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{pkg.tag}</Badge>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">{pkg.title}</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {pkg.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">From {pkg.price}</p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/packages">Details</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
