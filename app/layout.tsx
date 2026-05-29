import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const viewport: Viewport = {
  themeColor: "#080C10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Izzy Digital Studio | Web Design, AI Automation & SaaS Development Agency",
    template: "%s | Izzy Digital Studio",
  },
  description:
    "Izzy Digital Studio is a premium web design, AI systems, automation, and SaaS development agency serving Lagos and global clients with business-focused digital workflows.",
  keywords: [
    "Izzy Digital Studio",
    "Izzy Studios",
    "web design Lagos",
    "AI automation Nigeria",
    "web developer Ikorodu",
    "web design agency",
    "SaaS development company",
    "AI automation agency",
    "digital product studio",
    "UI UX studio"
  ],
  authors: [{ name: "Izzy Digital Studio" }],
  creator: "Izzy Digital Studio",
  metadataBase: new URL("https://izzy-studios.vercel.app"),
  alternates: {
    canonical: "https://izzy-studios.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://izzy-studios.vercel.app",
    title: "Izzy Digital Studio | Web Design, AI Automation & SaaS Development Agency",
    description:
      "Premium web design, AI systems, automation, and SaaS development agency serving Lagos and global clients.",
    siteName: "Izzy Digital Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Izzy Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzy Digital Studio | Web Design, AI Automation & SaaS Development Agency",
    description:
      "Premium web design, AI systems, automation, and SaaS development agency serving Lagos and global clients.",
    images: ["/og-image.jpg"],
    creator: "@izzystudios526",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Izzy Digital Studio",
  url: "https://izzy-studios.vercel.app",
  description: "Web design, AI systems, SaaS development and automation studio.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  serviceType: [
    "Web Design",
    "AI Automation",
    "SaaS Development",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen font-body bg-background text-text selection:bg-primary/30 overflow-x-hidden antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          {children}
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

