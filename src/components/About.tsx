"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Heart, Bookmark, Briefcase, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

const education = {
  title: "Education",
  college: "JECRC University",
  degree: "BCA in AI and Data Science",
  grad: "Expected Graduation: 2028",
};

const focusAreas = [
  "Machine Learning & Neural Networks",
  "Data Analysis & Visualization",
  "Database Design & Management"
];

const timeline = [
  {
    year: "2025 - Present",
    title: "Started BCA in AI & Data Science",
    description: "Enrolled at JECRC University, Jaipur. Building strong foundations in computer science, artificial intelligence, and data analytics."
  },
  {
    year: "Advanced Phase",
    title: "Advanced Learning & Certifications",
    description: "Completed multiple industry certifications including Claude in Action, Deloitte Data Analytics, and Tata Gen AI simulations. Built healthcare-focused ML projects."
  },
  {
    year: "Milestone",
    title: "First Major Projects",
    description: "Developed Heart Disease Prediction and Medical Report Simplification projects, diving deep into machine learning and NLP."
  }
];

const certifications = [
  {
    title: "Claude in Action",
    provider: "Anthropic",
    desc: "Completed comprehensive course on building AI applications with Claude, covering prompt engineering, API integration, and best practices.",
    icon: <Bookmark className="w-6 h-6 text-[#c2a27c]" />
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    provider: "Deloitte",
    desc: "Completed virtual job simulation focusing on data analytics, business intelligence, and data-driven decision making for real-world problems.",
    icon: <Briefcase className="w-6 h-6 text-[#c2a27c]" />
  },
  {
    title: "Tata Gen AI Powered Data Analytics Job Simulation",
    provider: "Tata",
    desc: "Hands-on simulation experience in leveraging generative AI for advanced data analytics, insights generation, and automated reporting.",
    icon: <Sparkles className="w-6 h-6 text-[#c2a27c]" />
  }
];

export function About() {
  return (
    <section className="bg-[#f8f5f2] min-h-screen py-32 px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <motion.div {...RevealProps} className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] mb-8 leading-[1] tracking-tight">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] leading-tight font-sans font-medium max-w-3xl">
            A passionate learner on a journey to master the art of artificial intelligence and
            machine learning
          </p>
        </motion.div>

        {/* My Story Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-32 items-start">
          <motion.div {...RevealProps} className="space-y-12">
            <div>
              <h2 className="text-[32px] font-sans font-bold text-[#111111] mb-8 tracking-tight">My Story</h2>
              <div className="space-y-8 text-[18px] text-[#4b5563] font-sans leading-relaxed">
                <p>
                  I am a BCA student specializing in Artificial Intelligence and Data Science, 
                  with a focused interest in Machine Learning and predictive modeling.
                </p>
                <p>
                  My work centers on building data-driven solutions, starting from data preprocessing 
                  and feature engineering to model training and evaluation. I have experience working 
                  with tools such as Python, SQL, and machine learning libraries, applying algorithms 
                  to solve problems like customer churn prediction. In these projects, I focus not 
                  only on model accuracy but also on metrics such as precision, recall, and overall model reliability.
                </p>
                <p>
                  I am particularly interested in understanding how models perform in real-world scenarios 
                  and optimizing them for better decision-making. My approach combines analytical 
                  thinking with a structured problem-solving methodology, ensuring that solutions 
                  are both efficient and practical.
                </p>
                <p>
                  Currently, I am seeking opportunities to apply my machine learning skills in real-world 
                  environments, contribute to impactful projects, and continue developing as a Machine Learning Engineer.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Artificial Intelligence", "Machine Learning", "Data Science"].map((tag) => (
                <span key={tag} className="px-6 py-3 bg-white rounded-full text-[15px] font-bold text-[#111111] border border-black/5 shadow-sm font-sans">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.2 }}
              className="bg-white p-12 rounded-[32px] shadow-sm border border-black/5"
            >
              <div className="mb-8">
                <GraduationCap className="w-10 h-10 text-[#C2A27C]" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-[#111111] mb-4 tracking-tight">Education</h3>
              <p className="text-lg font-bold text-[#444444] mb-1">{education.degree}</p>
              <p className="text-gray-500 mb-6">{education.college}</p>
              <div className="inline-block px-4 py-1.5 bg-[#f8f5f2] rounded-full">
                <p className="text-[13px] font-bold text-[#C2A27C] tracking-wide uppercase">{education.grad}</p>
              </div>
            </motion.div>

            <motion.div 
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.3 }}
              className="bg-white p-12 rounded-[32px] shadow-sm border border-black/5"
            >
              <div className="mb-8">
                <Heart className="w-10 h-10 text-[#C2A27C]" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-[#111111] mb-8 tracking-tight">Focus Areas</h3>
              <ul className="space-y-5">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-4 text-[#444444] text-[16px] font-bold font-sans">
                    <div className="w-2 h-2 bg-[#C2A27C] rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* My Journey Section */}
        <div className="pt-20">
          <motion.h2 
            {...RevealProps}
            className="text-4xl md:text-5xl font-serif font-bold mb-20 text-center text-[#111111] tracking-tight"
          >
            My Journey
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-[#e5e0d8] md:-translate-x-1/2" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  {...RevealProps}
                  className={cn(
                    "relative flex items-center justify-between md:justify-center w-full",
                    index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  {/* Card content */}
                  <div className="w-full pl-20 md:pl-0 md:w-5/12">
                    <div className="bg-white p-10 md:p-12 rounded-[32px] shadow-sm border border-black/5 text-left transition-transform hover:-translate-y-1">
                      <h3 className="text-2xl font-sans font-bold text-[#111111] mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-[#4b5563] leading-relaxed text-[16px] font-sans font-medium">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Middle Dot */}
                  <div className="absolute left-[26px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#C2A27C] rounded-full z-10 box-content border-[6px] border-[#f8f5f2]" />
                  
                  {/* Empty space for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="pt-20 mb-20">
          <motion.h2 
            {...RevealProps}
            className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-[#111111] tracking-tight"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {certifications.map((item, idx) => (
              <motion.div
                key={idx}
                {...RevealProps}
                transition={{ ...RevealProps.transition, delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[32px] shadow-sm border border-black/5 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="w-16 h-16 bg-[#f8f5f2] rounded-[20px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-sans font-bold text-[#111111] leading-snug mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[#C2A27C] text-[14px] font-bold mb-6 uppercase tracking-wider">{item.provider}</p>
                <p className="text-[#4b5563] text-[16px] leading-relaxed font-sans font-medium mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
