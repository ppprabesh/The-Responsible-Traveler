"use client";

import { motion } from "framer-motion";
import Carousel1 from "./ui/carousel1";
export function WhatWeOffer() {
  const slideData = [
    {
      title: "Trekking",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1611154046036-cd91e50978be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHJla2tpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Climbing",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1578886141033-b9f066572135?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cycling",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Discovery Tours",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sight Seeing",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hiking",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1629185752152-fe65698ddee4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Small and Group Holidays",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Individual Tailor Made Trips",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bespoke Family Holidays",
      button: "Explore Package",
      src: "https://images.unsplash.com/photo-1629185752152-fe65698ddee4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
              
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What We Offer</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                  Comprehensive adventure services designed to give you the most authentic and memorable Himalayan experience.
                </p>
              </motion.div>
              
                <Carousel1 slides={slideData} />
      
    </div>
  );
}
