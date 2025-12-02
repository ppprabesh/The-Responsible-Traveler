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

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Title */}
      <div>
        <h2 className="font-serif text-3xl font-bold mb-2">Contact Information</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We are here to help you plan your journey. Reach out anytime.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-3">
        {contactDetails.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="group"
          >
            <Card
              className="rounded-xl border bg-card/80 backdrop-blur-md 
              shadow-sm hover:shadow-lg transition-all overflow-hidden relative"
            >
              {/* Top Accent Bar (Travel/Trekking Feel) */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-teal-400 opacity-70" />

              <CardContent className="p-5 flex gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>

                  <div className="space-y-[2px]">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-tight">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Live Chat Support */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        whileHover={{ scale: 1.02 }}
      >
        <Card className="rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg">
          <CardContent className="p-5 flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">Live Chat Support</h3>
              <p className="text-sm opacity-90 leading-tight mb-1">
                Chat with our travel experts instantly.
              </p>
              <p className="text-xs opacity-80">Available during office hours</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
