"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const prefilledMessage = encodeURIComponent(
    "Hello Izzy Digital Studio,\n\nI found your website and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/2349015116345?text=${prefilledMessage}`;

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Label */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="hidden md:block rounded-xl border border-border/50 bg-surface/90 px-4 py-2 text-xs font-medium text-white shadow-glass backdrop-blur-md"
          >
            Start a WhatsApp conversation
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={cn(
          "group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] p-3 text-white shadow-glow-strong sm:p-4",
          "transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(37,211,102,0.6)]"
        )}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing background effect */}
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100 animate-pulse" />
        
        <div className="relative flex items-center gap-3 px-1">
          <MessageCircle className="h-6 w-6 fill-white/10" />
          
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight">
              <span className="hidden md:inline">💬 </span>
              Chat on WhatsApp
            </span>
            <span className="hidden text-[10px] font-medium opacity-90 md:block">
              Usually replies within a few hours
            </span>
          </div>
        </div>

        {/* Animation ring */}
        <span className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
      </motion.a>
    </div>
  );
}
