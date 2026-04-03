"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-secondary group">
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
      </div>
    </header>
  );
}
