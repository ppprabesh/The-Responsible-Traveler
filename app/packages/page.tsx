import { PackagesContent } from "@/components/packages-content"
import { PackagesHero } from "@/components/packages-hero"

export const metadata = {
  title: "Packages | The Responsible Traveller",
  description:
    "Explore our trekking, climbing, discovery, and cultural tour packages in Nepal. Find your perfect Himalayan adventure.",
}

export default function PackagesPage() {
  return (
    <>
      <main >
        <PackagesHero />
        <PackagesContent />
      </main>
    </>
  )
}
