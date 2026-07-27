import { useEffect, useState } from 'react'
import PillNav from '../components/PillNav'
import Silk from '../components/Silk'
import Icon from '../utils/Icon'

const NAV_ITEMS = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume',    href: '/resume' },
  { label: 'Contact',   href: 'mailto:arpitjain1402@gmail.com' },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(undefined)
  const [currentTime, setCurrentTime]     = useState('')

  /* ── Clock ── */
  useEffect(() => {
    function tick() {
      const now  = new Date()
      let h      = now.getHours()
      const m    = now.getMinutes().toString().padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      setCurrentTime(`${h}:${m} ${ampm}`)
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  /* ── Preloader ── */
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    const bar       = document.getElementById('preloader-bar')
    if (!preloader || !bar) return
    const t1 = setTimeout(() => { bar.style.width = '100%' }, 100)
    const t2 = setTimeout(() => {
      preloader.style.opacity       = '0'
      preloader.style.pointerEvents = 'none'
    }, 700)
    const t3 = setTimeout(() => { preloader.style.display = 'none' }, 1400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  /* ── Reveal on Scroll ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* ── Active Section (PillNav highlight) ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(`#${e.target.id}`) }),
      { threshold: 0.35 }
    )
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  /* ── Parallax + Hero Fade (desktop only) ── */
  useEffect(() => {
    const hw = document.getElementById('hero-content-wrapper')
    const onScroll = () => {
      const s    = window.scrollY
      const wide = window.innerWidth >= 768

      /* Parallax — disabled on mobile to prevent layout bleed */
      document.querySelectorAll('.parallax-card-up').forEach(el =>
        el.style.setProperty('--scroll-offset-up',   wide ? `${s * -0.05}px` : '0px'))
      document.querySelectorAll('.parallax-card-down').forEach(el =>
        el.style.setProperty('--scroll-offset-down', wide ? `${s * 0.05}px`  : '0px'))

      /* Hero content fade */
      if (hw && s < 1000) {
        const factor  = wide ? 0.4   : 0.15
        const fadeEnd = wide ? 600   : 350
        hw.style.transform = `translateY(${s * factor}px)`
        hw.style.opacity   = String(Math.max(0, 1 - s / fadeEnd))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#FF4500] selection:text-white overflow-x-hidden">

      {/* ── Preloader ── */}
      <div id="preloader" style={{
        position: 'fixed', inset: 0, background: '#050505', zIndex: 9999,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', transition: 'opacity 0.7s',
      }}>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'absolute', width: '6rem', height: '6rem', background: 'rgba(255,69,0,0.2)', borderRadius: '50%', filter: 'blur(24px)', animation: 'pulse 2s ease-in-out infinite' }} />
          <div className="preloader-title">AJ.</div>
          <div style={{ width: '12rem', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
            <div id="preloader-bar" style={{ height: '100%', width: 0, background: '#FF4500', borderRadius: '999px', transition: 'width 0.5s ease-out' }} />
          </div>
        </div>
      </div>

      {/* ── Noise Overlay ── */}
      <div className="noise-overlay" />

      {/* ══════════════════════════════════
          PILL NAV — initialLoadAnimation={false}
          avoids the GSAP width:auto bug that
          leaves nav items permanently at width:0
          ══════════════════════════════════ */}
      <PillNav
        logo="/logo.svg"
        logoAlt="AJ Portfolio"
        items={NAV_ITEMS}
        activeHref={activeSection}
        baseColor="#0f0f0f"
        pillColor="#242424"
        hoveredPillTextColor="#FF4500"
        pillTextColor="rgba(255,255,255,0.6)"
        initialLoadAnimation={false}
      />

      {/* ══════════════════════════════════
          HERO — Silk WebGL background
          ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-28 md:pt-32 md:pb-20 bg-[#050505]">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Silk speed={4} scale={1} color="#8B3A20" noiseIntensity={1.5} rotation={0.2} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60 z-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center flex flex-col items-center justify-center h-full">
          <div id="hero-content-wrapper" className="max-w-4xl mx-auto w-full">
            <div className="reveal">
              <h1 className="text-4xl xs:text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-4 md:mb-6 text-[#ffe0e0] mix-blend-overlay font-serif"
                  style={{ textShadow: '0 0 12px rgba(255,255,255,0.71)' }}>
                Arpit Jain.<br />
                <span className="italic font-light text-[#ffe0e0]">AI/ML Learner.</span>
              </h1>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <p className="text-sm sm:text-base md:text-lg text-[#ffe0e0]/90 max-w-xl mx-auto mb-10 md:mb-16 font-light tracking-wide leading-relaxed mix-blend-overlay px-2"
                 style={{ textShadow: '0 0 12px rgba(255,255,255,0.71)' }}>
                Passionate about Machine Learning and AI. I transform complex, unstructured data into actionable insights by building predictive models that solve real-world problems.
              </p>
            </div>
            <div className="reveal flex flex-col items-center gap-4 md:gap-6" style={{ transitionDelay: '400ms' }}>
              <a href="#projects" className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-[#FF4500]/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative border border-white/20 bg-white/5 backdrop-blur-sm px-5 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-3 text-xs md:text-sm text-white/80 uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                  <span>Explore Projects</span>
                  <Icon icon="lucide:arrow-down" className="text-sm" />
                </div>
              </a>
              <div className="flex items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest mt-4 md:mt-8 font-mono">
                <span>{currentTime}</span>
                <span className="w-px h-3 bg-white/20" />
                <span>Jaipur, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ABOUT
          ══════════════════════════════════ */}
      <section id="about" className="scroll-mt-20 py-16 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-white/90 mb-6 md:mb-10 font-serif">
              Learning to become an <span className="italic text-[#FF4500]">AI Engineer</span> by building real-world projects.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
              Hi, I&apos;m <strong className="font-medium text-white">Arpit Jain (AJ)</strong> — a first-year BCA (AI &amp; Data Science) student at JECRC University, Jaipur, learning to become an AI Engineer. I&apos;m still early in my journey, but I learn by building — projects like customer churn prediction, heart disease prediction, and medical report simplification have taught me more than any course alone. Right now I&apos;m looking for an internship where I can keep learning and grow as an engineer.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SKILLS
          ══════════════════════════════════ */}
      <section id="skills" className="scroll-mt-20 py-16 md:py-32 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center reveal mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-4 md:mb-6">Technical Arsenal</h2>
            <p className="text-gray-400 font-light text-sm md:text-base">Tools and core concepts I use to transform raw data into intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
            {/* Core & Languages */}
            <div className="reveal border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-[#FF4500]/50 transition-all duration-500 glow-hover">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 md:mb-6">
                <Icon icon="lucide:code-2" className="text-[#FF4500] text-xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Core &amp; Languages</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                Solid foundational background in programming logic, object-oriented concepts, and relational databases.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'C', 'OOP', 'DBMS'].map(t => (
                  <span key={t} className="text-xs border border-white/10 bg-white/5 px-3 py-1 rounded-full text-white/80">{t}</span>
                ))}
              </div>
            </div>
            {/* Machine Learning */}
            <div className="reveal border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-[#FF4500]/50 transition-all duration-500 glow-hover" style={{ transitionDelay: '100ms' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 md:mb-6">
                <Icon icon="lucide:brain" className="text-[#FF4500] text-xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Machine Learning</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                Designing, training, tuning, and evaluating statistical learning models to predict metrics and classify data.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Supervised Learning', 'Classification', 'Predictive Modeling', 'NLP', 'EDA', 'Feature Engineering', 'Hyperparameter Tuning'].map(t => (
                  <span key={t} className="text-xs border border-white/10 bg-white/5 px-3 py-1 rounded-full text-white/80">{t}</span>
                ))}
              </div>
            </div>
            {/* Libraries & Tools */}
            <div className="reveal border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-[#FF4500]/50 transition-all duration-500 glow-hover" style={{ transitionDelay: '200ms' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 md:mb-6">
                <Icon icon="lucide:cpu" className="text-[#FF4500] text-xl md:text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Libraries &amp; Tools</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                Ecosystem tools leveraged to build, visualize, manage version control, and deploy active pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                {['pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'GitHub', 'Vercel', 'VS Code'].map(t => (
                  <span key={t} className="text-xs border border-white/10 bg-white/5 px-3 py-1 rounded-full text-white/80">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROJECTS
          ══════════════════════════════════ */}
      <section id="projects" className="scroll-mt-20 py-20 md:py-40 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="reveal mb-12 md:mb-32">
            <h2 className="text-4xl sm:text-5xl md:text-7xl text-center font-serif">
              Selected <br className="hidden sm:block" />
              <span className="italic">Predictive Works</span>
            </h2>
          </div>

          {/* 2-col grid on md+, single col on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">

            {/* ─ Project 1 — Orange ─ */}
            <div className="parallax-card-down">
              <a
                href="https://churnai-c7dt.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal bg-[#FF4500] rounded-2xl md:rounded-3xl p-6 md:p-10
                           flex flex-col justify-between min-h-[380px] md:aspect-[4/5] md:min-h-0
                           shadow-2xl hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)]
                           transition-all duration-500 group cursor-pointer block text-black"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <Icon icon="lucide:trending-up" className="text-black text-xl md:text-2xl" />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-wider bg-black/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    Live Demo <Icon icon="lucide:external-link" className="text-xs" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight tracking-tight font-serif">
                    Telecom Customer <br />Churn Prediction
                  </h3>
                  <p className="text-black/80 text-xs md:text-sm mb-3 leading-relaxed">
                    <strong>Problem:</strong> Telecom companies face unexpected revenue loss due to latent customer churn patterns.
                  </p>
                  <p className="text-black/70 text-xs md:text-sm leading-relaxed">
                    <strong>Solution:</strong> Developed a predictive pipeline executing data cleaning, feature engineering, and hyperparameter tuning.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {['Python', 'XGBoost', 'scikit-learn', 'Vercel'].map(t => (
                      <span key={t} className="text-[10px] bg-black/10 text-black px-2 py-0.5 rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                  <div className="w-full h-px bg-black/10 mb-3 md:mb-4" />
                  <div className="flex justify-between items-center text-black">
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">87% Predictive Accuracy</span>
                    <Icon icon="lucide:arrow-up-right" className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>

            {/* ─ Project 2 — Dark ─ */}
            <div className="parallax-card-up md:mt-12">
              <a
                href="https://medical-report-simplification.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10
                           flex flex-col justify-between min-h-[380px] md:aspect-[4/5] md:min-h-0
                           shadow-2xl group cursor-pointer hover:border-[#FF4500]/50
                           transition-all duration-500 block text-white"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon icon="lucide:file-text" className="text-white text-xl md:text-2xl" />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 text-[#FF4500] px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
                    Live Demo <Icon icon="lucide:external-link" className="text-xs" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight font-serif">
                    Medical Report <br />Simplification
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 leading-relaxed">
                    <strong>Problem:</strong> Patients often struggle to comprehend complex clinical terminology in standard medical reports.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    <strong>Solution:</strong> Engineered an end-to-end text summarization pipeline leveraging transformer-based abstractive summarization.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {['Transformers', 'Python', 'NLP', 'Vercel'].map(t => (
                      <span key={t} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                  <div className="w-full h-px bg-white/10 mb-3 md:mb-4" />
                  <div className="flex justify-between items-center text-white/80">
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#FF4500]">High-Fidelity Abstracts</span>
                    <Icon icon="lucide:arrow-up-right" className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>

            {/* ─ Project 3 — Dark ─ */}
            <div className="parallax-card-down">
              <div className="reveal bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10
                              flex flex-col justify-between min-h-[380px] md:aspect-[4/5] md:min-h-0
                              shadow-2xl group cursor-pointer hover:border-[#FF4500]/50
                              transition-all duration-500" style={{ transitionDelay: '200ms' }}>
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon icon="lucide:heart-pulse" className="text-white text-xl md:text-2xl" />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-wider bg-white/5 text-gray-400 px-2.5 py-1 rounded-full border border-white/10">
                    ML Pipeline
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight font-serif">
                    Heart Disease <br />Prediction
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 leading-relaxed">
                    <strong>Problem:</strong> Early detection of cardiovascular risks is challenging without automated, data-driven tools.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    <strong>Solution:</strong> Conducted comprehensive EDA and utilized supervised learning methods to classify risk profiles.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {['scikit-learn', 'KNN', 'Random Forest', 'Python'].map(t => (
                      <span key={t} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                  <div className="w-full h-px bg-white/10 mb-3 md:mb-4" />
                  <div className="flex justify-between items-center text-white/80">
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#FF4500]">85% Accuracy Achieved</span>
                    <Icon icon="lucide:arrow-up-right" className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* ─ Project 4 — Orange ─ */}
            <div className="parallax-card-up md:mt-12">
              <a
                href="https://movie-recommendation-system-alpha-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal bg-[#FF4500] rounded-2xl md:rounded-3xl p-6 md:p-10
                           flex flex-col justify-between min-h-[380px] md:aspect-[4/5] md:min-h-0
                           shadow-2xl hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)]
                           transition-all duration-500 group cursor-pointer block text-black"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <Icon icon="lucide:film" className="text-black text-xl md:text-2xl" />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-wider bg-black/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    Live Demo <Icon icon="lucide:external-link" className="text-xs" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight tracking-tight font-serif">
                    Movie Recommendation <br />System
                  </h3>
                  <p className="text-black/80 text-xs md:text-sm mb-3 leading-relaxed">
                    <strong>Problem:</strong> Overwhelmed users face decision paralysis trying to locate relevant cinematic content from thousands of titles.
                  </p>
                  <p className="text-black/70 text-xs md:text-sm leading-relaxed">
                    <strong>Solution:</strong> Engineered a hybrid recommendation engine utilizing TF-IDF vectorization and Cosine Similarity.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {['Python', 'scikit-learn', 'NLTK', 'NLP', 'Vercel'].map(t => (
                      <span key={t} className="text-[10px] bg-black/10 text-black px-2 py-0.5 rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                  <div className="w-full h-px bg-black/10 mb-3 md:mb-4" />
                  <div className="flex justify-between items-center text-black">
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Sub-second Latency</span>
                    <Icon icon="lucide:arrow-up-right" className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Dot grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </section>

      {/* ══════════════════════════════════
          EDUCATION & CERTIFICATIONS
          ══════════════════════════════════ */}
      <section id="education" className="scroll-mt-20 py-16 md:py-32 relative border-t border-white/5 bg-[#080808]">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Education */}
            <div className="reveal">
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:graduation-cap" className="text-[#FF4500] text-lg md:text-xl" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif">Education</h2>
              </div>
              <div className="border-l border-white/10 pl-5 md:pl-6 ml-4 md:ml-5">
                <div className="relative">
                  <div className="absolute -left-[25px] md:-left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#FF4500]" />
                  <span className="text-xs text-gray-500 font-mono">Expected May 2028</span>
                  <h3 className="text-base md:text-xl font-medium mt-1">BCA (Artificial Intelligence &amp; Data Science)</h3>
                  <p className="text-gray-400 text-sm mt-1">JECRC University, Jaipur</p>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icon icon="lucide:award" className="text-[#FF4500] text-lg md:text-xl" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif">Certifications</h2>
              </div>
              <div className="border-l border-white/10 pl-5 md:pl-6 ml-4 md:ml-5 space-y-6 md:space-y-8">
                {[
                  { name: 'Claude Code in Action', org: 'Anthropic', link: 'https://linkedin.com' },
                  { name: 'Data Analytics Job Simulation', org: 'Deloitte Australia', link: 'https://linkedin.com' },
                  { name: 'GenAI Powered Data Analytics Job Simulation', org: 'Tata', link: 'https://linkedin.com' },
                ].map(cert => (
                  <div key={cert.name} className="relative group">
                    <div className="absolute -left-[25px] md:-left-[31px] top-1.5 w-2 h-2 rounded-full bg-[#FF4500]" />
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <h3 className="text-sm md:text-lg font-medium text-white group-hover:text-[#FF4500] transition-colors flex items-center gap-1.5">
                        {cert.name}
                        <Icon icon="lucide:external-link" className="text-xs text-gray-500 group-hover:text-[#FF4500]" />
                      </h3>
                      <p className="text-gray-400 text-xs mt-0.5">{cert.org} • <span className="text-[#FF4500]/80">View on LinkedIn</span></p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOOTER
          ══════════════════════════════════ */}
      <footer id="contact" className="py-14 md:py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
            <div className="w-full md:w-auto">
              <h2 className="text-[10vw] sm:text-[8vw] leading-[0.8] tracking-tighter text-white/10 font-bold select-none pointer-events-none uppercase">
                ARPIT JAIN.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
              <div className="flex flex-col gap-2 text-sm text-gray-400 font-mono">
                <p className="text-white text-base font-serif mb-2">Connect Directly</p>
                <a href="mailto:arpitjain1402@gmail.com" className="hover:text-[#FF4500] transition-colors text-sm break-all">arpitjain1402@gmail.com</a>
                <p className="text-sm">Jaipur, Rajasthan, India</p>
              </div>
              <div className="flex flex-col gap-2 text-gray-400 font-mono text-sm">
                <p className="text-white text-base font-serif mb-2">Socials</p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 mt-10 md:mt-16 pt-6 md:pt-8 text-xs text-gray-600 gap-3">
            <p>© 2026 Arpit Jain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
