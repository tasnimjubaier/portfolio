import React from 'react';
import styles from './Contact.module.css';

const OPEN_TO = [
  'AI training and RLHF contractor work — immediate',
  'Freelance Python / backend engineering',
  'Founding engineer or early AI engineer roles at remote-first startups',
  'Collaborations on interesting technical problems',
];

const LINKS = [
  {
    label: 'Email',
    value: 'tasnimjubaier@gmail.com',
    href: 'mailto:tasnimjubaier@gmail.com',
    icon: EmailIcon,
    display: 'tasnimjubaier@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tasnim-jubaier',
    href: 'https://www.linkedin.com/in/tasnim-jubaier',
    icon: LinkedInIcon,
    display: '/in/tasnim-jubaier',
  },
  {
    label: 'GitHub',
    value: 'github.com/tasnimjubaier',
    href: 'https://github.com/tasnimjubaier',
    icon: GitHubIcon,
    display: 'tasnimjubaier',
  },
  {
    label: 'Twitter / X',
    value: 'x.com/TasnimJubaier',
    href: 'https://x.com/TasnimJubaier',
    icon: XIcon,
    display: '@TasnimJubaier',
  },
  {
    label: 'Codeforces',
    value: 'codeforces.com/profile/psyre',
    href: 'https://codeforces.com/profile/psyre',
    icon: CodeIcon,
    display: 'psyre',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/tasnimjubaier',
    href: 'https://leetcode.com/u/tasnimjubaier',
    icon: CodeIcon,
    display: 'tasnimjubaier',
  },
];

export default function Contact() {
  return (
    <main className={styles.main}>

      <div className={styles.intro}>
        <h1 className={styles.pageTitle}>Get in touch</h1>
        <p className={styles.pageText}>
          I'm open to AI training contracts, freelance backend work, and founding engineer conversations.
          Best way to reach me is email or LinkedIn — I respond within 24 hours.
        </p>
      </div>

      {/* ── Open to ───────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Currently open to</h2>
        <ul className={styles.openList}>
          {OPEN_TO.map((item, i) => (
            <li key={i} className={styles.openItem}>
              <span className={styles.openDot} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Links ─────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact & profiles</h2>
        <div className={styles.linkGrid}>
          {LINKS.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className={styles.linkCard}
              >
                <div className={styles.linkIcon}><Icon /></div>
                <div className={styles.linkContent}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkValue}>{link.display}</span>
                </div>
                <span className={styles.linkArrow}>→</span>
              </a>
            );
          })}
        </div>
      </section>

    </main>
  );
}

/* ── Icons ────────────────────────────────────── */
function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
