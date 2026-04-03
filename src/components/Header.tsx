"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6",
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "text-2xl font-serif font-bold group z-[60] transition-colors duration-300",
            isMobileMenuOpen ? "text-[#111111]" : "text-secondary"
          )}
        >
          AJ<span className="text-primary group-hover:animate-pulse">.</span>
        </Link>

        <nav className="hidden md:flex gap-10">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[14px] font-sans font-medium transition-all duration-300 relative group",
                pathname === link.href ? "text-secondary" : "text-muted hover:text-secondary"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                />
              )}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={cn(
            "md:hidden z-[60] p-2 focus:outline-none transition-colors duration-300",
            isMobileMenuOpen ? "text-[#111111]" : "text-secondary"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Full-Screen Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.85, 0, 0.15, 1] }}
              className="fixed inset-0 bg-[#f8f6f0] flex flex-col justify-center px-10 z-50 md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-8 w-full">
                {NavLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-5xl font-serif font-bold block bg-clip-text hover:text-transparent transition-all duration-300",
                        pathname === link.href ? "text-[#c2a27c]" : "text-[#111111] hover:bg-gradient-to-r hover:from-[#c2a27c] hover:to-[#9a8060]"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-10 left-10 right-10 flex justify-between items-center border-t border-black/5 pt-6"
              >
                <div className="flex gap-5">
                  <a href="https://github.com/ArpitJain-coder" target="_blank" rel="noreferrer" className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-[#4b5563] hover:text-[#c2a27c] transition-colors">GH</a>
                  <a href="https://www.linkedin.com/in/arpit-jain-87850637a" target="_blank" rel="noreferrer" className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-[#4b5563] hover:text-[#c2a27c] transition-colors">IN</a>
                  <a href="https://twitter.com/arpitjain" target="_blank" rel="noreferrer" className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-[#4b5563] hover:text-[#c2a27c] transition-colors">TW</a>
                </div>
                <span className="text-[12px] font-sans font-medium text-[#4b5563]">AJ © 2026</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
