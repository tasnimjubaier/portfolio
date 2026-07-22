import React, { useState } from 'react';
import styles from './Gallery.module.css';

// Placeholder items — swap src with real image paths
const ITEMS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: null,
  alt: `Gallery image ${i + 1}`,
}));

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Gallery</h1>
      <p className={styles.subtitle}>A visual collection of things I've made and moments I've captured.</p>

      <div className={styles.grid}>
        {ITEMS.map((item, i) => (
          <button
            key={item.id}
            className={`${styles.gridItem} ${i === 0 ? styles.wide : ''}`}
            onClick={() => setLightbox(item)}
            aria-label={item.alt}
          >
            {item.src
              ? <img src={item.src} alt={item.alt} className={styles.img} />
              : <div className={styles.placeholder} />
            }
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.closeBtn} onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            {lightbox.src
              ? <img src={lightbox.src} alt={lightbox.alt} className={styles.lightboxImg} />
              : <div className={styles.lightboxPlaceholder} />
            }
          </div>
        </div>
      )}
    </main>
  );
}
