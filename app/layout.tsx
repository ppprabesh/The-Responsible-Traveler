import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Responsible Traveller | Nepal Trekking & Tours",
  description:
    "Experience authentic Nepal adventures with The Responsible Traveller. Sustainable trekking, climbing expeditions, and cultural tours in the heart of the Himalayas.",
  keywords: [
    "Nepal trekking",
    "Himalayan tours",
    "responsible travel",
    "Everest trek",
    "Annapurna circuit",
    "Nepal adventure",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
