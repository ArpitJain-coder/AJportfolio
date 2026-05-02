
"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

const RevealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "41a05b77-e6e4-4b8f-b382-5eeb907740cf",
          ...formData
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully! I will get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-12 bg-[#f8f5f2] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div {...RevealProps} className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] leading-[1] tracking-tight">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-[#444444] font-sans font-medium mt-6 max-w-2xl">
            Let's build something intelligent together. Reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">

          {/* Left Form Side */}
          <motion.div
            {...RevealProps}
            transition={{ ...RevealProps.transition, delay: 0.1 }}
            className="bg-white p-12 md:p-16 rounded-[32px] shadow-sm border border-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[14px] font-sans font-bold text-[#111111] uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-[#f8f5f2] border-none rounded-[16px] focus:ring-2 focus:ring-[#C2A27C] outline-none transition-all font-sans text-[16px] font-medium"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[14px] font-sans font-bold text-[#111111] uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 bg-[#f8f5f2] border-none rounded-[16px] focus:ring-2 focus:ring-[#C2A27C] outline-none transition-all font-sans text-[16px] font-medium"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[14px] font-sans font-bold text-[#111111] uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 bg-[#f8f5f2] border-none rounded-[16px] focus:ring-2 focus:ring-[#C2A27C] outline-none transition-all font-sans text-[16px] font-medium"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[14px] font-sans font-bold text-[#111111] uppercase tracking-wider">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-6 py-4 bg-[#f8f5f2] border-none rounded-[16px] focus:ring-2 focus:ring-[#C2A27C] outline-none transition-all font-sans text-[16px] font-medium resize-none"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#111111] text-white py-5 mt-4 rounded-[20px] flex items-center justify-center gap-3 hover:bg-black transition-all duration-300 font-sans font-bold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={18} className={cn(!isSending && "transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform")} />
              </button>

              {status.type && (
                <div className={cn(
                  "p-6 rounded-[20px] text-center font-sans font-bold text-[15px] mt-6",
                  status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                )}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Info Side */}
          <div className="space-y-12">
            <motion.div
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.2 }}
              className="bg-[#111111] p-12 md:p-16 rounded-[40px] text-white h-fit shadow-xl"
            >
              <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight">Connect</h2>
              <p className="text-gray-400 font-sans text-lg leading-relaxed mb-10 font-medium">
                Follow me on social media to stay updated with my latest projects and insights in AI & Data Science.
              </p>

              <div className="flex flex-col gap-4">
                <a href="https://github.com/ArpitJain-coder" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white hover:text-[#111111] border border-white/10 rounded-[20px] px-8 py-5 flex items-center gap-4 transition-all duration-300 group">
                  <FaGithub size={24} />
                  <span className="font-sans text-lg font-bold">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/arpit-jain-87850637a" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#0077b5] hover:text-white border border-white/10 rounded-[20px] px-8 py-5 flex items-center gap-4 transition-all duration-300 group">
                  <FaLinkedin size={24} />
                  <span className="font-sans text-lg font-bold">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.3 }}
              className="bg-white p-12 rounded-[40px] flex items-start gap-6 border border-black/5 shadow-sm"
            >
              <div className="w-16 h-16 bg-[#f8f5f2] rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 size={32} className="text-[#C2A27C]" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-[#111111] text-2xl mb-3 tracking-tight">Quick Response</h3>
                <p className="font-sans text-[#4b5563] text-lg leading-relaxed font-medium">
                  I typically respond to messages within 24-48 hours. Looking forward to connecting with you!
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
