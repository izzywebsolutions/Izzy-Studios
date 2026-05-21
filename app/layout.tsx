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
    default: "Izzy Studios | Premium Web & AI Automation Agency in Nigeria",
    template: "%s | Izzy Studios",
  },
  description:
    "Izzy Studios is a world-class digital systems studio based in Lagos, Nigeria. We build high-performance SaaS platforms, business websites, and AI automation workflows.",
  keywords: ["web design Nigeria", "AI agency Nigeria", "automation agency Lagos", "web development Lagos", "SaaS development Nigeria", "digital systems studio", "Izzy Studios", "Izzy Web Solutions"],
  authors: [{ name: "Izzy Studios" }],
  creator: "Izzy Studios",
  metadataBase: new URL("https://izzystudios.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://izzystudios.com",
    title: "Izzy Studios | Premium Web & AI Automation Agency",
    description:
      "We design systems that help businesses attract customers, automate operations, and grow revenue.",
    siteName: "Izzy Studios",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is planned
        width: 1200,
        height: 630,
        alt: "Izzy Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzy Studios | Premium Digital Systems",
    description: "Building world-class websites and AI automation workflows in Lagos, Nigeria.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen font-body bg-background text-text selection:bg-primary/30 overflow-x-hidden antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          {children}
        </div>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
