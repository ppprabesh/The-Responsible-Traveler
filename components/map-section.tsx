export function MapSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Find Us in Kathmandu</h2>
          <p className="text-muted-foreground">Located in the heart of Thamel, the traveler's hub of Kathmandu</p>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted-foreground/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0251975746745!2d85.30760801506172!3d27.71526198279075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4f3%3A0x58099b1deffed8d4!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Responsible Traveller Office Location"
          />
        </div>
      </div>
    </section>
  )
}
