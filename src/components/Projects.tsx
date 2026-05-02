"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Filter, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Telecom Churn Prediction AI",
    year: "2024",
    description: "High-accuracy machine learning system to predict customer churn in the telecom industry using behavior analysis and predictive modeling.",
    category: "AI/ML",
    tech: ["Python", "FastAPI", "Scikit-Learn", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    github: "#",
    live: "https://churnai-c7dt.vercel.app/",
    showOnHome: true,
  },
  {
    title: "Heart Disease Prediction",
    year: "2024",
    description: "Machine learning model to predict heart disease risk using patient health metrics with 89% accuracy. Helps in early detection and prevention.",
    category: "AI/ML",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2670&auto=format&fit=crop",
    github: "#",
    live: "#",
    showOnHome: false,
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
    showOnHome: true,
  },
];

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

interface ProjectsProps {
  isHomePage?: boolean;
}

export function Projects({ isHomePage = false }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const displayProjects = isHomePage 
    ? projects.filter(p => p.showOnHome)
    : projects;

  const categories = ["All", ...Array.from(new Set(displayProjects.map(p => p.category)))];
  
  const filteredProjects = activeFilter === "All" 
    ? displayProjects 
    : displayProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-8 md:px-12 bg-[#f8f5f2] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div {...RevealProps} className="max-w-2xl mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] mb-6 leading-tight tracking-tight">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-[#444444] font-sans font-medium leading-relaxed">
            A collection of projects that showcase my journey in AI, data science, and machine learning.
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          {...RevealProps}
          transition={{ ...RevealProps.transition, delay: 0.1 }}
          className="mb-14 space-y-4"
        >
          <div className="flex items-center gap-3 text-[#111111] font-sans font-bold text-[14px] uppercase tracking-wider">
            <Filter size={18} className="text-[#C2A27C]" /> Filter by Category
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-sans font-bold transition-all duration-300 ${
                  activeFilter === cat 
                    ? "bg-[#111111] text-white shadow-md" 
                    : "bg-white text-[#111111] border border-black/5 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: index * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 flex gap-2 z-10">
                  <span className="px-5 py-1.5 bg-[#C2A27C] rounded-full text-[12px] font-bold text-white shadow-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 md:p-12 flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-serif font-bold text-[#111111] group-hover:text-[#C2A27C] transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-[#4b5563] mb-8 leading-relaxed font-sans text-[16px] font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mb-10 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 bg-[#f8f5f2] text-[#111111] text-[13px] font-bold rounded-full border border-black/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center gap-8">
                  <a href={project.github} className="flex items-center gap-2 font-sans font-bold text-[15px] text-[#111111] hover:text-[#C2A27C] transition-colors w-fit group/link">
                    <FaGithub size={20} /> Code
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans font-bold text-[15px] text-[#111111] hover:text-[#C2A27C] transition-colors w-fit group/link">
                      <ExternalLink size={20} /> Live Demo
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
