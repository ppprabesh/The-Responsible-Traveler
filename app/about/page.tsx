import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { OurStory } from "@/components/our-story"
import { ValuesSection } from "@/components/values-section"
import { GuidesShowcase } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "About Us | The Responsible Traveller",
  description:
    "Learn about our mission, values, and the passionate team behind The Responsible Traveller. Sustainable trekking in Nepal since 2008.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <AboutHero />
        <OurStory />
        <ValuesSection />
        <GuidesShowcase />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
