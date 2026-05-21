"use client";

import { motion } from "framer-motion";
import { Workflow, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We analyze your business operations and define the exact digital system needed to accelerate your growth.",
    icon: Workflow,
  },
  {
    title: "Premium Engineering",
    description: "We build fast, scalable, and beautifully designed solutions using modern frameworks and AI automation.",
    icon: Code2,
  },
  {
    title: "Launch & Scale",
    description: "Your system goes live with robust infrastructure, ready to capture leads and handle massive scale.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="relative z-10 border-t border-border/50 bg-background px-4 py-24 sm:px-6 sm:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Our Process</p>
          <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
            How we build the future
          </h2>
          <p className="mt-6 text-xl text-muted">
            A streamlined approach to transforming your business into a digital powerhouse.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-border/50 bg-surface/40 backdrop-blur-md shadow-glass group hover:border-primary/50 hover:bg-surface/60 transition-all duration-300">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="h-10 w-10 text-primary relative z-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
