"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function OurStory() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Passion Born in the Mountains
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2008 by a group of Nepali mountaineers and international travel enthusiasts, The Responsible
                Traveller was born from a simple belief: that travel should benefit everyone involved—travelers, local
                communities, and the environment.
              </p>
              <p>
                Our founders grew up in the shadow of the Himalayas, watching as tourism both transformed and challenged
                their communities. They saw the potential for tourism to be a force for good, if done right.
              </p>
              <p>
                Today, we operate with the same principles that guided us from the start: authentic experiences,
                sustainable practices, and genuine connections with the land and its people.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/tserkori.jpg" alt="Our team in Tserkori" fill className="object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg max-w-xs"
            >
              <p className="font-serif text-3xl font-bold mb-1">15+ Years</p>
              <p className="text-sm opacity-80">of Responsible Travel</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
