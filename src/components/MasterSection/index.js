import React from 'react'
import styles from './index.module.css'

const MasterSection = () => {
  return (
    <div className={styles['master-wrapper']}>
      <div className={styles['wrapper-2']}>
        <div className={styles['wrapper-3']}>
          <div className={styles['left-section']}>
            description
          </div>
          <div className={styles['right-section']}>
            <ul>
              <li>
                About
              </li>
              <li>
                Work
              </li>
              <li>
                Projects
              </li>
              <li>
                Achievement
              </li>
              <li>
                Get in touch
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default MasterSection