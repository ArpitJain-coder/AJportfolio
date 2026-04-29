"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 relative bg-[#f2f0ea]"
    >
      <div className="max-w-5xl w-full text-center relative z-10 flex-1 flex flex-col justify-center items-center">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2.5 mb-6"
        >
          <Sparkles className="w-[18px] h-[18px] text-[#c2a27c]" strokeWidth={1.5} />
          <p className="text-[#475569] font-sans text-[13px] tracking-[0.15em] uppercase font-medium">
            Welcome to my world
          </p>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[128px] font-serif font-bold text-[#111111] mb-6 leading-none tracking-tight"
        >
          Arpit Jain
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-[24px] text-[#4b5563] mb-10 max-w-3xl mx-auto font-sans leading-relaxed"
        >
          AI & Data Science Student Building Real-World Intelligent Systems
        </motion.h2>

        {/* Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-14 inline-flex items-center bg-white px-5 sm:px-6 py-3 rounded-2xl sm:rounded-full border border-black/5 shadow-sm"
        >
          <p className="text-[13px] sm:text-[15px] flex flex-col sm:flex-row items-center gap-1 sm:gap-0 font-sans font-medium text-[#4b5563]">
            <span>BCA in AI and Data Science</span> 
            <span className="hidden sm:inline mx-3 text-gray-300">•</span> 
            <span className="font-semibold text-[#111111]">JECRC University</span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/projects"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#111111] text-white rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-[15px] font-sans font-medium w-full sm:w-auto"
          >
            View Projects <ArrowRight size={18} />
          </Link>
          <Link
            href="/resume"
            className="flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-[#111111] rounded-full hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-[15px] font-sans font-medium w-full sm:w-auto"
          >
            Download Resume
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center px-8 py-4 border-2 border-[#111111] text-[#111111] rounded-full hover:bg-[#111111] hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-[15px] font-sans font-medium w-full sm:w-auto"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#4b5563]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#c2a27c]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
