"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-24 px-8 md:px-12 relative bg-[#f8f5f2]"
    >
      <div className="max-w-5xl w-full text-center relative z-10 flex-1 flex flex-col justify-center items-center">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2.5 mb-8"
        >
          <Sparkles className="w-[18px] h-[18px] text-[#C2A27C]" strokeWidth={1.5} />
          <p className="text-[#4b5563] font-sans text-[12px] tracking-[0.25em] uppercase font-bold">
            Welcome to my world
          </p>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-7xl sm:text-8xl md:text-[110px] font-serif font-bold text-[#111111] mb-10 leading-[0.9] tracking-tighter"
        >
          Arpit Jain
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-[22px] text-[#4b5563] mb-12 max-w-2xl mx-auto font-sans font-medium leading-relaxed"
        >
          Building intelligent systems through <span className="text-[#111111] font-bold">machine learning</span>, 
          data science, and creative engineering.
        </motion.p>

        {/* Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 inline-flex items-center bg-white px-8 py-4 rounded-full border border-black/5 shadow-sm"
        >
          <p className="text-[14px] flex items-center gap-4 font-sans font-bold text-[#4b5563]">
            <span>BCA IN AI & DS</span> 
            <span className="text-[#C2A27C]">•</span> 
            <span className="text-[#111111]">JECRC UNIVERSITY</span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#111111] text-white rounded-full hover:bg-black transition-all duration-300 text-[14px] font-sans font-bold w-full sm:w-auto group shadow-md"
          >
            Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/resume"
            className="flex items-center justify-center gap-2.5 px-8 py-3.5 border-2 border-[#111111] text-[#111111] rounded-full hover:bg-[#111111] hover:text-white transition-all duration-300 text-[14px] font-sans font-bold w-full sm:w-auto"
          >
            Download Resume <ArrowDown size={18} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="text-[#C2A27C]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
