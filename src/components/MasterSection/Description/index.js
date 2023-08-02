import React from 'react'
import styles from './index.module.css'


const Description = () => {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['hi']}>
          Hi I'm 
        </div>
        <div className={styles['name']}>
          Anik Jubaier
        </div>
        <div className={styles['work']}>
          A Software Developer
        </div>
    </div>
  )
}

export default Description