"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 50], [0.5, 0.85]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 py-3 sm:py-4 px-4 sm:px-6 pointer-events-none"
    >
      <div className="mx-auto max-w-6xl pointer-events-auto relative">
        <motion.div
          className={cn(
            "relative flex h-14 sm:h-16 items-center justify-between gap-4 sm:gap-6 rounded-2xl px-4 sm:px-6",
            "transition-all duration-300 z-50",
            isScrolled || isMobileMenuOpen ? "bg-surface/80 backdrop-blur-2xl shadow-glass border border-border/50" : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 font-display text-base font-bold tracking-tight text-white transition-opacity hover:opacity-80 relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-surface border border-border/50 p-1 flex items-center justify-center group-hover:border-primary/50 transition-colors">
              <Image src="/logo.png" alt="Izzy Studios Logo" width={24} height={24} className="object-contain" />
            </div>
            <span className="hidden sm:inline-block">IZZY STUDIOS</span>
            <span className="sm:hidden text-sm">IZZY</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-white",
                    isActive ? "text-white" : "text-muted"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-link"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Desktop + Mobile Toggle) */}
          <div className="flex items-center gap-4 relative z-50">
            <Link
              href="/contact"
              className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-lg",
                "bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-background transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
              )}
            >
              <span className="relative z-10">Start Project</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-text transition-colors hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-surface/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-glass md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted hover:bg-surface hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
