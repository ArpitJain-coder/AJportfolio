"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Heart, Medal, Bookmark, Briefcase, Sparkles } from "lucide-react";
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

const achievements = [
  {
    title: "University Hackathon Winner",
    desc: "First place in college hackathon for AI-based solution"
  },
  {
    title: "Academic Excellence",
    desc: "Maintained 8.5+ GPA throughout academic career"
  },
  {
    title: "Leadership Role",
    desc: "Led a team of 5 students in multiple project collaborations"
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
    <section className="bg-[#f2f0ea] min-h-screen py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Hero Section */}
        <motion.div {...RevealProps} className="max-w-3xl">
          <h1 className="text-6xl md:text-[72px] font-serif font-bold text-[#111111] mb-6 leading-tight">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-[#444444] leading-relaxed font-sans">
            A passionate learner on a journey to master the art of artificial intelligence and
            software development
          </p>
        </motion.div>

        {/* My Story Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <motion.div {...RevealProps} className="space-y-8">
            <div>
              <h2 className="text-[32px] font-sans font-bold text-[#111111] mb-6">My Story</h2>
              <div className="space-y-6 text-[16px] text-[#4b5563] font-sans leading-relaxed">
                <p>
                  My fascination with technology started in high school when I built my first
                  Python script. Since then, I've been on a continuous learning journey,
                  diving deep into AI, data science, and software engineering. Currently
                  pursuing BCA in AI and Data Science at JECRC University, I'm constantly
                  working on projects that challenge me to think differently and solve real-world problems.
                </p>
                <p>
                  Currently in my BCA in AI and Data Science program at JECRC University,
                  I'm building a strong foundation in computer science while specializing in
                  AI and Data Science. My goal is to bridge the gap between theoretical
                  knowledge and real-world applications.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Artificial Intelligence", "Machine Learning", "Data Science"].map((tag) => (
                <span key={tag} className="px-5 py-2.5 bg-white rounded-full text-[14px] font-medium text-[#444444] border border-[#00000008] shadow-sm font-sans">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.2 }}
              className="bg-white p-10 rounded-[24px] shadow-sm"
            >
              <div className="mb-6">
                <GraduationCap className="w-8 h-8 text-[#c2a27c]" />
              </div>
              <h3 className="text-[22px] font-sans font-bold text-[#111111] mb-4">Education</h3>
              <p className="text-[16px] font-medium text-[#444444] mb-1">{education.degree}</p>
              <p className="text-[14px] text-gray-500 mb-4">{education.college}</p>
              <p className="text-[13px] font-semibold text-[#c2a27c] tracking-wide">{education.grad}</p>
            </motion.div>

            <motion.div 
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.3 }}
              className="bg-white p-10 rounded-[24px] shadow-sm"
            >
              <div className="mb-6">
                <Heart className="w-8 h-8 text-[#c2a27c]" />
              </div>
              <h3 className="text-[22px] font-sans font-bold text-[#111111] mb-6">Focus Areas</h3>
              <ul className="space-y-4">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-[#444444] text-[15px] font-medium font-sans">
                    <div className="w-1.5 h-1.5 bg-[#444444] rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* My Journey Section */}
        <div className="pt-10">
          <motion.h2 
            {...RevealProps}
            className="text-[48px] md:text-[64px] font-serif font-bold mb-20 text-center text-[#111111]"
          >
            My Journey
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-[#e5e0d8] md:-translate-x-1/2" />
            
            <div className="space-y-12">
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
                  <div className="w-full pl-16 md:pl-0 md:w-5/12">
                    <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm text-left">
                      <h3 className="text-[22px] font-sans font-bold text-[#111111] mb-3">{item.title}</h3>
                      <p className="text-[#4b5563] leading-relaxed text-[15px] font-sans">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Middle Dot */}
                  <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] bg-[#c2a27c] rounded-full z-10 box-content border-[4px] border-[#f2f0ea]" />
                  
                  {/* Empty space for opposite side */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="pt-10">
          <motion.h2 
            {...RevealProps}
            className="text-[48px] md:text-[64px] font-serif font-bold mb-16 text-center text-[#111111]"
          >
            Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                {...RevealProps}
                transition={{ ...RevealProps.transition, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[24px] shadow-sm text-center flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6">
                  <Medal className="w-10 h-10 text-[#c2a27c]" />
                </div>
                <h3 className="text-[20px] font-sans font-bold text-[#111111] mb-3">{item.title}</h3>
                <p className="text-[#4b5563] text-[15px] leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="pt-10 mb-20">
          <motion.h2 
            {...RevealProps}
            className="text-[48px] md:text-[64px] font-serif font-bold mb-16 text-center text-[#111111]"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((item, idx) => (
              <motion.div
                key={idx}
                {...RevealProps}
                transition={{ ...RevealProps.transition, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[24px] shadow-sm flex flex-col items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-14 h-14 bg-[#f8f6f0] rounded-[16px] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-[18px] font-sans font-bold text-[#111111] leading-snug mb-2">{item.title}</h3>
                <p className="text-[#c2a27c] text-[13px] font-semibold mb-6">{item.provider}</p>
                <p className="text-[#4b5563] text-[15px] leading-relaxed font-sans mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
