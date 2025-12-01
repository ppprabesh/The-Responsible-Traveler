import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PackagesHero } from "@/components/packages-hero"
import { PackagesContent } from "@/components/packages-content"

export const metadata = {
  title: "Packages | The Responsible Traveller",
  description:
    "Explore our trekking, climbing, discovery, and cultural tour packages in Nepal. Find your perfect Himalayan adventure.",
}

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PackagesHero />
        <PackagesContent />
      </main>
      <Footer />
    </>
  )
}
