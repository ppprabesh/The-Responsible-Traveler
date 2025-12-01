"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["Thamel, Kathmandu", "Nepal 44600"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+977 1 4567890", "+977 9841234567"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@responsibletraveller.com", "bookings@responsibletraveller.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Sun - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Information</h2>
        <p className="text-muted-foreground leading-relaxed">
          Reach out to us through any of these channels. We typically respond within 24 hours during business days.
        </p>
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
        {contactDetails.map((item) => (
          <motion.div key={item.title} variants={cardVariants}>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center"
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">{item.title}</h3>
                    {item.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="border-border bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Live Chat Support</h3>
                <p className="text-sm opacity-90 mb-4">
                  Need immediate assistance? Chat with our travel experts online.
                </p>
                <p className="text-sm opacity-70">Available during office hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
