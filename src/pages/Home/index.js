import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const FEATURED_PROJECTS = [
  {
    id: 'ai-rlhf',
    tag: 'Featured work',
    tagAccent: 'AI Training',
    title: 'AI Code Evaluation & RLHF',
    description:
      'Evaluated LLM-generated Python, C++, and JavaScript solutions across 13+ months at Turing, Superannotate, and Remotask. Platinum Tasker status at Remotask (top quality tier).',
    stack: ['Python', 'C++', 'JavaScript', 'RLHF'],
    image: null,
  },
];

const QUICK_STATS = [
  { value: '1871',  label: 'Codeforces rating',  sub: 'Expert tier' },
  { value: 'Top 2%', label: 'LeetCode',          sub: '611 problems solved' },
  { value: '13+',   label: 'months RLHF',         sub: 'Turing · Superannotate · Remotask' },
];

export default function Home() {
  return (
    <main className={styles.main}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <span className={styles.tagPill}>AI Training Engineer</span>
          <span className={styles.tagDivider} />
          <span className={styles.tagLabel}>Open to remote roles</span>
        </div>

        <h1 className={styles.heroTitle}>
          I evaluate LLMs,<br />
          build backend systems,<br />
          and solve hard problems.
        </h1>

        <p className={styles.heroSub}>
          13+ months evaluating LLM-generated code at Turing and Superannotate.
          Codeforces Expert. ICPC regionalist. Previously at TigerIT Bangladesh.
        </p>

        <div className={styles.heroCTAs}>
          <Link to="/work" className={styles.ctaPrimary}>See my work →</Link>
          <Link to="/contact" className={styles.ctaSecondary}>Get in touch</Link>
        </div>

        <Link to="/about" className={styles.heroAboutLink}>
          <img src="/cafe-2024-cropped_3.jpeg" alt="Tasnim Jubaier" className={styles.avatarEmoji} />
          About — Tasnim Jubaier
        </Link>
      </section>

      {/* ── Quick stats ───────────────────────────────── */}
      <div className={styles.statsRow}>
        {QUICK_STATS.map(s => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
            <span className={styles.statSub}>{s.sub}</span>
          </div>
        ))}
      </div>

      {/* ── Featured project card ─────────────────────── */}
      {FEATURED_PROJECTS.map(p => (
        <section key={p.id} className={styles.projectCard}>
          <div className={styles.projectImageWrap}>
            <div className={styles.projectImageInner}>
              {/* Placeholder — replace with screenshot */}
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderLines}>
                  <div className={styles.pLine} style={{ width: '60%' }} />
                  <div className={styles.pLine} style={{ width: '80%' }} />
                  <div className={styles.pLine} style={{ width: '45%' }} />
                  <div className={styles.pLine} style={{ width: '70%' }} />
                  <div className={styles.pLine} style={{ width: '55%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.projectTopRow}>
              <div className={styles.projectTagRow}>
                <span className={styles.projectTagAccent}>{p.tagAccent}</span>
                <span className={styles.projectTagLabel}>{p.tag}</span>
              </div>
            </div>
            <h2 className={styles.projectTitle}>{p.title}</h2>
            <p className={styles.projectDesc}>{p.description}</p>
            <div className={styles.projectStack}>
              {p.stack.map(t => (
                <span key={t} className={styles.stackTag}>{t}</span>
              ))}
            </div>
            <Link to="/work" className={styles.caseStudyLink}>
              Read case study →
            </Link>
          </div>
        </section>
      ))}

      {/* ── Footer ────────────────────────────────────── */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2026 / Tasnim Jubaier</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/tasnimjubaier" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/tasnim-jubaier" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://codeforces.com/profile/psyre" target="_blank" rel="noreferrer">Codeforces</a>
          <a href="https://leetcode.com/u/tasnimjubaier" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="mailto:tasnimjubaier@gmail.com">Email</a>
        </div>
      </footer>

    </main>
  );
}
