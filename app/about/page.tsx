import { AboutHero } from "@/components/about-hero"
import { CTASection } from "@/components/cta-section"
import { OurStory } from "@/components/our-story"
import { GuidesShowcase } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"

export const metadata = {
  title: "About Us | The Responsible Traveller",
  description:
    "Learn about our mission, values, and the passionate team behind The Responsible Traveller. Sustainable trekking in Nepal since 2008.",
}

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <OurStory />
        <ValuesSection />
        <GuidesShowcase />
        <CTASection />
      </main>
    </>
  )
}
