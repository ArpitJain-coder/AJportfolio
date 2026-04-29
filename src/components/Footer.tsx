"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/ArpitJain-coder", name: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/arpit-jain-87850637a?utm_source=share_via&utm_content=profile&utm_medium=member_android", name: "LinkedIn" },
    { Icon: Mail, href: "mailto:arpitjain1402@gmail.com", name: "Email" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white py-12 px-8 overflow-hidden print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <motion.div {...RevealProps} className="flex-1 max-w-lg">
          <Link href="/" className="text-2xl font-serif font-bold mb-4 block text-white">
            Arpit Jain<span className="text-primary">.</span>
          </Link>
          <p className="text-gray-400 leading-relaxed mb-4 text-base">
            Building intelligent systems with code & creativity. BCA student specializing in AI and Data Science.
          </p>
          <p className="text-gray-500 italic font-serif text-sm">
            "Feel free to reach out for collaborations or just a friendly chat!"
          </p>
        </motion.div>

        <motion.div 
          {...RevealProps} 
          transition={{ ...RevealProps.transition, delay: 0.2 }}
          className="flex flex-col gap-6 md:text-right"
        >
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#C2A27C]">Quick Links</h4>
          <nav className="flex flex-col gap-3 font-medium text-gray-400 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Projects", href: "/projects" },
              { name: "Skills", href: "/skills" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>

        <motion.div 
          {...RevealProps} 
          transition={{ ...RevealProps.transition, delay: 0.4 }}
          className="flex flex-col gap-6 md:items-end w-full md:w-auto"
        >
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#C2A27C]">Connect</h4>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, name }, idx) => (
              <a
                key={idx}
                href={href}
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 group"
                aria-label={name}
              >
                <Icon size={18} className="text-gray-300 group-hover:text-[#0a0a0a] transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        {...RevealProps}
        transition={{ ...RevealProps.transition, delay: 0.6 }}
        className="max-w-7xl mx-auto pt-6 mt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-gray-500 text-sm font-medium">
          © {currentYear} Arpit Jain. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm font-medium">
          Crafted with <Heart className="inline w-4 h-4 text-[#C2A27C] mx-1" fill="currentColor" /> and passion
        </p>
      </motion.div>
    </footer>
  );
}
