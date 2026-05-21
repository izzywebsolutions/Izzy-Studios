"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/message/GFH26N2VQAKNG1"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-glow-strong",
          "transition-transform hover:scale-110",
        )}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-primary opacity-50 animate-ping" />
        
        <MessageCircle className="h-6 w-6 relative z-10" />
      </a>
    </motion.div>
  );
}
