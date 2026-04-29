"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Filter, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Heart Disease Prediction",
    year: "2024",
    description: "Machine learning model to predict heart disease risk using patient health metrics with 89% accuracy. Helps in early detection and prevention.",
    category: "AI/ML",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2670&auto=format&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Medical Report Simplification",
    year: "2024",
    description: "AI-powered tool that converts complex medical reports into easy-to-understand language for patients using NLP and LLM technology.",
    category: "AI/ML",
    tech: ["Python", "OpenAI API", "NLTK", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2670&auto=format&fit=crop",
    github: "#",
    live: "https://medical-report-simplification.vercel.app/",
  },
];

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 bg-[#f8f6f0] min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div {...RevealProps} className="max-w-2xl mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-serif font-bold text-[#111111] mb-6 leading-tight">
            Projects
          </h1>
          <p className="text-xl text-[#444444] font-sans leading-relaxed">
            A collection of projects that showcase my journey in AI, data science, and software development
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          {...RevealProps}
          transition={{ ...RevealProps.transition, delay: 0.1 }}
          className="mb-14 space-y-4"
        >
          <div className="flex items-center gap-3 text-[#111111] font-sans font-semibold text-[15px]">
            <Filter size={18} className="text-[#c2a27c]" /> Filter by Category
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-sans font-medium transition-all duration-300 ${
                  activeFilter === cat 
                    ? "bg-[#111111] text-white shadow-sm" 
                    : "bg-white text-[#111111] hover:bg-gray-100/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute bottom-5 left-5 flex gap-2 z-10">
                  <span className="px-4 py-1 bg-[#d8b082] rounded-[16px] text-[13px] font-semibold text-white shadow-sm">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-[#f8f6f0] text-[#c2a27c] rounded-[16px] text-[11px] font-bold uppercase tracking-wider mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-[28px] mt-2 leading-[1.2] font-serif font-bold text-[#111111] group-hover:text-[#c2a27c] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 mb-8 leading-relaxed font-sans text-[16px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 bg-[#f2f0ea] text-[#444444] text-[13px] font-medium rounded-[16px]">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center gap-6">
                  <a href={project.github} className="flex items-center gap-2 font-sans font-medium text-[15px] text-[#111111] hover:text-[#c2a27c] transition-colors w-fit group/link">
                    <FaGithub size={20} className="group-hover/link:text-[#c2a27c] transition-colors" /> Code
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans font-medium text-[15px] text-[#111111] hover:text-[#c2a27c] transition-colors w-fit group/link">
                      <ExternalLink size={20} className="group-hover/link:text-[#c2a27c] transition-colors" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
