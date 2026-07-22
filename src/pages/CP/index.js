import React from 'react';
import styles from './CP.module.css';

const PLATFORMS = [
  {
    name: 'Codeforces',
    stat: '1871',
    label: 'Max Rating',
    sub: 'Expert tier',
    problems: '979 problems solved',
    url: 'https://codeforces.com/profile/psyre',
    color: '#e8643a',
  },
  {
    name: 'LeetCode',
    stat: 'Top 2.04%',
    label: 'Global percentile',
    sub: '',
    problems: '611 problems solved',
    url: 'https://leetcode.com/u/tasnimjubaier',
    color: '#ffa116',
  },
  {
    name: 'CodeChef',
    stat: '★★★★★',
    label: '5-Star rated',
    sub: '2119 max rating',
    problems: '',
    url: 'https://www.codechef.com/users/tasnimjubaier',
    color: '#6b4226',
  },
  {
    name: 'LightOJ',
    stat: '152',
    label: 'Problems solved',
    sub: '',
    problems: '',
    url: null,
    color: '#4a9ade',
  },
];

const CONTESTS = [
  { event: 'ICPC Dhaka Regional 2019', team: 'DU_Crackplatoon', rank: 14 },
  { event: 'MIST IUPC 2019',           team: 'DU_LeftOver',      rank: 6 },
  { event: 'Technocracy RUET 2019',    team: 'DU_Crackplatoon',  rank: 7 },
  { event: 'DUET IUPC 2019',           team: 'DU_Crackplatoon',  rank: 7 },
  { event: 'SUST IUPC 2019',           team: 'DU_Crackplatoon',  rank: 10 },
];

const AWARDS = [
  'National Mathematical Olympiad — Champion (2015)',
  'National Mathematical Olympiad — 2nd Runner-up (2016)',
  'CSEDU Ambidexterity Award — April 2019',
];

const PROBLEM_SETTING = [
  'Battle of Brains programming contest',
  'University of Dhaka internal programming contests',
  'Mathematical Olympiad Bangladesh — problem writing and review (volunteer)',
];

export default function CP() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Competitive Programming</h1>
        <p className={styles.pageSubtitle}>
          This isn't background decoration. Algorithmic depth is what lets me catch what LLMs miss —
          wrong base cases, off-by-one bounds, flawed recursion, complexity misclassifications.
        </p>
      </div>

      {/* ── Platform stats ────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.platformGrid}>
          {PLATFORMS.map(p => (
            <div key={p.name} className={styles.platformCard}>
              <div className={styles.platformTop}>
                <span className={styles.platformName}>{p.name}</span>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noreferrer" className={styles.platformLink}>
                    View profile →
                  </a>
                )}
              </div>
              <div className={styles.platformStat} style={{ color: p.color }}>{p.stat}</div>
              <div className={styles.platformLabel}>{p.label}</div>
              {p.sub && <div className={styles.platformSub}>{p.sub}</div>}
              {p.problems && <div className={styles.platformProblems}>{p.problems}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contests ──────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contest Record</h2>
        <div className={styles.contestTable}>
          <div className={styles.tableHeader}>
            <span>Event</span>
            <span>Team</span>
            <span>Rank</span>
          </div>
          {CONTESTS.map((c, i) => (
            <div key={i} className={styles.tableRow}>
              <span className={styles.contestEvent}>{c.event}</span>
              <span className={styles.contestTeam}>{c.team}</span>
              <span className={styles.contestRank}>#{c.rank}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Awards ────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Awards</h2>
        <ul className={styles.bulletList}>
          {AWARDS.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </section>

      {/* ── Problem setting ───────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem Setting</h2>
        <ul className={styles.bulletList}>
          {PROBLEM_SETTING.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

    </main>
  );
}
