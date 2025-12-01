import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MapSection } from "@/components/map-section"

export const metadata = {
  title: "Contact Us | The Responsible Traveller",
  description: "Get in touch with The Responsible Traveller. We're here to help you plan your perfect Nepal adventure.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ContactHero />
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
