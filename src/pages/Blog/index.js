import React from 'react';
import styles from './Blog.module.css';

const POSTS = [
  {
    id: 1,
    title: 'Your first post title',
    date: 'April 23, 2025',
    tag: 'Development',
    image: null,
    size: 'large',
  },
  {
    id: 2,
    title: 'Thoughts on building things',
    date: 'April 22, 2025',
    tag: 'General',
    image: null,
    size: 'small',
  },
  {
    id: 3,
    title: 'What I learned shipping fast',
    date: 'April 21, 2025',
    tag: 'Career',
    image: null,
    size: 'small',
  },
];

export default function Blog() {
  const [large, ...rest] = POSTS;

  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Writing about design and tech...</h1>

      <div className={styles.grid}>
        {/* Large featured post */}
        <article className={styles.postLarge}>
          <div className={styles.postImageLarge}>
            {large.image
              ? <img src={large.image} alt={large.title} />
              : <div className={styles.imagePlaceholder} />
            }
          </div>
          <div className={styles.postMeta}>
            <span className={styles.postDate}>{large.date}</span>
          </div>
          <h2 className={styles.postTitle}>{large.title}</h2>
          <span className={styles.postTag}>{large.tag}</span>
        </article>

        {/* Smaller posts */}
        <div className={styles.smallGrid}>
          {rest.map(post => (
            <article key={post.id} className={styles.postSmall}>
              <div className={styles.postImageSmall}>
                {post.image
                  ? <img src={post.image} alt={post.title} />
                  : <div className={styles.imagePlaceholder} />
                }
              </div>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{post.date}</span>
              </div>
              <h2 className={styles.postTitleSmall}>{post.title}</h2>
              <span className={styles.postTag}>{post.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
