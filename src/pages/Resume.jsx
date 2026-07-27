import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../utils/Icon'

const PROJECTS = [
  {
    title: 'Telecom Customer Churn Prediction',
    date: 'May 2026',
    link: 'https://churnai-c7dt.vercel.app/',
    bullets: [
      { label: 'Problem', text: 'Telecom companies face unexpected revenue loss due to latent customer churn patterns.' },
      { label: 'Solution', text: 'Developed a predictive modeling pipeline executing rigorous data cleaning, feature engineering, and hyperparameter tuning on large-scale telecom datasets.' },
      { label: 'Technologies Used', text: 'Python, pandas, scikit-learn, XGBoost, Matplotlib, Seaborn, Vercel' },
      { label: 'Impact/Results', text: 'Trained advanced classification algorithms (XGBoost, Random Forest), achieving 87% predictive accuracy and enabling proactive retention strategies.' },
    ],
  },
  {
    title: 'Medical Report Simplification',
    date: 'April 2026',
    link: 'https://medical-report-simplification.vercel.app/',
    bullets: [
      { label: 'Problem', text: 'Patients often struggle to comprehend complex clinical terminology in standard medical reports.' },
      { label: 'Solution', text: 'Engineered an end-to-end text summarization pipeline leveraging transformer-based abstractive summarization techniques.' },
      { label: 'Technologies Used', text: 'Python, Transformers, NLP, NumPy, Vercel' },
      { label: 'Impact/Results', text: 'Reduced reading comprehension barriers by delivering highly accurate, simplified report summaries deployed via an accessible web interface.' },
    ],
  },
  {
    title: 'Heart Disease Prediction',
    date: 'April 2026',
    link: '',
    bullets: [
      { label: 'Problem', text: 'Early detection of cardiovascular risks is challenging without automated, data-driven analytical tools.' },
      { label: 'Solution', text: 'Conducted comprehensive EDA, data visualization, and utilized supervised learning methods to classify patient risk profiles.' },
      { label: 'Technologies Used', text: 'Python, scikit-learn, KNN, Random Forest, pandas, Matplotlib, GitHub' },
      { label: 'Impact/Results', text: 'Delivered robust model evaluation metrics, securing an 85% accuracy rate in early disease detection classification.' },
    ],
  },
  {
    title: 'Movie Recommendation System',
    date: 'March 2026',
    link: 'https://movie-recommendation-system-alpha-ten.vercel.app/',
    bullets: [
      { label: 'Problem', text: 'Overwhelmed users face decision paralysis trying to locate relevant cinematic content from thousands of titles.' },
      { label: 'Solution', text: 'Engineered a hybrid recommendation engine utilizing TF-IDF vectorization and Cosine Similarity on metadata.' },
      { label: 'Technologies Used', text: 'Python, pandas, scikit-learn, NLP, Cosine Similarity, NLTK, Streamlit, Vercel' },
      { label: 'Impact/Results', text: 'Developed an interactive Streamlit UI rendering dynamic top-10 recommended titles with sub-second retrieval latency.' },
    ],
  },
]

export default function Resume() {
  const [isPaper, setIsPaper] = useState(false)

  return (
    <div className={`min-h-screen relative p-4 md:p-8 flex flex-col items-center${isPaper ? ' paper-mode' : ' bg-[#050505]'}`}>
      {/* Noise overlay */}
      <div className="noise-overlay no-print" />

      {/* ── Control Header ── */}
      <header className="w-full max-w-4xl flex flex-wrap justify-between items-center gap-4 mb-8 no-print z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <Icon icon="lucide:arrow-left" className="text-sm" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPaper(p => !p)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Icon icon={isPaper ? 'lucide:moon' : 'lucide:sun'} className="text-sm" />
            {isPaper ? 'Toggle Dark Sheet' : 'Toggle Light Sheet'}
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:scale-105 hover:bg-gray-100 transition-all duration-300"
          >
            <Icon icon="lucide:printer" className="text-sm" />
            Print / Save PDF
          </button>
        </div>
      </header>

      {/* ── Resume Sheet ── */}
      <main className={`w-full max-w-4xl border rounded-3xl p-6 md:p-12 shadow-2xl transition-colors duration-300 resume-sheet mb-12${isPaper ? '' : ' bg-[#111] border-white/5'}`}>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase font-serif">Arpit Jain</h1>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400 font-mono">
            <a href="mailto:arpitjain1402@gmail.com" className="hover:text-[#FF4500] transition-colors">arpitjain1402@gmail.com</a>
            <span>•</span>
            <span>Jaipur, Rajasthan</span>
          </div>
        </div>

        {/* Objective */}
        <section className="mb-8">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#4ba4e3] section-heading transition-colors duration-300">Objective</h2>
          <div className="w-full border-b border-white/10 my-2 section-line" />
          <p className="text-xs md:text-sm leading-relaxed font-light text-gray-300 transition-colors duration-300">
            First-year BCA (AI &amp; Data Science) student at JECRC University, Jaipur, learning to become an AI Engineer through hands-on project building. Looking for an internship where I can contribute to real datasets, keep learning, and grow faster than a classroom allows.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#4ba4e3] section-heading transition-colors duration-300">Technical Skills</h2>
          <div className="w-full border-b border-white/10 my-2 section-line" />
          <ul className="space-y-2 text-xs md:text-sm text-gray-300 transition-colors duration-300">
            <li className="bullet-item"><strong className="font-medium text-white transition-colors duration-300">Languages &amp; Core Concepts:</strong> Python, SQL, C, OOP, DBMS</li>
            <li className="bullet-item"><strong className="font-medium text-white transition-colors duration-300">Machine Learning &amp; Data Science:</strong> Classification Algorithms, Supervised Learning, Predictive Modeling, NLP (Natural Language Processing), Data Cleaning, Feature Engineering, Model Evaluation, Hyperparameter Tuning, EDA, Data Visualization</li>
            <li className="bullet-item"><strong className="font-medium text-white transition-colors duration-300">Libraries &amp; Frameworks:</strong> pandas, NumPy, scikit-learn, Matplotlib, Seaborn, NLTK, Transformers</li>
            <li className="bullet-item"><strong className="font-medium text-white transition-colors duration-300">Tools &amp; Deployment:</strong> GitHub, Jupyter Notebook, VS Code, Vercel</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#4ba4e3] section-heading transition-colors duration-300">Projects</h2>
          <div className="w-full border-b border-white/10 my-2 section-line" />
          <div className="space-y-6">
            {PROJECTS.map(proj => (
              <div key={proj.title}>
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3 className="text-sm md:text-base font-bold text-white transition-colors duration-300 flex items-center gap-2">
                    {proj.title}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4ba4e3] hover:underline font-mono text-xs font-normal no-print"
                      >
                        [Live Demo ↗]
                      </a>
                    )}
                  </h3>
                </div>
                <ul className="space-y-1 text-xs md:text-sm text-gray-300 transition-colors duration-300">
                  {proj.bullets.map(b => (
                    <li key={b.label} className="bullet-item">
                      <strong className="font-medium text-white/90">{b.label}:</strong> {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#4ba4e3] section-heading transition-colors duration-300">Education</h2>
          <div className="w-full border-b border-white/10 my-2 section-line" />
          <div className="flex justify-between items-baseline gap-4 text-xs md:text-sm text-gray-300 transition-colors duration-300">
            <div>
              <h3 className="font-bold text-white transition-colors duration-300 text-sm md:text-base">JECRC University, Jaipur</h3>
              <p className="font-light text-white/95 mt-1 transition-colors duration-300">BCA (Artificial Intelligence &amp; Data Science)</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-4">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#4ba4e3] section-heading transition-colors duration-300">Certifications</h2>
          <div className="w-full border-b border-white/10 my-2 section-line" />
          <ul className="space-y-1.5 text-xs md:text-sm text-gray-300 transition-colors duration-300">
            <li className="bullet-item">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <strong className="font-medium text-white transition-colors duration-300">Claude Code in Action</strong> – Anthropic <span className="text-[#4ba4e3] text-xs font-mono no-print">[LinkedIn ↗]</span>
              </a>
            </li>
            <li className="bullet-item">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <strong className="font-medium text-white transition-colors duration-300">Data Analytics Job Simulation</strong> – Deloitte Australia <span className="text-[#4ba4e3] text-xs font-mono no-print">[LinkedIn ↗]</span>
              </a>
            </li>
            <li className="bullet-item">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <strong className="font-medium text-white transition-colors duration-300">GenAI Powered Data Analytics Job Simulation</strong> – Tata <span className="text-[#4ba4e3] text-xs font-mono no-print">[LinkedIn ↗]</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
