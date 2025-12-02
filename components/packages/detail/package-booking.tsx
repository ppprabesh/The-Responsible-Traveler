"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"
import type { Package } from "@/lib/packages-data"
import { motion } from "framer-motion"

interface PackageBookingProps {
  pkg: Package
}

export function PackageBooking({ pkg }: PackageBookingProps) {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-primary text-primary-foreground border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Adventure?</h2>
                  <p className="text-primary-foreground/80 mb-6">
                    Contact us today to reserve your spot on the {pkg.title}. Our team is ready to help you plan your
                    perfect journey.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button size="lg" variant="secondary" className="w-full justify-start gap-3" asChild>
                    <Link href="/contact">
                      <MessageCircle className="h-5 w-5" />
                      Send Inquiry
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-start gap-3 bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="tel:+977-1-4700000">
                      <Phone className="h-5 w-5" />
                      +977-1-4700000
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full justify-start gap-3 bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="mailto:info@nepaltrek.com">
                      <Mail className="h-5 w-5" />
                      info@nepaltrek.com
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
