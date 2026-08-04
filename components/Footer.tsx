import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/src/config";

const socialLinks = [
  { label: "TikTok", href: config.social.tiktok },
  { label: "Instagram", href: config.social.instagram },
  { label: "X", href: config.social.x },
  { label: "WhatsApp", href: `https://wa.me/${config.contact.whatsapp.number}?text=${encodeURIComponent(config.contact.whatsapp.prefilledMessage)}` },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-md px-4 py-16 sm:px-6 sm:py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:items-start sm:justify-between relative z-10">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80 w-fit">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-surface/50 border border-border/50 p-1.5 flex items-center justify-center shadow-glass">
              <Image src={config.brand.logoPath} alt={`${config.brand.name} Logo`} width={32} height={32} className="object-contain" />
            </div>
            <p className="font-display text-xl font-bold tracking-tight text-white drop-shadow-md">
              {config.brand.name}
            </p>
          </Link>
          <p className="mt-6 max-w-xs text-base leading-relaxed text-muted/90 font-medium">
            A modern digital systems studio based in {config.contact.address}, serving forward-thinking businesses worldwide.
          </p>
          <a
            href={`mailto:${config.contact.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-border/50 bg-surface/30 px-5 py-3 text-sm font-semibold text-muted transition-all hover:border-primary/30 hover:bg-surface/50 hover:text-white hover:shadow-glow"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:scale-110" aria-hidden />
            {config.contact.email}
          </a>
        </div>
        
        <div className="flex flex-wrap gap-16 sm:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-6">Social</p>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center text-sm font-medium text-muted transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mt-16 max-w-6xl border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-xs font-medium tracking-wide text-muted">
          Copyright © {new Date().getFullYear()} {config.brand.name}. All rights reserved.
        </p>
        <p className="text-xs font-medium tracking-wide text-muted flex items-center gap-1">
          Designed with <span className="text-primary">precision</span>
        </p>
      </div>
    </footer>
  );
}
