"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const team = [
  {
    name: "Pemba Sherpa",
    role: "Founder & Lead Guide",
    image: "/nepali-sherpa-man-mountain-guide-portrait.jpg",
    bio: "Born in Namche Bazaar, Pemba has summited Everest 12 times and leads our most challenging expeditions.",
  },
  {
    name: "Maya Tamang",
    role: "Operations Director",
    image: "/nepali-woman-professional-business-portrait.jpg",
    bio: "Maya ensures every trek runs smoothly, managing logistics and local partnerships across Nepal.",
  },
  {
    name: "Tenzin Norbu",
    role: "Cultural Tours Lead",
    image: "/nepali-man-historian-cultural-guide-portrait.jpg",
    bio: "A trained historian and passionate storyteller, Tenzin brings Nepal's heritage to life.",
  },
  {
    name: "Sarah Anderson",
    role: "Sustainability Manager",
    image: "/woman-environmental-sustainability-manager-portrai.jpg",
    bio: "Sarah develops and monitors our environmental initiatives and community programs.",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Our People</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Our diverse team combines local expertise with international experience to deliver exceptional adventures.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-border bg-card overflow-hidden group h-full hover:shadow-xl transition-shadow">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif text-lg font-semibold text-card-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
