import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCta() {
  return (
    <section className="border-t border-border bg-surface/30 px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-lg border border-border bg-background/60 p-6 sm:p-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold text-primary">Start now</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-text">
            Need a website, automation, or AI system?
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Send the project details and Izzy Digital Studio will help shape the
            fastest practical path to launch.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="https://wa.me/2349015116345?text=Hello%20Izzy%20Digital%20Studio%2C%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary/40 hover:bg-surface/50"
          >
            <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
