import React from 'react'
import styles from './index.module.css'

const AchievementSection = () => {
  return (
    <div className={styles['master-wrapper']}>
      <div className={styles['wrapper-2']}>
        <div className={styles['wrapper-3']}>
          <div className={styles['cross']} />
          <div className={styles['content']}>
            Achievements
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementSection