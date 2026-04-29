"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-[#f8f6f0] overflow-hidden border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div {...RevealProps} className="space-y-6">
          <h2 className="text-4xl sm:text-[48px] md:text-[64px] font-serif font-bold text-[#111111] leading-tight">
            Resume
          </h2>
          <p className="text-xl text-[#444444] font-sans max-w-2xl mx-auto leading-relaxed">
            Interested in my background and experience? Download my resume to see my full professional timeline and technical skill set.
          </p>
        </motion.div>

        <motion.div 
          {...RevealProps} 
          transition={{ ...RevealProps.transition, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/resume"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white rounded-full hover:bg-[#c2a27c] transition-colors duration-300 text-[16px] font-sans font-medium w-full sm:w-auto shadow-sm"
          >
            <FileText size={20} />
            View Interactive Resume
          </Link>
          <a
            href="/about"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-[#111111]/10 text-[#111111] rounded-full hover:bg-gray-50 transition-colors duration-300 text-[16px] font-sans font-medium w-full sm:w-auto shadow-sm"
          >
            <FileText size={20} className="text-[#c2a27c]" />
            View Full Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
