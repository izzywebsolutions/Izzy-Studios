import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { config } from "@/src/config";

export const viewport: Viewport = {
  themeColor: config.theme.colors.background,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: config.seo.defaultTitle,
    template: config.seo.titleTemplate,
  },
  description: config.seo.defaultDescription,
  keywords: [
    config.brand.name,
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
  authors: [{ name: config.brand.name }],
  creator: config.brand.name,
  metadataBase: new URL(config.website.url),
  alternates: {
    canonical: config.website.url,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: config.website.url,
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
    siteName: config.brand.name,
    images: [
      {
        url: config.seo.ogImage,
        width: 1200,
        height: 630,
        alt: config.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
    images: [config.seo.ogImage],
    creator: config.seo.twitterHandle,
  },
  icons: {
    icon: config.brand.faviconPath,
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
  name: config.brand.name,
  url: config.website.url,
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

