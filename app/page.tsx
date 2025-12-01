import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedPackages } from "@/components/featured-packages"
import { SecondaryHero } from "@/components/secondary-hero"

import { GallerySection } from "@/components/gallery-section"
import { CTASection } from "@/components/cta-section"
import { Testimonials } from "@/components/testimonials-section"
import { Header } from "@/components/header"
import { OurPartners } from "@/components/our-partners"
import { WhatWeOffer } from "@/components/what-we-offer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <OurPartners/>
        <FeaturedPackages />
        <SecondaryHero />
        {/* <WhatWeOffer /> */}
        <Testimonials />
        <GallerySection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  )
}
