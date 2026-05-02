"use client";

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const RevealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/ArpitJain-coder", name: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/arpit-jain-87850637a", name: "LinkedIn" },
    { Icon: Mail, href: "mailto:arpitjain1402@gmail.com", name: "Email" },
  ];

  return (
    <footer className="bg-[#111111] text-white py-24 px-8 md:px-12 border-t border-white/5 overflow-hidden print:hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] gap-16 md:gap-24 mb-20">
        <motion.div {...RevealProps} className="space-y-8">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight">
            AJ<span className="text-[#C2A27C]">.</span>
          </Link>
          <p className="text-gray-400 text-lg leading-relaxed font-medium max-w-sm">
            BCA student at JECRC University specializing in AI and Data Science. 
            Building intelligent systems with code and creativity.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href, name }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#C2A27C] transition-all duration-300 group shadow-sm"
                aria-label={name}
              >
                <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          {...RevealProps} 
          transition={{ ...RevealProps.transition, delay: 0.2 }}
          className="space-y-8"
        >
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2A27C]">Quick Links</h4>
          <nav className="flex flex-col gap-4 font-bold text-gray-300 text-[16px]">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Skills", href: "/skills" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#C2A27C] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>

        <motion.div 
          {...RevealProps} 
          transition={{ ...RevealProps.transition, delay: 0.4 }}
          className="space-y-8"
        >
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2A27C]">Contact</h4>
          <div className="flex flex-col gap-6">
            <a href="mailto:arpitjain1402@gmail.com" className="text-lg font-bold text-white hover:text-[#C2A27C] transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-[#C2A27C]">
              arpitjain1402@gmail.com
            </a>
            <p className="text-lg font-medium text-gray-400">
              Jaipur, Rajasthan, India
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        {...RevealProps}
        transition={{ ...RevealProps.transition, delay: 0.6 }}
        className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">
          © {currentYear} Arpit Jain. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-widest">
          Made with <Heart className="w-4 h-4 text-[#C2A27C]" fill="currentColor" /> by AJ
        </div>
      </motion.div>
    </footer>
  );
}
