"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-border bg-card">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4">Message Sent Successfully!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 890" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground">
                    I'm Interested In
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trekking">Trekking Expeditions</SelectItem>
                      <SelectItem value="climbing">Climbing Adventures</SelectItem>
                      <SelectItem value="hiking">Hiking Tours</SelectItem>
                      <SelectItem value="discovery">Discovery Sites</SelectItem>
                      <SelectItem value="cultural">Cultural Tours</SelectItem>
                      <SelectItem value="cycling">Cycling Adventures</SelectItem>
                      <SelectItem value="custom">Custom Itinerary</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans, questions, or special requirements..."
                    rows={5}
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
