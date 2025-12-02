import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedPackages } from "@/components/featured-packages"
import { SecondaryHero } from "@/components/secondary-hero"
import { GallerySection } from "@/components/gallery-section"
import { CTASection } from "@/components/cta-section"
import { Testimonials } from "@/components/testimonials-section"
import { OurPartners } from "@/components/our-partners"
import { WhatWeOffer } from "@/components/what-we-offer"
import { TripStyles } from "@/components/trip-styles"

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <OurPartners/>
        <FeaturedPackages />
        <SecondaryHero />
        <WhatWeOffer />
        <TripStyles/>
        <Testimonials />
        <GallerySection />
        <CTASection />
      </main>
    </>
  )
}
