import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustIndicators } from "@/components/TrustIndicators";
import { Process } from "@/components/Process";
import { ServicesPreview } from "@/components/ServicesPreview";
import { FeaturedWork } from "@/components/FeaturedWork";
import { PremiumCta } from "@/components/PremiumCta";
import { Footer } from "@/components/Footer";

const heroVideos = ["/vids/vid1.mp4"];

export default function HomePage() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero videos={heroVideos} />
      <TrustIndicators />
      <Process />
      <ServicesPreview />
      <FeaturedWork />
      <PremiumCta />
      <Footer />
    </main>
  );
}
