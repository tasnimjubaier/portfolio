import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

const TOC = [
  { id: 'introduction',    label: 'Introduction' },
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'education',       label: 'Education' },
  { id: 'skills',          label: 'Technical Skills' },
];

const WORK = [
  {
    company: 'Turing / Superannotate / Remotask',
    date: '2023 – Present',
    role: 'AI Code Evaluator (RLHF Contractor)',
    bullets: [
      'Reviewed model-generated Python, C++, and JavaScript solutions for correctness, edge case coverage, and complexity analysis.',
      'Identified failure modes including off-by-one errors, hallucinated APIs, incorrect base cases, and flawed recursion.',
      'Wrote reference solutions and structured feedback reports used in training data quality improvement.',
      'Achieved Platinum Tasker status at Remotask — the top quality tier.',
    ],
  },
  {
    company: 'TigerIT Bangladesh',
    date: '2021 – 2023',
    role: 'Software Engineer',
    bullets: [
      'Built Commchat — a cross-platform desktop communication app with audio/video calling via Janus WebRTC and MQTT event coordination.',
      'Developed a Smart City monitoring tool that ingests RTSP camera feeds and calls AI model APIs to extract traffic/object metrics.',
      'Built a healthcare management system covering patient records, appointments, and reporting workflows.',
      'Stack: .NET, C#, WPF, Avalonia UI, Janus WebRTC, MQTT, RTSP, SQL.',
    ],
  },
];

const SKILLS = [
  {
    category: 'Deep',
    tags: ['Python', 'C/C++', 'C#', 'JavaScript'],
  },
  {
    category: 'Working',
    tags: ['TypeScript', 'Java', 'Lua', 'MySQL'],
  },
  {
    category: 'Frameworks',
    tags: ['React', 'Next.js', 'Node.js', 'Express', '.NET', 'Avalonia', 'WPF', 'Flask', 'Django'],
  },
  {
    category: 'Domains',
    tags: ['LLM Evaluation / RLHF', 'Algorithms & Data Structures', 'Realtime Communication (WebRTC, MQTT)', 'Desktop Apps (.NET / WPF)', 'AI Model Integration'],
  },
  {
    category: 'Tools',
    tags: ['Git', 'Docker', 'Kubernetes'],
  },
];

export default function About() {
  const [active, setActive] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.layout}>

      {/* ── Sidebar ────────────────────────────────── */}
      <aside className={styles.sidebar}>
        {/* Avatar */}
        <div className={styles.avatarWrap}>
          <div className={styles.avatarCircle}>TJ</div>
        </div>
        <div className={styles.sidebarLocation}>BD / Dhaka</div>

        {/* Social links */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/tasnimjubaier" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <GitHubIcon /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tasnim-jubaier" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://x.com/TasnimJubaier" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <XIcon /> X / Twitter
          </a>
          <a href="mailto:tasnimjubaier@gmail.com" className={styles.socialLink}>
            <EmailIcon /> Email
          </a>
        </div>

        {/* TOC */}
        <nav className={styles.toc}>
          {TOC.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`${styles.tocItem} ${active === id ? styles.tocActive : ''}`}
            >
              <span className={styles.tocDash}>—</span>
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main content ────────────────────────────── */}
      <main className={styles.content}>

        {/* Profile header */}
        <div className={styles.profileHeader}>
          <h1 className={styles.profileName}>Tasnim Jubaier</h1>
          <p className={styles.profileTitle}>Software Engineer & AI Code Evaluator</p>
          <div className={styles.profileLinks}>
            <a href="https://github.com/tasnimjubaier" target="_blank" rel="noreferrer" className={styles.profileLink}>
              <GitHubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/tasnim-jubaier" target="_blank" rel="noreferrer" className={styles.profileLink}>
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://x.com/TasnimJubaier" target="_blank" rel="noreferrer" className={styles.profileLink}>
              <XIcon /> Twitter
            </a>
            <a href="mailto:tasnimjubaier@gmail.com" className={styles.profileLink}>
              <EmailIcon /> Email
            </a>
          </div>
        </div>

        {/* Introduction */}
        <section id="introduction" className={styles.section}>
          <p className={styles.bio}>
            Tasnim is a Dhaka-based software engineer with a background in competitive programming,
            production backend systems, and LLM code evaluation. He spent 2+ years at TigerIT Bangladesh
            building realtime desktop communication, AI-integrated city monitoring, and healthcare platforms.
            Since 2023, he has been evaluating LLM-generated code at Turing, Superannotate, and Remotask —
            13+ months identifying failure modes that only surface with deep algorithmic knowledge.
          </p>
          <p className={styles.bio} style={{ marginTop: '14px' }}>
            Currently targeting remote AI engineer roles and RLHF contractor work at startups and labs
            where algorithmic depth and AI evaluation experience both matter.
          </p>
        </section>

        {/* Work Experience */}
        <section id="work-experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {WORK.map((job, i) => (
            <div key={i} className={styles.experienceItem}>
              <div className={styles.expHeader}>
                <span className={styles.expCompany}>{job.company}</span>
                <span className={styles.expDate}>{job.date}</span>
              </div>
              <span className={styles.expRole}>{job.role}</span>
              <ul className={styles.expBullets}>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section id="education" className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.experienceItem}>
            <div className={styles.expHeader}>
              <span className={styles.expCompany}>University of Dhaka</span>
              <span className={styles.expDate}>2017 – 2021</span>
            </div>
            <span className={styles.expRole}>BSc (Hons.) Computer Science</span>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          {SKILLS.map(group => (
            <div key={group.category} className={styles.skillsGroup}>
              <h4 className={styles.skillsCategory}>{group.category}</h4>
              <div className={styles.skillTags}>
                {group.tags.map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

/* ── Inline SVG icons ─────────────────────────── */
function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
