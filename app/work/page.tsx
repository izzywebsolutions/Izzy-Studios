"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Static image imports for automatic blur placeholder and zero CLS
import ossImg from "@/public/WORKS/oss.png";
import legendImg from "@/public/WORKS/legend.png";
import greenImg from "@/public/WORKS/green.png";
import fiyinImg from "@/public/WORKS/fiyin.png";

const projects = [
  {
    name: "OSS Multimedia",
    category: "Media Production",
    description: "Cinematic multimedia website for a media production company focused on photography, videography, livestreaming, and events.",
    impact: "Created a cinematic online presence for a premium media production company.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://oss-multimedia.vercel.app/",
    image: ossImg,
  },
  {
    name: "Legend Beauty Store",
    category: "Beauty Brand / eCommerce",
    description: "Beauty and cosmetics platform with a modern premium storefront experience.",
    impact: "Built a conversion-optimized storefront streamlining product discovery for beauty shoppers.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://legend-beauty-store.vercel.app/",
    image: legendImg,
  },
  {
    name: "Green Minds",
    category: "NGO Website / Sustainability Brand",
    description: "Modern nonprofit platform focused on environmental sustainability, trust, awareness, and community impact.",
    impact: "Improved trust and visibility for an environmental NGO through modern web design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://green-minds-theta.vercel.app/",
    image: greenImg,
  },
  {
    name: "Fiyin's Closet & Events",
    category: "Luxury Fashion & Events",
    description: "Elegant fashion and events platform built with premium aesthetics and modern branding.",
    impact: "Created a premium booking and showcase platform elevating the luxury brand presence.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://fiyins-closet-site.vercel.app/",
    image: fiyinImg,
  },
] as const;

export default function WorkPage() {
  return (
    <main className="bg-background relative min-h-screen selection:bg-primary/30">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <section
        className={cn(
          "relative z-10 border-b border-border/50",
          "px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40",
        )}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4 drop-shadow-sm">Proof Engine</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-white sm:text-7xl drop-shadow-md">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-glow">Work</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted/90 font-medium leading-relaxed">
              Real systems built for real businesses. Designed for impact, speed, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="h-full"
            >
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl overflow-hidden",
                  "border border-border/50 bg-surface/30 backdrop-blur-xl shadow-lg",
                  "transition-all duration-500 hover:-translate-y-2 hover:bg-surface/50 hover:shadow-glow-strong hover:border-primary/50"
                )}
              >
                {/* Internal Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0" />
                
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/20 border-b border-border/50">
                  <Image 
                    src={project.image} 
                    alt={`${project.name} Preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col flex-1 p-6 sm:p-8">
                  <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                    {project.category}
                  </p>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-glow transition-all duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-muted group-hover:text-text transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-border/50">
                    <p className="text-sm font-medium text-white/90">
                      <span className="text-primary font-bold mr-2">Impact:</span>
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-[10px] sm:text-xs font-medium text-muted transition-colors group-hover:border-primary/30 group-hover:text-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex flex-col gap-4">
                    <a 
                      href={project.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white w-full sm:w-auto hover:shadow-glow"
                    >
                      Visit Live Site
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* More Projects Coming Soon CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-border/50 bg-surface/30 px-6 py-3 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted">More internal projects & case studies coming soon</span>
          </div>
        </motion.div>
      </section>

      {/* Premium Call to Action */}
      <section className="relative z-10 border-t border-border/50 px-4 py-24 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-extrabold text-white">
              Want your project here?
            </h2>
            <p className="mt-4 text-lg text-muted/90">
              Let&apos;s turn your next idea into a working system.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/contact"
              className={cn(
                "group relative inline-flex items-center justify-center gap-2 rounded-xl overflow-hidden",
                "bg-primary px-8 py-4 text-sm font-bold text-white shadow-glow",
                "transition-all duration-300 hover:scale-105 hover:shadow-glow-strong",
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-accent-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
