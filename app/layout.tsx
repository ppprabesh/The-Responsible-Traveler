import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The Responsible Traveler | Nepal Trekking & Tours",
  description:
    "Experience authentic Nepal adventures with The Responsible Traveler. Sustainable trekking, climbing expeditions, and cultural tours in the heart of the Himalayas.",
  keywords: [
    "Nepal trekking",
    "Himalayan tours",
    "responsible travel",
    "Everest trek",
    "Annapurna circuit",
    "Nepal adventure",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Global Header */}
        <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
