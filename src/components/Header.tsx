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
    <>
    <header
      className={cn(
        "fixed top-4 md:top-6 left-0 right-0 mx-auto z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full print:hidden px-6 md:px-8 py-4",
        isScrolled 
          ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50" 
          : "bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
      )}
    >
      <div className="w-full flex justify-between items-center relative">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-serif font-bold group z-[60] transition-transform duration-300 hover:scale-105 text-[#111111]"
        >
          AJ<span className="text-primary group-hover:animate-pulse">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-[14px] font-sans font-medium transition-all duration-300 relative group overflow-hidden",
                pathname === link.href ? "text-white bg-[#111111] shadow-md" : "text-[#4b5563] hover:text-[#111111] hover:bg-black/5"
              )}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex ml-auto z-10">
          <Link
            href="/resume"
            className="px-6 py-2.5 bg-gradient-to-r from-[#111111] to-[#222222] text-white text-[14px] font-sans font-medium rounded-full hover:shadow-lg hover:scale-105 hover:from-[#c2a27c] hover:to-[#a98860] transition-all duration-500"
          >
            View Resume
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden z-[60] p-2 rounded-full hover:bg-black/5 focus:outline-none transition-all duration-300 text-[#111111]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
    </header>

        {/* Mobile Nav Full-Screen Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.85, 0, 0.15, 1] }}
              className="fixed inset-0 bg-[#f8f6f0] flex flex-col justify-center px-10 z-[100] md:hidden overflow-hidden"
            >
              {/* Top Bar for Mobile Menu */}
              <div className="absolute top-4 left-0 right-0 w-[95%] mx-auto py-6 px-4 flex justify-between items-center">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-[#111111]"
                >
                  AJ<span className="text-primary">.</span>
                </Link>
                <button 
                  className="p-2 focus:outline-none text-[#111111]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6 sm:gap-8 w-full mt-10">
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
                        "text-4xl sm:text-5xl font-serif font-bold block bg-clip-text hover:text-transparent transition-all duration-300",
                        pathname === link.href ? "text-[#c2a27c]" : "text-[#111111] hover:bg-gradient-to-r hover:from-[#c2a27c] hover:to-[#9a8060]"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + NavLinks.length * 0.1, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden mt-4"
                >
                  <Link
                    href="/resume"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block px-8 py-4 bg-[#111111] text-white text-[16px] font-sans font-medium rounded-full hover:bg-[#c2a27c] transition-colors duration-300 shadow-sm"
                  >
                    View Resume
                  </Link>
                </motion.div>
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
                </div>
                <span className="text-[12px] font-sans font-medium text-[#4b5563]">AJ © 2026</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
}
