
"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#f2f0ea] min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div {...RevealProps} className="mb-12">
          <h1 className="text-6xl md:text-[72px] font-serif font-bold text-[#111111]">
            Contact
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">

          {/* Left Form Side */}
          <motion.div
            {...RevealProps}
            transition={{ ...RevealProps.transition, delay: 0.1 }}
            className="bg-white p-10 md:p-12 rounded-[24px] shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-sans font-medium text-[#444444]">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#e5e5e5] rounded-[6px] focus:border-[#c2a27c] outline-none transition-colors font-sans text-[15px]"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-sans font-medium text-[#444444]">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#e5e5e5] rounded-[6px] focus:border-[#c2a27c] outline-none transition-colors font-sans text-[15px]"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-sans font-medium text-[#444444]">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-[#e5e5e5] rounded-[6px] focus:border-[#c2a27c] outline-none transition-colors font-sans text-[15px]"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-sans font-medium text-[#444444]">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-[#e5e5e5] rounded-[6px] focus:border-[#c2a27c] outline-none transition-colors resize-none font-sans text-[15px]"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#111111] text-white py-4 mt-2 rounded-xl flex items-center justify-center gap-2 hover:bg-[#222222] transition-colors duration-300 font-sans font-medium text-[15px] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={16} className={cn(!isSending && "transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform")} />
              </button>

              {status.type && (
                <div className={cn(
                  "p-4 rounded-xl text-center font-sans font-medium text-sm mt-4",
                  status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                )}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Info Side */}
          <div className="space-y-8">
            <motion.div
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.2 }}
              className="bg-[#111111] p-10 rounded-[24px] text-white h-fit"
            >
              <h2 className="text-[28px] font-sans font-semibold mb-3">Connect</h2>
              <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
                Follow me on social media to stay updated with my latest projects.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <a href="https://github.com/ArpitJain-coder" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#c2a27c] hover:text-white text-gray-300 rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 transition-colors duration-300 group">
                  <FaGithub size={24} />
                  <span className="font-sans text-xs font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/arpit-jain-87850637a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#c2a27c] hover:text-white text-gray-300 rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 transition-colors duration-300 group">
                  <FaLinkedin size={24} />
                  <span className="font-sans text-xs font-medium">LinkedIn</span>
                </a>
                <a href="https://twitter.com/arpitjain" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-[#c2a27c] hover:text-white text-gray-300 rounded-[16px] p-6 flex flex-col items-center justify-center gap-3 transition-colors duration-300 group">
                  <FaTwitter size={24} />
                  <span className="font-sans text-xs font-medium">Twitter</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              {...RevealProps}
              transition={{ ...RevealProps.transition, delay: 0.3 }}
              className="bg-[#ede9df] p-8 rounded-[24px] flex items-start gap-4"
            >
              <CheckCircle2 size={24} className="text-[#c2a27c] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans font-bold text-[#111111] text-lg mb-2">Quick Response</h3>
                <p className="font-sans text-[#444444] text-[15px] leading-relaxed">
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
