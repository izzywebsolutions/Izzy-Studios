import { Globe, Workflow, Brain, Smartphone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Websites",
    description:
      "Premium landing pages and business websites that make your offer clear.",
    icon: Globe,
  },
  {
    title: "Automation",
    description:
      "Workflow systems that reduce manual work across leads, CRM, and operations.",
    icon: Workflow,
  },
  {
    title: "AI Systems",
    description:
      "AI assistants, support tools, and business workflows built for practical use.",
    icon: Brain,
  },
  {
    title: "Apps",
    description:
      "MVPs, SaaS platforms, and internal tools for scalable growth.",
    icon: Smartphone,
  },
] as const;

export function ServicesPreview() {
  return (
    <section
      id="services"
      className={cn("scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24")}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-bold text-text sm:text-4xl">
          Systems for modern businesses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Izzy Studios helps businesses look more credible, automate operations,
          and prepare for the AI era.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className={cn(
                "flex flex-col rounded-lg border border-border",
                "bg-surface/80 p-6",
              )}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-primary/40"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
