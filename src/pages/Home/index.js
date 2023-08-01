import React from 'react'
import styles from './index.module.css'
import MasterSection from '../../components/MasterSection'
import ContactFloatingButton from '../../components/ContactFloatingButton'
import ProjectsSection from '../../components/ProjectsSection'

const Home = () => {
  return (
    <div className={styles['main-wrapper']}>
      <MasterSection />
      <ProjectsSection />
      <ContactFloatingButton />
    </div>
  )
}

export default Home