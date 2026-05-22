"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "OSS Multimedia",
    category: "Media Production",
    description: "Cinematic multimedia website for a media production company focused on photography, videography, livestreaming, and events.",
    impact: "Created a cinematic online presence for a premium media production company.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://oss-multimedia.vercel.app/",
    image: "/WORKS/oss.png",
  },
  {
    name: "Legend Beauty Store",
    category: "Beauty Brand / eCommerce",
    description: "Beauty and cosmetics platform with a modern premium storefront experience.",
    impact: "Built a conversion-optimized storefront streamlining product discovery for beauty shoppers.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://legend-beauty-store.vercel.app/",
    image: "/WORKS/legend.png",
  },
  {
    name: "Green Minds",
    category: "NGO Website / Sustainability Brand",
    description: "Modern nonprofit platform focused on environmental sustainability, trust, awareness, and community impact.",
    impact: "Improved trust and visibility for an environmental NGO through modern web design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://green-minds-theta.vercel.app/",
    image: "/WORKS/green.png",
  },
  {
    name: "Fiyin's Closet & Events",
    category: "Luxury Fashion & Events",
    description: "Elegant fashion and events platform built with premium aesthetics and modern branding.",
    impact: "Created a premium booking and showcase platform elevating the luxury brand presence.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    href: "https://fiyins-closet-site.vercel.app/",
    image: "/WORKS/fiyin.png",
  },
] as const;

export function FeaturedWork() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background px-4 py-24 sm:px-6 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">Selected Work</p>
            <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl drop-shadow-md">
              Real projects, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-glow">real impact.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-bold text-text transition-all hover:text-white"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
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
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
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

                  <div className="mt-auto pt-4">
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
      </div>
    </section>
  );
}
