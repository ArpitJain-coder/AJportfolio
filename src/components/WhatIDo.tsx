"use client";

import { motion } from "framer-motion";
import { Brain, Database, Terminal } from "lucide-react";

const services = [
  {
    icon: <Brain className="w-8 h-8 text-[#c2a27c]" />,
    title: "AI & Machine Learning",
    description: "Building intelligent systems that learn and adapt, from chatbots to neural networks.",
  },
  {
    icon: <Database className="w-8 h-8 text-[#c2a27c]" />,
    title: "Data Science",
    description: "Extracting insights from data through analysis, visualization, and predictive modeling.",
  },
  {
    icon: <Terminal className="w-8 h-8 text-[#c2a27c]" />,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights through advanced analytical techniques and visualization.",
  },
];

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export function WhatIDo() {
  return (
    <section className="py-32 px-8 md:px-12 bg-[#f8f5f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.h2
            {...RevealProps}
            className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-6 leading-[1] tracking-tight"
          >
            What I Do
          </motion.h2>
          <motion.p
            {...RevealProps}
            transition={{ ...RevealProps.transition, delay: 0.1 }}
            className="text-lg md:text-xl text-[#444444] font-sans font-medium max-w-2xl"
          >
            Transforming ideas into intelligent solutions through code, data, and creativity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: index * 0.1 }}
              className="p-12 bg-white rounded-[32px] shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-[20px] bg-[#f8f5f2] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-sans font-bold text-[#111111] mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[#4b5563] text-[16px] leading-relaxed font-sans font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
