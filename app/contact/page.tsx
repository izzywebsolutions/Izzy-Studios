"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="bg-background relative min-h-screen selection:bg-primary/30">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-glow/5 blur-[120px] rounded-full pointer-events-none opacity-30" />

      <section
        className={cn(
          "relative z-10",
          "px-4 pb-20 pt-32 sm:px-6 sm:pb-32 sm:pt-40",
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4 drop-shadow-sm">Start a Conversation</p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl drop-shadow-md">
              Let&apos;s build your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-glow">system.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted/90 font-medium leading-relaxed">
              Tell us what you want to build, automate, or improve. We will
              help shape the next practical step and outline a clear technical approach.
            </p>

            <div className="mt-12 space-y-4">
              <a
                href="https://wa.me/message/GFH26N2VQAKNG1"
                className="group flex items-start gap-5 rounded-2xl border border-primary/40 bg-surface/60 p-6 text-text transition-all duration-300 hover:border-primary hover:bg-surface/80 hover:shadow-glow hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="rounded-xl bg-primary/20 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white group-hover:shadow-glow">
                  <MessageCircle className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white mb-1">WhatsApp</span>
                  <span className="block text-sm text-muted group-hover:text-text transition-colors">
                    Primary contact for fast project inquiries. Average response: 1 hour.
                  </span>
                </div>
              </a>
              
              <a
                href="mailto:izzywebsolutions26@gmail.com"
                className="group flex items-start gap-5 rounded-2xl border border-border/50 bg-surface/40 p-6 text-text transition-all duration-300 hover:border-primary/40 hover:bg-surface/60 hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="rounded-xl bg-background/50 p-3 text-muted transition-colors group-hover:bg-primary/20 group-hover:text-primary border border-border/50">
                  <Mail className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white mb-1">
                    izzywebsolutions26@gmail.com
                  </span>
                  <span className="block text-sm text-muted group-hover:text-text transition-colors">
                    For RFPs, detailed briefs, and general inquiries. Average response: 24h.
                  </span>
                </div>
              </a>
              
              <div className="group flex items-start gap-5 rounded-2xl border border-border/50 bg-surface/40 p-6 text-text backdrop-blur-md transition-all duration-300 hover:bg-surface/60">
                <div className="rounded-xl bg-background/50 p-3 text-muted border border-border/50">
                  <MapPin className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white mb-1">
                    Lagos, Nigeria
                  </span>
                  <span className="block text-sm text-muted">
                    Operating globally. We build for clients across North America, Europe, and Africa.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-accent-glow/10 to-transparent opacity-50 blur-2xl pointer-events-none" />
            
            <div className="relative rounded-[2rem] border border-border/50 bg-surface/40 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
