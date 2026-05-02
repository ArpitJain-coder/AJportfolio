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
    <section id="resume" className="py-32 px-8 md:px-12 bg-[#f8f5f2] overflow-hidden border-t border-black/5">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <motion.div {...RevealProps} className="space-y-8">
          <h2 className="text-5xl sm:text-7xl md:text-[80px] font-serif font-bold text-[#111111] leading-[0.9] tracking-tight">
            Resume
          </h2>
          <p className="text-xl md:text-2xl text-[#444444] font-sans font-medium max-w-3xl mx-auto leading-tight">
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
            className="flex items-center justify-center gap-3 px-10 py-5 bg-[#111111] text-white rounded-full hover:bg-black transition-all duration-300 text-lg font-sans font-bold w-full sm:w-auto shadow-sm"
          >
            <FileText size={22} />
            View Interactive Resume
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-white border-[1.5px] border-[#111111] text-[#111111] rounded-full hover:bg-[#111111] hover:text-white transition-all duration-300 text-lg font-sans font-bold w-full sm:w-auto shadow-sm"
          >
            <FileText size={22} className="group-hover:text-white transition-colors" />
            View Full Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
