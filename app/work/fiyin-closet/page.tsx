import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fiyin's Closet Case Study",
  description:
    "Luxury fashion and events site designed for Fiyin's Closet & Events. Custom booking integrations, elegant typography, and premium branding.",
};

export default function FiyinClosetPage() {
  return (
    <main className="bg-background relative min-h-screen selection:bg-primary/30">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />

      {/* Hero */}
      <section className="relative z-10 px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40 border-b border-border/50">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Work
          </Link>
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Luxury Fashion & Events</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl drop-shadow-md">
            Fiyin&apos;s Closet & Events
          </h1>
          <p className="mt-6 text-xl text-muted/90 font-medium leading-relaxed">
            Elegant fashion and events platform built with premium aesthetics and modern branding.
          </p>
          <div className="mt-8">
            <a
              href="https://fiyins-closet-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-glow hover:opacity-95 transition-opacity"
            >
              Visit Live Site <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-muted leading-relaxed">
                  Fiyin&apos;s Closet & Events wanted a luxurious online showroom and booking tool. We built an elegant digital platform with sophisticated styling, fluid animations, and a seamless client intake pipeline that enhances their luxury brand presence.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-muted leading-relaxed">
                  Fashion and event design businesses depend heavily on aesthetics. The website had to look premium and load instantly while hosting high-resolution imagery and client scheduling inputs.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">Our Solution</h2>
                <p className="text-muted leading-relaxed">
                  We created a tailored Next.js layout incorporating custom imagery slots, premium typography, and an automated booking system. Optimized image handling and lightweight scripts ensure that clients enjoy a high-end browsing experience.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6 backdrop-blur-xl">
                <h3 className="font-display text-lg font-bold text-white mb-4">Project Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted">Client</dt>
                    <dd className="text-white font-medium mt-1">Fiyin&apos;s Closet & Events</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Services</dt>
                    <dd className="text-white font-medium mt-1">Branding, UI/UX Design, Development</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Tech Stack</dt>
                    <dd className="flex flex-wrap gap-1.5 mt-2">
                      {["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"].map((tag) => (
                        <span key={tag} className="rounded-md bg-background border border-border px-2 py-0.5 text-xs text-muted">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-border/50 bg-surface/30 p-6 backdrop-blur-xl space-y-4">
                <h3 className="font-display text-lg font-bold text-white">Impact Highlights</h3>
                <div className="flex gap-3">
                  <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted">Premium visual design that matches their physical event quality.</p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted">Integrated booking logic simplifying consultations and bookings.</p>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted">Strong mobile responsiveness making catalog browsing effortless on mobile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
