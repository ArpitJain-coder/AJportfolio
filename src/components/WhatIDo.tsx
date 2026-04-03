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
    <section className="py-24 px-6 bg-[#f2f0ea] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            {...RevealProps}
            className="text-[48px] md:text-[64px] font-serif font-bold text-[#111111] mb-6"
          >
            What I Do
          </motion.h2>
          <motion.p
            {...RevealProps}
            transition={{ ...RevealProps.transition, delay: 0.1 }}
            className="text-lg md:text-[20px] text-[#4b5563] font-sans max-w-2xl mx-auto"
          >
            Transforming ideas into intelligent solutions through code
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: index * 0.1 }}
              className="p-10 bg-white rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              <div className="w-16 h-16 rounded-[16px] bg-[#f8f6f0] flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-[22px] font-sans font-semibold text-[#111111] mb-4">{service.title}</h3>
              <p className="text-[#4b5563] text-[15px] leading-relaxed font-sans">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
