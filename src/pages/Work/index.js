import React, { useState } from 'react';
import styles from './Work.module.css';

const PROJECTS = [
  {
    id: 'ai-rlhf',
    title: 'AI Code Evaluation & RLHF',
    oneLiner: 'Evaluated LLM-generated Python, C++, and JavaScript solutions across 13+ months at Turing, Superannotate, and Remotask.',
    problem:
      'LLMs fail in non-obvious ways on algorithmic tasks — off-by-one errors, wrong base cases, hallucinated APIs, incorrect complexity analysis. Catching these requires both algorithmic depth and systematic QA discipline.',
    role:
      'Reviewed model-generated code, identified failure modes, wrote correct reference solutions, and produced structured feedback reports used in training data quality improvement. Achieved Platinum Tasker status at Remotask.',
    outcomes: [
      '13+ months continuous evaluation work across three platforms',
      'Platinum Tasker at Remotask — top quality tier',
      'Specialised in Python algorithm tasks and C++ competitive-style problems',
    ],
    stack: ['Python', 'C++', 'JavaScript', 'RLHF pipelines'],
    year: '2023 – Present',
    link: null,
  },
  {
    id: 'commchat',
    title: 'Commchat — Cross-Platform Desktop Communication',
    oneLiner: 'Desktop communication app with audio/video calling via Janus WebRTC, built at TigerIT Bangladesh.',
    problem:
      'Needed a stable, cross-platform desktop calling experience integrated with a WebRTC media server. Desktop + Electron frontend collaboration added integration complexity.',
    role:
      'Built backend components and WebRTC integrations for the desktop layer. Handled the audio/video pipeline, event coordination via MQTT, and integration boundaries between .NET and the Electron frontend.',
    outcomes: [
      'Shipped working call flows with cross-platform desktop support',
      'Production app — live at commchat.com',
    ],
    stack: ['.NET', 'C#', 'Avalonia UI', 'Janus WebRTC', 'MQTT'],
    year: '2021 – 2023',
    link: 'https://commchat.com',
  },
  {
    id: 'smart-city',
    title: 'Smart City Monitoring — RTSP + AI Integration',
    oneLiner: 'Desktop app that ingests RTSP camera feeds and calls AI model APIs to extract traffic/object metrics for city operators.',
    problem:
      'Reliable RTSP stream ingestion + consistent AI API integration + operator-facing UI, all in a single desktop application.',
    role:
      'Implemented the RTSP processing pipeline, frame-sampling loop, and HTTP integration with AI model services (including timeout/retry/backoff). Built the SQL storage layer and WPF operator UI.',
    outcomes: [
      'Delivered functioning monitoring workflow with AI-assisted metrics extraction',
      'Integrated with multiple AI model endpoints for object/traffic classification',
    ],
    stack: ['.NET', 'C#', 'WPF', 'SQL', 'RTSP', 'HttpClient', 'AI model APIs'],
    year: '2022',
    link: null,
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Projects — Tasnim Jubaier</h1>

      <div className={styles.projectList}>
        {PROJECTS.map(p => {
          const isOpen = expanded === p.id;
          return (
            <article key={p.id} className={`${styles.projectCard} ${isOpen ? styles.cardOpen : ''}`}>

              {/* ── Image area ── */}
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imagePlaceholderTitle}>{p.title}</span>
                </div>
              </div>

              {/* ── Summary row ── */}
              <div className={styles.cardSummary}>
                <div className={styles.cardLeft}>
                  <div className={styles.cardYear}>{p.year}</div>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <p className={styles.cardOneLiner}>{p.oneLiner}</p>
                  <div className={styles.cardTags}>
                    {p.stack.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardActions}>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className={styles.viewLink}>
                      View project →
                    </a>
                  )}
                  <button
                    className={styles.expandBtn}
                    onClick={() => toggle(p.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? 'Less ↑' : 'Case study ↓'}
                  </button>
                </div>
              </div>

              {/* ── Expanded case study ── */}
              {isOpen && (
                <div className={styles.caseStudy}>
                  <div className={styles.caseBlock}>
                    <h3 className={styles.caseHeading}>The problem</h3>
                    <p className={styles.caseText}>{p.problem}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <h3 className={styles.caseHeading}>My role</h3>
                    <p className={styles.caseText}>{p.role}</p>
                  </div>
                  <div className={styles.caseBlock}>
                    <h3 className={styles.caseHeading}>Outcomes</h3>
                    <ul className={styles.outcomeList}>
                      {p.outcomes.map((o, i) => <li key={i}>{o}</li>)}
                    </ul>
                  </div>
                </div>
              )}

            </article>
          );
        })}
      </div>
    </main>
  );
}
