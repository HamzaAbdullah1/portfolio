
import './App.css';
import Hero3D from './Hero3D';
import { motion } from 'motion/react';

function App() {
  return (
    <main id="top">
      {/* NAVBAR */}
      <nav className="navbar">
        <a className="logo" href="#top">
          hamza<span>.</span>
        </a>

        <div className="nav-links">
  <a href="#work">Work</a>
  <a href="#services">Services</a>
  <a href="#about">About</a>
  <a href="#experience">Experience</a>
</div>

        <a className="nav-cta" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero hero-3d-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="availability">
            <span className="status-dot" />
            Available for freelance projects
          </div>

          <p className="eyebrow">
            FULL-STACK DEVELOPER · AI SOLUTIONS
          </p>

          <motion.h1>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: 'easeOut',
              }}
            >
              I build digital products
            </motion.span>

            <br />

            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
                ease: 'easeOut',
              }}
            >
              powered by AI.
            </motion.span>
          </motion.h1>

          <p className="hero-description">
            I help businesses turn ideas into powerful web applications,
            combining thoughtful design, solid engineering, and AI.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#work">
              Explore my work <span>↘</span>
            </a>

            <a className="button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-3d-stage"
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.3,
            ease: 'easeOut',
          }}
        >
          <Hero3D />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="floating-label label-top">
            <span>✳</span> AI POWERED
          </div>

          <div className="floating-label label-bottom">
            <span>◈</span> CREATIVE ENGINEERING
          </div>
        </motion.div>

        <div className="hero-bottom">
          <span>BASED IN Jeddah · WORKING WORLDWIDE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <p className="eyebrow">WHAT I CAN BUILD FOR YOU</p>

        <h2>
          From idea to <span>working product.</span>
        </h2>

        <div className="service-grid">
          <motion.article
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="service-number">01</span>
            <div className="service-icon">✳</div>
            <h3>AI Web Applications</h3>
            <p>
              Practical AI-powered products, assistants, and tools built
              around your business needs.
            </p>
            <span className="service-arrow">↗</span>
          </motion.article>

          <motion.article
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="service-number">02</span>
            <div className="service-icon">⌘</div>
            <h3>Full-Stack Development</h3>
            <p>
              Responsive web apps with reliable backends, databases,
              authentication, and integrations.
            </p>
            <span className="service-arrow">↗</span>
          </motion.article>

          <motion.article
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="service-number">03</span>
            <div className="service-icon">◈</div>
            <h3>AI Integration</h3>
            <p>
              Connect AI models and APIs to existing products to create
              genuinely useful features.
            </p>
            <span className="service-arrow">↗</span>
          </motion.article>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section" id="work">
        <p className="eyebrow">SELECTED PROJECTS</p>

        <h2>
          Ideas turned into <span>intelligent products.</span>
        </h2>

        <p className="projects-intro">
          A selection of AI-powered applications and tools built to solve
          real problems.
        </p>

        <div className="project-grid">
          {/* PROJECT 01: LECTURA AI */}
          <motion.article
            className="project-card project-featured"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-visual project-image-visual">
              <img
                src="/lectura-preview.png"
                alt="Lectura AI learning dashboard"
                className="project-preview"
                loading="lazy"
              />
              <span className="project-index">01</span>
            </div>

            <div className="project-info">
              <div className="project-category">
                AI LEARNING · WEB APPLICATION
              </div>

              <h3>Lectura AI</h3>

              <p>
                <p>
  A production AI study platform that turns lecture files (PDF, slides,
  Word, audio, video) into summaries, flashcards, quizzes, and an
  interactive mind map, with a lecture-aware AI chat and exam-readiness
  tracking. Fully bilingual, Arabic and English.
</p>

<div className="project-tags">
  <span>React</span>
  <span>Supabase</span>
  <span>Gemini API</span>
  <span>Vercel AI SDK</span>
  <span>Tailwind</span>
</div>
              </p>

              <div className="project-tags">
                <span>AI Integration</span>
                <span>Web Development</span>
                <span>EdTech</span>
              </div>

              <a
                className="project-link"
                href="https://lecturait.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Explore Live Project <span>↗</span>
              </a>
            </div>
          </motion.article>

          {/* PROJECT 02: ASKDATA */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="project-visual project-image-visual">
              <img
                src="/askdata-preview.png"
                alt="AskData AI data analysis application"
                className="project-preview"
                loading="lazy"
              />
              <span className="project-index">02</span>
            </div>

            <div className="project-info">
              <div className="project-category">
                AI AGENTS · DATA ANALYTICS
              </div>

              <h3>AskData</h3>

              <p>
                An intelligent data analysis agent that lets users upload
                files, ask questions in Arabic, and explore insights through
                charts and instant analysis.
              </p>

              <div className="project-tags">
                <span>AI Agents</span>
                <span>Data Analysis</span>
                <span>Arabic NLP</span>
              </div>

              <a className="project-link" href="#contact">
                Discuss this project <span>↗</span>
              </a>
            </div>
          </motion.article>

          {/* PROJECT 03: AI INTERVIEW ASSISTANT */}
          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="project-visual project-image-visual">
              <img
                src="/interview-preview.png"
                alt="AI Interview Assistant application"
                className="project-preview"
                loading="lazy"
              />
              <span className="project-index">03</span>
            </div>

            <div className="project-info">
              
              <div className="project-category">
                GENERATIVE AI · FLUTTER
              </div>

              <h3>AI Interview Assistant</h3>

              <p>
                An AI-powered interview preparation app that generates
                job-specific questions and supports text or voice-based practice.
              </p>

              <div className="project-tags">
                <span>Flutter</span>
                <span>AI APIs</span>
                <span>Voice &amp; Text</span>
              </div>

              <a className="project-link" href="#contact">
                Discuss this project <span>↗</span>
              </a>
            </div>
          </motion.article>
        </div>
      </section>
{/* MORE WORK */}
<section className="more-work section" id="more-work">
  <p className="eyebrow">BEYOND THE WEB</p>

  <h2>
    More <span>engineering work.</span>
  </h2>

  <div className="more-grid">
    {[
      {
        icon: '◈',
        category: 'ROBOTICS · GRADUATION PROJECT',
        title: 'Firefighting Robot',
        text: 'An autonomous robot that detects flames, avoids obstacles, navigates to the fire, and suppresses it using sensors and microcontroller-based control.',
        tags: ['Embedded Systems', 'Sensors', 'Autonomous Navigation'],
      },
      {
        icon: '◉',
        category: 'COMPUTER VISION',
        title: 'Driver Drowsiness Detection',
        text: 'A real-time system that tracks eye closure through facial landmarks and raises warning alerts to help reduce fatigue-related accidents.',
        tags: ['Computer Vision', 'OpenCV', 'Python'],
      },
      {
        icon: '⌘',
        category: 'IOT · AUTOMATION',
        title: 'Smart Mosque System',
        text: 'An IoT solution that monitors and controls lighting, temperature, and security, improving energy efficiency and convenience.',
        tags: ['IoT', 'Microcontrollers', 'Automation'],
      },
    ].map((item, i) => (
      <motion.article
        key={item.title}
        className="more-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: i * 0.12 }}
      >
        <div className="more-icon">{item.icon}</div>
        <span className="more-category">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="project-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.article>
    ))}
  </div>
</section>
      {/* ABOUT */}
<section className="about section" id="about">
  <p className="eyebrow">A LITTLE ABOUT ME</p>

  <h2>
    Good ideas deserve <span>great execution.</span>
  </h2>

  <div className="about-layout">
    <motion.div
      className="about-text"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p>
        I'm a full-stack developer who builds AI-powered products from
        the first idea to a live, working application.
      </p>
      <p>
        My work spans web apps, mobile apps with Flutter, and AI agents,
        including tools like AskData, which analyzes data through natural
        Arabic questions, and Lectura, an AI study companion.
      </p>
      <p>
        I care about products that feel simple to use, are built on solid
        engineering, and solve a real problem.
      </p>

      <a className="button-primary about-cta" href="#contact">
        Work with me <span>↗</span>
      </a>
    </motion.div>

    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <div className="about-group">
        <span className="about-group-title">FRONTEND &amp; MOBILE</span>
        <div className="tech-list">
          <span>React</span>
          <span>TypeScript</span>
          <span>Flutter</span>
        </div>
      </div>

      <div className="about-group">
        <span className="about-group-title">BACKEND &amp; DATA</span>
        <div className="tech-list">
          <span>Node.js</span>
          <span>Supabase</span>
          <span>PostgreSQL</span>
        </div>
      </div>

      <div className="about-group">
        <span className="about-group-title">AI</span>
        <div className="tech-list">
          <span>AI APIs</span>
          <span>AI Agents</span>
          <span>Arabic NLP</span>
        </div>
      </div>

      <div className="about-group">
        <span className="about-group-title">WORKFLOW</span>
        <div className="tech-list">
          <span>Git &amp; GitHub</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>
{/* EXPERIENCE */}
<section className="experience section" id="experience">
  <p className="eyebrow">EXPERIENCE &amp; EDUCATION</p>

  <h2>
    Built through <span>real work.</span>
  </h2>

  <div className="timeline">
    {[
      {
        period: '2025 – 2026',
        title: 'Technical Lead, AI Application Project',
        place: 'Creative Mark',
        text: 'Leading planning and technical development of an AI-powered app, coordinating design and development, and shaping AI features, user flows, and app structure.',
      },
      {
        period: '2024 – PRESENT',
        title: 'AI & Data Analysis Projects',
        place: 'Freelance / Academic',
        text: 'Machine learning projects, Power BI dashboards, and SQL Server data analysis, plus automation and smart applications.',
      },
      {
        period: 'INDEPENDENT',
        title: 'AI Application Developer',
        place: 'Flutter · Generative AI',
        text: 'Built an AI CV Maker and Interview Assistant with generated questions, interview simulation, voice/text, cover letters, auth, and user profiles.',
      },
      {
        period: 'EDUCATION',
        title: 'B.Sc. Information Technology, AI Track',
        place: 'Misr University for Science and Technology',
        text: 'Computer Science with an Artificial Intelligence specialization. Graduation project: an autonomous firefighting robot.',
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="timeline-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <span className="timeline-period">{item.period}</span>
        <div className="timeline-body">
          <h3>{item.title}</h3>
          <span className="timeline-place">{item.place}</span>
          <p>{item.text}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
      {/* CONTACT */}
      <section className="contact section" id="contact">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's build something <span>meaningful.</span>
        </h2>

        <p>
          Tell me what you're working on. Let's explore how I can help.
        </p>

        <a
          className="button-primary"
          href="mailto:Hamza2000265@gmail.com"
        >
          Start a conversation <span>↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a className="logo" href="#top">
          hamza<span>.</span>
        </a>

        <span>Designed &amp; built with purpose.</span>

        <a
          href="#top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        >
          Back to top ↑
        </a>
      </footer>
      <div className="contact-links">
  <a href="https://github.com/HamzaAbdullah1" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://linkedin.com/in/hamza-mohammed-b54872269/" target="_blank" rel="noreferrer">LinkedIn</a>
</div>
    </main>
  );
}

export default App;
