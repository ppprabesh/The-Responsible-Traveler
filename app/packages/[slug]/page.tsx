import { notFound } from "next/navigation"
import {
  getPackageById,
  getRelatedPackages,
  packages,
} from "@/lib/packages-data"
import { PackageHero } from "@/components/packages/detail/package-hero"
import { PackageOverview } from "@/components/packages/detail/package-overview"
import { PackageItinerary } from "@/components/packages/detail/package-itinerary"
import { PackageIncludes } from "@/components/packages/detail/package-includes"
import { PackageGallery } from "@/components/packages/detail/package-gallery"
import { PackageBooking } from "@/components/packages/detail/package-booking"
import { PackageTrailMap } from "@/components/packages/detail/package-trail-map"
import { RelatedPackages } from "@/components/packages/detail/related-packages"

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = await getPackageById(slug)

  if (!pkg) {
    return { title: "Package Not Found" }
  }

  return {
    title: `${pkg.title} | Nepal Trekking Adventures`,
    description: pkg.description,
  }
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = await getPackageById(slug)

  if (!pkg) notFound()

  const relatedPackages = await getRelatedPackages(pkg.id, pkg.category)

  return (
    <main className="min-h-screen bg-background">
      <PackageHero pkg={pkg} />
      <PackageOverview pkg={pkg} />
      <PackageItinerary pkg={pkg} />
      <PackageIncludes pkg={pkg} />
      <PackageGallery pkg={pkg} />
      <PackageTrailMap pkg={pkg} />
      <PackageBooking pkg={pkg} />
      <RelatedPackages packages={relatedPackages || []} currentCategory={pkg.category} />
    </main>
  )
}

