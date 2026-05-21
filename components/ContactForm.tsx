"use client";

import { cn } from "@/lib/utils";

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

export function ContactForm() {
  return (
    <form
      className="rounded-lg border border-border bg-surface/80 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-text">
          Name
          <input
            name="name"
            type="text"
            className={cn(
              "rounded-lg border border-border bg-background px-4 py-3 text-text outline-none",
              "transition-colors placeholder:text-muted focus:border-primary",
            )}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-text">
          Email / WhatsApp
          <input
            name="contact"
            type="text"
            className={cn(
              "rounded-lg border border-border bg-background px-4 py-3 text-text outline-none",
              "transition-colors placeholder:text-muted focus:border-primary",
            )}
            placeholder="How should we reach you?"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-text">
          Project Type
          <select
            name="projectType"
            className={cn(
              "rounded-lg border border-border bg-background px-4 py-3 text-text outline-none",
              "transition-colors focus:border-primary",
            )}
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-text">
          Budget Range
          <select
            name="budget"
            className={cn(
              "rounded-lg border border-border bg-background px-4 py-3 text-text outline-none",
              "transition-colors focus:border-primary",
            )}
            defaultValue=""
          >
            <option value="" disabled>
              Select budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-text">
          Message
          <textarea
            name="message"
            rows={5}
            className={cn(
              "resize-none rounded-lg border border-border bg-background px-4 py-3 text-text outline-none",
              "transition-colors placeholder:text-muted focus:border-primary",
            )}
            placeholder="Tell us what you need."
          />
        </label>
        <button
          type="submit"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send Project Request
        </button>
      </div>
    </form>
  );
}
