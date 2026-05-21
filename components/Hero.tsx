"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroProps = {
  videos?: string[];
};

export function Hero({ videos = [] }: HeroProps) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const hasVideos = videos.length > 0;

  const handleVideoEnd = useCallback(() => {
    if (videos.length > 1) {
      setCurrentVideo((index) => (index + 1) % videos.length);
    }
  }, [videos.length]);

  return (
    <section
      id="hero"
      className={cn(
        "relative min-h-screen overflow-hidden border-b border-border",
        "bg-gradient-to-b from-surface/50 to-background",
        "flex items-center px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-36",
      )}
    >
      {hasVideos ? (
        <video
          key={videos[currentVideo]}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          loop={videos.length === 1}
          preload="metadata"
          onEnded={handleVideoEnd}
          aria-hidden="true"
        />
      ) : null}
      <div className="absolute inset-0 bg-background/45" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mb-5 w-fit rounded-lg border border-muted/20 bg-surface/70 px-4 py-2 text-xs font-semibold uppercase text-primary"
        >
          Modern digital systems studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          className="font-display text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl"
        >
          Your Business Deserves a Digital System That Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          We build websites, automation, AI systems, and scalable digital
          products for businesses worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="https://wa.me/message/GFH26N2VQAKNG1"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-surface/60 px-8 py-3.5 text-sm font-semibold text-text transition-colors hover:border-primary"
          >
            <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
            WhatsApp
          </a>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-lg border border-muted/30 bg-surface/60 px-8 py-3.5 text-sm font-semibold text-text transition-colors hover:border-primary/40"
          >
            View Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
