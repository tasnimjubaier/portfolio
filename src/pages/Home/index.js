import React from 'react'
import styles from './index.module.css'
import MasterSection from '../../components/MasterSection'
import ContactFloatingButton from '../../components/ContactFloatingButton'
import ProjectsSection from '../../components/ProjectsSection'
import WorkSection from '../../components/WorkSection'
import AchievementSection from '../../components/AchievementSection'
import ContactsSection from '../../components/ContactsSection'

const Home = () => {
  return (
    <div className={styles['main-wrapper']}>
      <MasterSection />
      <ProjectsSection />
      <WorkSection />
      <AchievementSection />
      <ContactsSection />
      <ContactFloatingButton />
    </div>
  )
}

export default Home