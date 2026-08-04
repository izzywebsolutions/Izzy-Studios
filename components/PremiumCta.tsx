"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/src/config";

export function PremiumCta() {
  return (
    <section className="relative z-10 border-t border-border/50 bg-background px-4 py-24 sm:px-6 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={cn(
            "relative flex flex-col items-center justify-center text-center overflow-hidden",
            "rounded-3xl border border-border/50 bg-surface/30 p-10 sm:p-20 backdrop-blur-xl",
            "shadow-glass"
          )}
        >
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />

          <div className="relative z-10">
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Start Now</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl drop-shadow-md">
              Ready to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-glow">future?</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-muted/90 font-medium">
              Send your project details and {config.brand.name} will help shape the fastest practical path to launch.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  "group relative inline-flex items-center justify-center gap-2 rounded-xl overflow-hidden",
                  "bg-primary px-8 py-4 text-sm font-bold text-white shadow-glow-strong",
                  "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-10px_rgba(0,212,255,0.6)]",
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-accent-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <a
                href={`https://wa.me/${config.contact.whatsapp.number}?text=${encodeURIComponent(config.contact.whatsapp.prefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex items-center justify-center gap-2 rounded-xl",
                  "border border-primary/30 bg-surface/40 px-8 py-4 text-sm font-bold text-text backdrop-blur-md",
                  "transition-all duration-300 hover:border-primary/80 hover:bg-surface/80 hover:scale-[1.02] hover:shadow-glow",
                )}
              >
                <MessageCircle className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
