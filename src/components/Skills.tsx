"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Terminal, 
  GitBranch, 
  FileCode2, 
  Database,
  Users,
  Lightbulb,
  Handshake,
  MessageSquare
} from "lucide-react";

const hardSkillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 85, icon: <Code2 size={20} /> },
      { name: "C++", level: 75, icon: <Code2 size={20} /> },
      { name: "SQL", level: 80, icon: <Code2 size={20} /> },
      { name: "JavaScript", level: 65, icon: <Code2 size={20} /> },
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", level: 70, icon: <BrainCircuit size={20} /> },
      { name: "Data Analysis", level: 75, icon: <BrainCircuit size={20} /> },
      { name: "Pandas & NumPy", level: 80, icon: <BrainCircuit size={20} /> },
      { name: "Neural Networks", level: 60, icon: <BrainCircuit size={20} /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <GitBranch size={20} /> },
      { name: "VS Code", level: 90, icon: <Terminal size={20} /> },
      { name: "Jupyter Notebook", level: 85, icon: <FileCode2 size={20} /> },
      { name: "MySQL", level: 75, icon: <Database size={20} /> },
    ],
  },
];

const softSkills = [
  { name: "Leadership", icon: <Users size={24} /> },
  { name: "Problem Solving", icon: <Lightbulb size={24} /> },
  { name: "Team Collaboration", icon: <Handshake size={24} /> },
  { name: "Communication", icon: <MessageSquare size={24} /> },
];

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#f8f6f0] min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Header */}
        <motion.div {...RevealProps} className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-[72px] font-serif font-bold text-[#111111] mb-6 leading-tight">
            Skills
          </h1>
          <p className="text-xl text-[#444444] font-sans">
            A comprehensive overview of my technical expertise, programming languages, and tools I use to build intelligent systems.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {hardSkillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: idx * 0.1 }}
            >
              <h2 className="text-[28px] font-sans font-semibold text-[#111111] mb-8">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-black/5"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 shrink-0 bg-[#f8f6f0] rounded-[14px] flex items-center justify-center text-[#c2a27c]">
                        {skill.icon}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-center px-1">
                          <h3 className="font-sans font-bold text-[15px] tracking-wide text-[#111111]">{skill.name}</h3>
                          <span className="font-sans text-xs font-semibold tracking-wider text-[#c2a27c]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-[#f8f6f0] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 + (sIdx * 0.1) }}
                            className="h-full bg-[#c2a27c] rounded-full transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Soft Skills Section */}
          <motion.div
            {...RevealProps}
            transition={{ ...RevealProps.transition, delay: 0.2 }}
          >
            <h2 className="text-[28px] font-sans font-semibold text-[#111111] mb-8">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, sIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                  className="bg-white p-8 py-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-6 border border-black/5"
                >
                  <div className="w-16 h-16 bg-[#f8f6f0] rounded-2xl flex items-center justify-center text-[#c2a27c]">
                    {skill.icon}
                  </div>
                  <h3 className="font-sans font-bold text-[15px] tracking-wide text-[#111111] text-center">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
