"use client";

import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] print:bg-white py-24 px-8 md:px-12 print:py-0 print:px-0 font-sans text-[#111111]">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { margin: 0.8cm; }
          html, body { 
            background-color: white !important; 
            color: black !important; 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
        }
      `}} />
      <div className="max-w-5xl mx-auto print:max-w-none">
        <div className="mb-12 flex justify-between items-center print:hidden">
          <Link href="/" className="inline-flex items-center gap-3 text-[#4b5563] hover:text-[#111111] transition-all font-bold uppercase tracking-widest text-xs">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-3 bg-[#111111] text-white px-8 py-3 rounded-full text-[14px] font-bold hover:bg-[#C2A27C] transition-all shadow-sm"
          >
            <Download size={18} /> Print / Save PDF
          </button>
        </div>

        <div className="bg-white p-12 md:p-20 print:p-0 rounded-[40px] print:rounded-none shadow-sm print:shadow-none border border-black/5 print:border-none">
          {/* Header */}
          <div className="border-b-2 border-[#111111] pb-10 mb-12 print:pb-4 print:mb-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111111] mb-4 print:text-4xl tracking-tight">Arpit Jain</h1>
            <p className="text-[#C2A27C] text-xl font-bold mb-6 print:text-base print:mb-3 uppercase tracking-[0.1em]">Machine Learning Engineer | AI & Data Science</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[#4b5563] text-sm print:text-[12px] font-medium">
              <span className="flex items-center gap-2"><Mail size={16} className="text-[#C2A27C]" /> arpitjain1402@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={16} className="text-[#C2A27C]" /> +91-6350307216</span>
              <span className="flex items-center gap-2"><ExternalLink size={16} className="text-[#C2A27C]" /> linkedin.com/in/arpit-jain-87850637a</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-[#C2A27C]" /> Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-12 print:mb-6">
            <h2 className="text-[14px] print:text-[12px] font-bold text-[#111111] tracking-[0.3em] uppercase mb-6 print:mb-3 border-b border-gray-100 pb-3 print:pb-1">Professional Summary</h2>
            <p className="text-[#4b5563] text-[16px] print:text-[13px] leading-relaxed font-medium">
              Results-driven AIML student (SGPA 9.34) with hands-on experience building and deploying end-to-end ML pipelines. Proven track record of shipping production-ready systems — from a KNN-based disease prediction model to a multilingual NLP health platform. Strong foundation in Python, Scikit-Learn, and data engineering, with full-stack development experience (Node.js, REST APIs). Actively pursuing ML Engineer / Data Science internship roles.
            </p>
          </section>

          {/* Education */}
          <section className="mb-12 print:mb-6">
            <h2 className="text-[14px] print:text-[12px] font-bold text-[#111111] tracking-[0.3em] uppercase mb-6 print:mb-3 border-b border-gray-100 pb-3 print:pb-1">Education</h2>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-[#111111] text-lg print:text-[14px]">JECRC University, Jaipur</h3>
                <p className="text-[#4b5563] text-[16px] print:text-[13px] font-medium">Bachelor of Computer Applications — AI & Data Science</p>
              </div>
              <div className="text-right">
                <p className="text-[#111111] font-bold text-[16px] print:text-[13px]">2025 – 2028</p>
                <p className="text-[#C2A27C] font-bold text-[15px] print:text-[12px]">SGPA: 9.34 / 10</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12 print:mb-6">
            <h2 className="text-[14px] print:text-[12px] font-bold text-[#111111] tracking-[0.3em] uppercase mb-6 print:mb-3 border-b border-gray-100 pb-3 print:pb-1">Technical Skills</h2>
            <div className="grid grid-cols-[160px_1fr] print:grid-cols-[110px_1fr] gap-y-4 print:gap-y-2 text-[16px] print:text-[13px] font-medium">
              <div className="font-bold text-[#111111]">Languages:</div>
              <div className="text-[#4b5563]">Python, SQL, C++</div>
              
              <div className="font-bold text-[#111111]">ML:</div>
              <div className="text-[#4b5563]">Regression, Classification, Feature Engineering, Model Optimization</div>
              
              <div className="font-bold text-[#111111]">Frameworks:</div>
              <div className="text-[#4b5563]">Scikit-Learn, Pandas, NumPy, Streamlit</div>
              
              <div className="font-bold text-[#111111]">Dev Tools:</div>
              <div className="text-[#4b5563]">Git, GitHub, Pickle</div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12 print:mb-6">
            <h2 className="text-[14px] print:text-[12px] font-bold text-[#111111] tracking-[0.3em] uppercase mb-6 print:mb-3 border-b border-gray-100 pb-3 print:pb-1">Projects</h2>
            
            <div className="mb-8 print:mb-4">
              <h3 className="font-bold text-[#111111] text-lg print:text-[14px] mb-1">Heart Disease Prediction System</h3>
              <p className="text-[#C2A27C] text-[14px] print:text-[11px] font-bold uppercase tracking-wider mb-3 print:mb-1">Python • Scikit-Learn • KNN • Pandas • Matplotlib</p>
              <ul className="list-disc list-outside ml-5 text-[#4b5563] text-[15px] print:text-[13px] space-y-2 print:space-y-0.5 font-medium">
                <li>Built an end-to-end classification pipeline achieving ~87% accuracy using K-Nearest Neighbours.</li>
                <li>Implemented feature selection, data preprocessing, and exploratory visualisation to improve model robustness.</li>
                <li>Packaged model with Pickle for reusable inference; ready for API integration.</li>
              </ul>
            </div>

            <div className="mb-8 print:mb-4">
              <h3 className="font-bold text-[#111111] text-lg print:text-[14px] mb-1">Streamlit ML Deployment App</h3>
              <p className="text-[#C2A27C] text-[14px] print:text-[11px] font-bold uppercase tracking-wider mb-3 print:mb-1">Python • Streamlit • Pickle • Scikit-Learn</p>
              <ul className="list-disc list-outside ml-5 text-[#4b5563] text-[15px] print:text-[13px] space-y-2 print:space-y-0.5 font-medium">
                <li>Developed and deployed a real-time ML inference web app with an interactive UI.</li>
                <li>Demonstrated full MLOps cycle: training → serialisation (Pickle) → live deployment.</li>
              </ul>
            </div>

            <div className="mb-2 print:mb-0">
              <h3 className="font-bold text-[#111111] text-lg print:text-[14px] mb-1">Samjho AI — Full-Stack Business Website</h3>
              <p className="text-[#C2A27C] text-[14px] print:text-[11px] font-bold uppercase tracking-wider mb-3 print:mb-1">Node.js • Express • HTML/CSS • REST APIs</p>
              <ul className="list-disc list-outside ml-5 text-[#4b5563] text-[15px] print:text-[13px] space-y-2 print:space-y-0.5 font-medium">
                <li>Architected a standalone Node.js backend with authentication, REST APIs, and admin dashboard.</li>
                <li>Delivered a production-grade frontend in vanilla CSS with responsive design — no framework dependencies.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-[14px] print:text-[12px] font-bold text-[#111111] tracking-[0.3em] uppercase mb-6 print:mb-3 border-b border-gray-100 pb-3 print:pb-1">Certifications</h2>
            <ul className="list-disc list-outside ml-5 text-[#4b5563] text-[15px] print:text-[13px] space-y-3 print:space-y-1 font-medium">
              <li><strong className="text-[#111111] font-bold">Deloitte Data Analytics Virtual Experience</strong> — Forage</li>
              <li><strong className="text-[#111111] font-bold">Generative AI Virtual Experience</strong> — Forage</li>
              <li><strong className="text-[#111111] font-bold">Claude Code in Action</strong> — Anthropic</li>
            </ul>
          </section>
          
        </div>
      </div>
    </div>
  );
}
