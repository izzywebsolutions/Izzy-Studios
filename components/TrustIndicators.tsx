"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { label: "High-End Engineering", value: "Premium" },
  { label: "Global Reach", value: "Worldwide" },
  { label: "System Uptime", value: "99.9%" },
  { label: "Delivery Speed", value: "Lightning" },
];

export function TrustIndicators() {
  return (
    <section className="relative z-10 border-b border-border/50 bg-background/50 backdrop-blur-xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-bold text-white sm:text-4xl mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "group relative flex flex-col items-center justify-center rounded-2xl p-6 text-center",
                "border border-border/30 bg-surface/20 transition-colors hover:bg-surface/40 hover:border-primary/20",
              )}
            >
              <p className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted group-hover:text-text transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
