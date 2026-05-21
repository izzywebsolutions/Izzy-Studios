"use client";

import Link from "next/link";
import { ArrowRight, Bot, Globe, Workflow } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PremiumCta } from "@/components/PremiumCta";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ServiceCard = {
  title: string;
  description: string;
  detail: string;
  cta: string;
};

const quickStartServices: ServiceCard[] = [
  {
    title: "Landing Page",
    description: "A focused page for one offer, campaign, or service that needs a clear conversion path.",
    detail: "From $250 / ₦200,000",
    cta: "Request This",
  },
  {
    title: "Business Website",
    description: "A professional site for service pages, company credibility, lead capture, and outreach.",
    detail: "From $500 / ₦500,000",
    cta: "Request This",
  },
  {
    title: "E-Commerce Store",
    description: "A clean storefront with product presentation, mobile optimization, and checkout flow.",
    detail: "From $750 / ₦750,000",
    cta: "Request This",
  },
];

const advancedSystems: ServiceCard[] = [
  {
    title: "Web Applications",
    description: "Custom portals, internal tools, and workflows for businesses that need more than pages.",
    detail: "Custom pricing based on scope",
    cta: "Discuss Project",
  },
  {
    title: "Mobile Apps",
    description: "Focused mobile experiences for products, operations, and customer-facing tools.",
    detail: "Custom pricing based on scope",
    cta: "Discuss Project",
  },
  {
    title: "SaaS Platforms",
    description: "MVPs and subscription-ready platforms built around a clear product workflow.",
    detail: "Custom pricing based on scope",
    cta: "Discuss Project",
  },
  {
    title: "CRM Systems",
    description: "Customer and operations systems that help teams track leads, work, and follow-up.",
    detail: "Custom pricing based on scope",
    cta: "Discuss Project",
  },
];

const automationServices: ServiceCard[] = [
  {
    title: "AI Chat Systems",
    description: "AI assistants for intake, support, FAQs, and internal knowledge workflows.",
    detail: "Custom pricing based on scope",
    cta: "Automate My Business",
  },
  {
    title: "Voice AI Receptionist",
    description: "Voice systems for calls, booking, simple questions, and lead capture.",
    detail: "Custom pricing based on scope",
    cta: "Automate My Business",
  },
  {
    title: "Workflow Automation",
    description: "n8n, API, email, WhatsApp, and CRM workflows that reduce repetitive work.",
    detail: "Custom pricing based on scope",
    cta: "Automate My Business",
  },
];

function ServiceSection({
  title,
  description,
  services,
}: {
  title: string;
  description: string;
  services: ServiceCard[];
}) {
  return (
    <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl drop-shadow-md">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted font-medium">{description}</p>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <article
                className={cn(
                  "group relative flex min-h-[320px] flex-col rounded-3xl overflow-hidden",
                  "border border-border/40 bg-surface/30 p-8 backdrop-blur-xl",
                  "transition-all duration-500 hover:scale-[1.02] hover:bg-surface/50 hover:shadow-glow hover:border-primary/50"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-glow transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted group-hover:text-text transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto pt-8">
                    <p className="text-sm font-semibold tracking-wide text-primary mb-4">
                      {service.detail}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-text transition-all group-hover:text-primary"
                    >
                      {service.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </Link>
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

export default function ServicesPage() {
  return (
    <main className="bg-background relative min-h-screen selection:bg-primary/30">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <section
        className={cn(
          "relative z-10 border-b border-border/50",
          "px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40",
        )}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex max-w-4xl flex-col gap-6"
          >
            <div className="flex gap-4 text-primary">
              <div className="p-3 rounded-xl bg-surface/50 border border-border/50 shadow-glass">
                <Globe className="h-6 w-6" aria-hidden />
              </div>
              <div className="p-3 rounded-xl bg-surface/50 border border-border/50 shadow-glass">
                <Workflow className="h-6 w-6" aria-hidden />
              </div>
              <div className="p-3 rounded-xl bg-surface/50 border border-border/50 shadow-glass">
                <Bot className="h-6 w-6" aria-hidden />
              </div>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl drop-shadow-md">
              Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-glow">Build, Automate, and Scale</span>
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-muted/90 font-medium leading-relaxed">
              We design systems that help businesses attract customers,
              automate operations, and grow revenue.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceSection
        title="Quick Start Services"
        description="Clear deliverables for businesses that need a stronger digital presence fast."
        services={quickStartServices}
      />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <ServiceSection
        title="Advanced Systems"
        description="Custom software for teams and founders that need scalable digital infrastructure."
        services={advancedSystems}
      />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      
      <ServiceSection
        title="AI & Automation"
        description="Practical AI and automation built around real operations, not hype."
        services={automationServices}
      />

      <PremiumCta />
      
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
