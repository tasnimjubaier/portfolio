import React from 'react'
import styles from './index.module.css'

const ContactsSection = () => {
  return (
    <div className={styles['master-wrapper']}>
      <div className={styles['wrapper-2']}>
        <div className={styles['wrapper-3']}>
          <div className={styles['cross']} />
          <div className={styles['content']}>
            Contact me
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsSection