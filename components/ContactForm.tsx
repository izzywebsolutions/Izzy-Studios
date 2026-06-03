"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Send, X, CheckCircle2, ArrowRight } from "lucide-react";

const projectTypes = [
  "Landing Page",
  "Business Website",
  "E-Commerce",
  "Web App",
  "Mobile App",
  "SaaS",
  "AI System",
  "Automation",
  "Other",
] as const;

const budgetRanges = [
  "Under $500 / ₦200,000",
  "$500–$1,500 / ₦200,000–₦750,000",
  "$1,500–$5,000",
  "$5,000+",
] as const;

type FormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType || !formData.budget || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setIsModalOpen(true);
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Izzy Digital Studio,

My name is ${formData.name}.

Email: ${formData.email}

Project Type: ${formData.projectType}

Budget Range: ${formData.budget}

Project Details:
${formData.message}

I would like to discuss this project.`;

    return `https://wa.me/2349015116345?text=${encodeURIComponent(text)}`;
  };

  const generateMailtoLink = () => {
    const subject = `Project Inquiry - ${formData.projectType}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}

Message:
${formData.message}`;

    return `mailto:izzywebsolutions26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSend = (type: "whatsapp" | "email" | "both") => {
    setIsSubmitting(true);
    
    if (type === "whatsapp" || type === "both") {
      window.open(generateWhatsAppLink(), "_blank");
    }
    
    if (type === "email" || type === "both") {
      window.location.href = generateMailtoLink();
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="relative">
      <form
        className="rounded-2xl border border-border/50 bg-surface/40 p-6 sm:p-10 backdrop-blur-xl shadow-glass relative z-10"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-text">
              Name
              <input
                required
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={cn(
                  "rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 text-white outline-none",
                  "transition-all placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
                )}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-text">
              Email Address
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(
                  "rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 text-white outline-none",
                  "transition-all placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
                )}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-text">
              Project Type
              <select
                required
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={cn(
                  "rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 text-white outline-none appearance-none",
                  "transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
                )}
              >
                <option value="" disabled className="bg-surface">
                  Select project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-surface">
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-text">
              Budget Range
              <select
                required
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={cn(
                  "rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 text-white outline-none appearance-none",
                  "transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
                )}
              >
                <option value="" disabled className="bg-surface">
                  Select budget range
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-surface">
                    {range}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-text">
            Project Message
            <textarea
              required
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={cn(
                "resize-none rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 text-white outline-none",
                "transition-all placeholder:text-muted focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
              )}
              placeholder="Tell us about your project, goals, and any specific requirements..."
            />
          </label>

          <button
            type="submit"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-glow"
          >
            <span className="relative z-10">Submit Project Inquiry</span>
            <Send className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </form>

      {/* Success State Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-surface/95 p-8 text-center backdrop-blur-xl"
          >
            <div className="mb-4 rounded-full bg-primary/20 p-4 text-primary">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Inquiry Sent!</h3>
            <p className="mt-2 text-muted max-w-xs mx-auto">
              Thank you for reaching out. We&apos;ve received your request and will be in touch shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 text-sm font-bold text-primary hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choice Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/50 bg-surface shadow-2xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-white">Choose Method</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full p-2 text-muted hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-muted mb-8">
                  How would you like to send your project request? Sending via both ensures the fastest response.
                </p>

                <div className="grid gap-4">
                  <button
                    onClick={() => handleSend("whatsapp")}
                    disabled={isSubmitting}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-primary/20 p-3 text-primary">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-white">Send via WhatsApp</span>
                        <span className="text-xs text-muted">Instant delivery, fastest response</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleSend("email")}
                    disabled={isSubmitting}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-surface-alt p-4 transition-all hover:border-primary/30 hover:bg-surface"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-background p-3 text-muted border border-border/50">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-white">Send via Email</span>
                        <span className="text-xs text-muted">Official inquiry, 24h response</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleSend("both")}
                    disabled={isSubmitting}
                    className="group flex items-center justify-between gap-4 rounded-2xl border-2 border-primary bg-primary p-4 transition-all hover:opacity-90"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-white/20 p-3 text-white">
                        <Send className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="block font-bold text-white">Send via Both (Recommended)</span>
                        <span className="text-xs text-white/70">Fastest & most reliable</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
