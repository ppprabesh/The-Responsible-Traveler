"use client"

import { Compass, Mountain, Camera, Users, Shield, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: Mountain,
    title: "Trekking Expeditions",
    description: "From beginner trails to challenging high-altitude treks, experience the best of Himalayan trekking.",
  },
  {
    icon: Compass,
    title: "Climbing Adventures",
    description: "Conquer peaks with our expert guides. From Island Peak to Mera Peak, achieve your climbing dreams.",
  },
  {
    icon: Camera,
    title: "Cultural Tours",
    description: "Immerse yourself in Nepal's rich heritage. Visit ancient temples, monasteries, and local villages.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Intimate group sizes ensure personalized attention and authentic experiences throughout your journey.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our priority. All guides are certified with extensive mountain rescue training.",
  },
  {
    icon: Heart,
    title: "Responsible Travel",
    description: "We support local communities and practice sustainable tourism to preserve Nepal's beauty.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Comprehensive adventure services designed to give you the most authentic and memorable Himalayan experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="group p-2  hover:shadow-xl transition-shadow  bg-card h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors"
                    >
                      <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
