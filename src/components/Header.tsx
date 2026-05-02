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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 print:hidden",
        isScrolled 
          ? "bg-[#f8f5f2]/80 backdrop-blur-xl shadow-sm py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl md:text-3xl font-serif font-bold group z-[60] text-[#111111] tracking-tight"
        >
          AJ<span className="text-[#C2A27C]">.</span>
        </Link>

        <nav className="hidden md:flex gap-12 items-center">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[15px] font-sans font-medium transition-all duration-300 relative group",
                pathname === link.href ? "text-[#111111]" : "text-[#4b5563] hover:text-[#111111]"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C2A27C]"
                />
              )}
            </Link>
          ))}
          <Link
            href="/resume"
            className="ml-4 px-6 py-2.5 bg-[#111111] text-white text-[14px] font-sans font-medium rounded-full hover:bg-[#C2A27C] transition-all duration-300"
          >
            Resume
          </Link>
        </nav>
        
        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden z-[60] p-2 focus:outline-none text-[#111111]"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>
    </header>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-[#f8f5f2] z-[100] md:hidden flex flex-col p-8 pt-24"
        >
          <button 
            className="absolute top-8 right-8 p-2 text-[#111111]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col gap-8">
            {NavLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-4xl font-serif font-bold",
                    pathname === link.href ? "text-[#C2A27C]" : "text-[#111111]"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-block px-8 py-4 bg-[#111111] text-white text-lg font-sans font-medium rounded-full text-center"
            >
              View Resume
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
