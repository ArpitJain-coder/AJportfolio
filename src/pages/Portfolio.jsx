import Icon from '../utils/Icon'

const projects = [
  {
    number: '01', category: 'MACHINE LEARNING · CLASSIFICATION', title: 'Telecom churn prediction',
    description: 'A predictive pipeline that helps telecom teams identify customers at risk of leaving — from clean data to a deployed model.',
    tags: ['Python', 'XGBoost', 'scikit-learn'], href: 'https://churnai-c7dt.vercel.app/', accent: 'coral', visual: '87%', visualLabel: 'MODEL ACCURACY',
  },
  {
    number: '02', category: 'HEALTHCARE · NLP', title: 'Medical report simplification',
    description: 'Turning clinical language into plain-language summaries, making important health information easier to understand.',
    tags: ['Python', 'NLP', 'Summarization'], href: 'https://medical-report-simplification.vercel.app/', accent: 'blue', visual: 'A–Z', visualLabel: 'COMPLEX → CLEAR',
  },
  {
    number: '03', category: 'RECOMMENDATION SYSTEMS', title: 'Movie recommendation system',
    description: 'A content-based recommender that finds your next watch using movie genres, cast, keywords, and story descriptions.',
    tags: ['Python', 'pandas', 'Cosine similarity'], href: 'https://movie-recommendation-system-alpha-ten.vercel.app/', accent: 'gold', visual: '↗', visualLabel: 'FIND YOUR NEXT FILM',
  },
  {
    number: '04', category: 'SOCIAL IMPACT · GEOSPATIAL AI', title: 'PashuSetu',
    description: 'An early-warning platform for livestock health, connecting farmers and vets with disease alerts and outbreak mapping.',
    tags: ['Kotlin', 'Python', 'Geospatial'], href: 'https://github.com/ArpitJain-coder/pashuraksha', accent: 'green', visual: '◎', visualLabel: 'HEALTHIER HERDS',
  },
]

const skills = [
  { title: 'Languages', items: ['Python', 'SQL', 'C'] },
  { title: 'Machine learning', items: ['Classification', 'Predictive modeling', 'Feature engineering', 'Model evaluation', 'XGBoost', 'Recommendation systems', 'NLP'] },
  { title: 'Tools & libraries', items: ['pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Git', 'Jupyter', 'Streamlit'] },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/ArpitJain-coder', icon: 'lucide:github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arpit-jain-87850637a', icon: 'lucide:linkedin' },
  { label: 'Email', href: 'mailto:arpitjain1402@gmail.com', icon: 'lucide:mail' },
]

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function ProjectCard({ project }) {
  return (
    <a className={`project-card project-${project.accent}`} href={project.href} target="_blank" rel="noreferrer">
      <div className="project-topline"><span>{project.number} / {project.category}</span><Icon icon="lucide:arrow-up-right" className="project-arrow" /></div>
      <div className="project-art" aria-hidden="true"><div className="project-orbit orbit-one" /><div className="project-orbit orbit-two" /><span className="project-visual">{project.visual}</span><span className="project-visual-label">{project.visualLabel}</span></div>
      <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
      <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </a>
  )
}

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Arpit Jain, home">AJ<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="/resume">View résumé <Icon icon="lucide:arrow-up-right" /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> OPEN TO ML / AI INTERNSHIPS</div>
          <p className="hero-kicker">AI &amp; DATA SCIENCE · JAIPUR, INDIA</p>
          <h1>Curious by nature.<br /><span>Builder by instinct.</span></h1>
          <p className="hero-intro">I&apos;m Arpit — an AI &amp; Data Science student turning real-world problems into thoughtful machine learning projects.</p>
          <div className="hero-actions"><a className="button-primary" href="#work">Explore my work <Icon icon="lucide:arrow-down-right" /></a><a className="text-link" href="mailto:arpitjain1402@gmail.com">Let&apos;s talk <Icon icon="lucide:arrow-up-right" /></a></div>
          <div className="hero-meta"><span>BASED IN JAIPUR, INDIA</span><span>STUDYING AT JECRC UNIVERSITY</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative illustration of a glowing data visualization">
          <div className="art-glow" /><div className="art-ring ring-outer" /><div className="art-ring ring-mid" /><div className="art-ring ring-inner" />
          <div className="art-core"><span>AJ</span><i /></div>
          <span className="orbit-label label-top">MODEL / 01</span><span className="orbit-label label-bottom">LEARN · BUILD · REPEAT</span>
          <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-section content-width" id="about">
        <SectionLabel number="01" >A LITTLE ABOUT ME</SectionLabel>
        <div className="intro-content"><h2>Learning by making<br />things that <em>matter.</em></h2><div className="intro-body"><p>I&apos;m a BCA student in Artificial Intelligence &amp; Data Science at JECRC University. I learn best by building — exploring data, training models, and shipping ideas people can actually use.</p><p>From predicting customer churn to making medical reports easier to read, I&apos;m interested in the small ways intelligent software can make everyday decisions better. Currently looking for an internship where I can learn alongside a great team.</p><a className="inline-link" href="/resume">A little more about my journey <Icon icon="lucide:arrow-up-right" /></a></div></div>
        <div className="milestone-row"><div><strong>87%</strong><span>CHURN MODEL ACCURACY</span></div><div><strong>Top 10</strong><span>NATIONAL HEALTHCARE HACKATHON</span></div><div><strong>2028</strong><span>BCA · EXPECTED GRADUATION</span></div></div>
      </section>

      <section className="work-section" id="work"><div className="content-width"><div className="section-heading"><SectionLabel number="02">SELECTED PROJECTS</SectionLabel><h2>Ideas made <em>real.</em></h2><p>A few things I&apos;ve been learning by building.</p></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div></div></section>

      <section className="skills-section content-width" id="skills"><div className="section-heading"><SectionLabel number="03">WHAT I WORK WITH</SectionLabel><h2>Tools for the <em>curious.</em></h2></div><div className="skills-layout"><p className="skills-intro">A growing toolkit for exploring data, learning patterns, and bringing models into the real world.</p><div className="skills-groups">{skills.map((group, index) => <div className="skill-group" key={group.title}><span className="skill-index">0{index + 1}</span><div><h3>{group.title}</h3><div className="skill-list">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div></div>)}</div></div></section>

      <section className="journey-section"><div className="content-width journey-inner"><SectionLabel number="04">THE JOURNEY SO FAR</SectionLabel><div className="journey-entry"><span className="journey-date">2024 — 2028</span><div><h3>BCA · Artificial Intelligence &amp; Data Science</h3><p>JECRC University · Jaipur, Rajasthan</p><span className="journey-detail">Coursework in machine learning, artificial intelligence, data structures, and databases.</span></div></div><div className="journey-entry"><span className="journey-date">PRESENT</span><div><h3>Google Gemini Campus Ambassador</h3><p>JECRC University</p><span className="journey-detail">Helping fellow students explore AI tools for studying and building projects.</span></div></div><div className="recognition"><span>RECOGNITION</span><p>2nd Runner-up · Smart India Hackathon prelims <i> / </i> Top 10 · National Healthcare Hackathon</p></div></div></section>

      <footer className="contact-section" id="contact"><div className="content-width"><SectionLabel number="05">HAVE SOMETHING IN MIND?</SectionLabel><div className="contact-main"><h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2><a className="contact-email" href="mailto:arpitjain1402@gmail.com">arpitjain1402@gmail.com <Icon icon="lucide:arrow-up-right" /></a></div><div className="footer-bottom"><a className="wordmark" href="#home">AJ<span>.</span></a><span>MADE WITH CURIOSITY IN JAIPUR, INDIA</span><div className="social-links">{socials.map(social => <a href={social.href} key={social.label} target={social.label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={social.label}><Icon icon={social.icon} /></a>)}</div><span>© {new Date().getFullYear()} ARPIT JAIN</span></div></div></footer>
    </main>
  )
}
