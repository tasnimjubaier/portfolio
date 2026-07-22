import React from 'react';

import styles from './index.module.css'

const ProjectsSection = () => {


  return  (
    <div className={styles['master-wrapper']}>
      <div className={styles['wrapper-2']}>
        <div className={styles['wrapper-3']}>
          <div className={styles['cross']} />
          <div className={styles['content']}>
            <div className={styles['content']}>
              
              {/* <Canvas>
                <pointLight position={[10, 10, 10]} />
                <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
                  <sphereGeometry args={[1, 16, 16]} />
                  <sphereGeometry args={[1, 32]} />
                  <meshStandardMaterial color="hotpink" transparent />
                </mesh>
              </Canvas> */}
              
              {/* <motion.div
      layout
      style={{ height: isOpen ? "100px" : "500px" }}
      onClick={() => setIsOpen(!isOpen)}
    /> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection