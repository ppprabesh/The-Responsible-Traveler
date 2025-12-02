import { ContactForm } from "@/components/contact-form";
import { ContactHero } from "@/components/contact-hero";
import { ContactInfo } from "@/components/contact-info";
import { MapSection } from "@/components/map-section";
import WhatsAppFloating from "@/components/whatsapp-floating";

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <div className="pb-6">
                  <h2 className="font-serif text-3xl font-bold mb-2">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reach out to us via mail for futher assistance or any
                    inquiries you may have.
                  </p>
                </div>
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
      <WhatsAppFloating />
    </>
  );
}
