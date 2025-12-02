"use client"

import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

const navigation = {
  explore: [
    { name: "Trekking Packages", href: "/packages#trekking" },
    { name: "Climbing Expeditions", href: "/packages#climbing" },
    { name: "Hiking Adventures", href: "/packages#hiking" },
    { name: "Cultural Tours", href: "/packages#cultural" },
    { name: "Cycling Tours", href: "/packages#cycling" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Sustainability", href: "/about#sustainability" },
    { name: "Contact", href: "/contact" },
  ],
  destinations: [
    { name: "Everest Region", href: "/packages" },
    { name: "Annapurna Region", href: "/packages" },
    { name: "Langtang Valley", href: "/packages" },
    { name: "Mustang", href: "/packages" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                <Mountain className="h-8 w-8" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight">The Responsible</span>
                <span className="font-serif text-sm opacity-80 leading-tight">Traveler</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Sustainable trekking and tours in Nepal. Experience the Himalayas responsibly while supporting local
              communities.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="hover:opacity-100 opacity-80 transition-opacity"
                  aria-label={Icon.name}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <motion.div whileHover={{ x: 3 }}>
                    <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <motion.div whileHover={{ x: 3 }}>
                    <Link href={item.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-sm opacity-80">+977 1 4567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-sm opacity-80">info@responsibletraveller.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-primary-foreground/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} The Responsible Traveller. All rights reserved.
            </p>
            <div className="flex gap-6">
              <motion.div whileHover={{ y: -2 }}>
                <Link href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <Link href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
