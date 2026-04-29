"use client";

import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#f8f6f0] print:bg-white py-24 px-6 md:px-12 print:py-0 print:px-0 font-sans text-[#111111]">
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
      <div className="max-w-4xl mx-auto print:max-w-none">
        <div className="mb-8 flex justify-between items-center print:hidden">
          <Link href="/" className="inline-flex items-center gap-2 text-[#444444] hover:text-[#c2a27c] transition-colors font-medium">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#c2a27c] transition-colors"
          >
            <Download size={16} /> Print / Save PDF
          </button>
        </div>

        <div className="bg-white p-10 md:p-16 print:p-0 rounded-[24px] print:rounded-none shadow-sm print:shadow-none border border-black/5 print:border-none">
          {/* Header */}
          <div className="border-b-2 border-[#111111] pb-6 mb-8 print:pb-3 print:mb-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#111111] mb-2 print:text-4xl">Arpit Jain</h1>
            <p className="text-[#c2a27c] text-lg font-medium mb-4 print:text-base print:mb-2">Machine Learning Engineer | AI & Data Science</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#4b5563] text-sm print:text-[12px]">
              <span className="flex items-center gap-1.5"><Mail size={14} /> arpitjain1402@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone size={14} /> +91-6350307216</span>
              <span className="flex items-center gap-1.5"><ExternalLink size={14} /> linkedin.com/in/arpit-jain-87850637a</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Bhilwara, Rajasthan, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8 print:mb-4">
            <h2 className="text-[16px] print:text-[14px] font-bold text-[#111111] tracking-widest uppercase mb-4 print:mb-2 border-b border-gray-200 pb-2 print:pb-1">Professional Summary</h2>
            <p className="text-[#4b5563] text-[15px] print:text-[13px] leading-relaxed">
              Results-driven AIML student (SGPA 9.34) with hands-on experience building and deploying end-to-end ML pipelines. Proven track record of shipping production-ready systems — from a KNN-based disease prediction model to a multilingual NLP health platform. Strong foundation in Python, Scikit-Learn, and data engineering, with full-stack development experience (Node.js, REST APIs). Actively pursuing ML Engineer / Data Science internship roles.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8 print:mb-4">
            <h2 className="text-[16px] print:text-[14px] font-bold text-[#111111] tracking-widest uppercase mb-4 print:mb-2 border-b border-gray-200 pb-2 print:pb-1">Education</h2>
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-bold text-[#111111] text-[16px] print:text-[14px]">JECRC University, Jaipur</h3>
                <p className="text-[#4b5563] text-[15px] print:text-[13px]">Bachelor of Computer Applications — AI & Data Science</p>
              </div>
              <div className="text-right">
                <p className="text-[#111111] font-medium text-[15px] print:text-[13px]">2025 – 2028</p>
                <p className="text-[#c2a27c] font-bold text-[14px] print:text-[12px]">SGPA: 9.34 / 10</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8 print:mb-4">
            <h2 className="text-[16px] print:text-[14px] font-bold text-[#111111] tracking-widest uppercase mb-4 print:mb-2 border-b border-gray-200 pb-2 print:pb-1">Technical Skills</h2>
            <div className="grid grid-cols-[140px_1fr] print:grid-cols-[110px_1fr] gap-y-3 print:gap-y-1.5 text-[15px] print:text-[13px]">
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
          <section className="mb-8 print:mb-4">
            <h2 className="text-[16px] print:text-[14px] font-bold text-[#111111] tracking-widest uppercase mb-4 print:mb-2 border-b border-gray-200 pb-2 print:pb-1">Projects</h2>
            
            <div className="mb-6 print:mb-3">
              <h3 className="font-bold text-[#111111] text-[16px] print:text-[14px]">Heart Disease Prediction System</h3>
              <p className="text-[#c2a27c] text-[13px] print:text-[11px] font-medium mb-2 print:mb-1">Python • Scikit-Learn • KNN • Pandas • Matplotlib</p>
              <ul className="list-disc list-outside ml-4 text-[#4b5563] text-[15px] print:text-[13px] space-y-1 print:space-y-0.5">
                <li>Built an end-to-end classification pipeline achieving ~87% accuracy using K-Nearest Neighbours.</li>
                <li>Implemented feature selection, data preprocessing, and exploratory visualisation to improve model robustness.</li>
                <li>Packaged model with Pickle for reusable inference; ready for API integration.</li>
              </ul>
            </div>

            <div className="mb-6 print:mb-3">
              <h3 className="font-bold text-[#111111] text-[16px] print:text-[14px]">Streamlit ML Deployment App</h3>
              <p className="text-[#c2a27c] text-[13px] print:text-[11px] font-medium mb-2 print:mb-1">Python • Streamlit • Pickle • Scikit-Learn</p>
              <ul className="list-disc list-outside ml-4 text-[#4b5563] text-[15px] print:text-[13px] space-y-1 print:space-y-0.5">
                <li>Developed and deployed a real-time ML inference web app with an interactive UI.</li>
                <li>Demonstrated full MLOps cycle: training → serialisation (Pickle) → live deployment.</li>
              </ul>
            </div>

            <div className="mb-2 print:mb-0">
              <h3 className="font-bold text-[#111111] text-[16px] print:text-[14px]">Samjho AI — Full-Stack Business Website</h3>
              <p className="text-[#c2a27c] text-[13px] print:text-[11px] font-medium mb-2 print:mb-1">Node.js • Express • HTML/CSS/JS • REST APIs</p>
              <ul className="list-disc list-outside ml-4 text-[#4b5563] text-[15px] print:text-[13px] space-y-1 print:space-y-0.5">
                <li>Architected a standalone Node.js backend with authentication, REST APIs, and admin dashboard.</li>
                <li>Delivered a production-grade frontend in vanilla JS with responsive design — no framework dependencies.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-[16px] print:text-[14px] font-bold text-[#111111] tracking-widest uppercase mb-4 print:mb-2 border-b border-gray-200 pb-2 print:pb-1">Certifications</h2>
            <ul className="list-disc list-outside ml-4 text-[#4b5563] text-[15px] print:text-[13px] space-y-2 print:space-y-0.5">
              <li><strong className="text-[#111111] font-semibold">Deloitte Data Analytics Virtual Experience</strong> — Forage</li>
              <li><strong className="text-[#111111] font-semibold">Generative AI Virtual Experience</strong> — Forage</li>
              <li><strong className="text-[#111111] font-semibold">Claude Code in Action</strong> — Anthropic</li>
            </ul>
          </section>
          
        </div>
      </div>
    </div>
  );
}
