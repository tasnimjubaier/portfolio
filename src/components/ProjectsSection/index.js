import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { motion, useMotionValue, useTransform } from "framer-motion";


import styles from './index.module.css'
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const ProjectsSection = () => {
  const x = useMotionValue(0)
const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
const [isOpen, setIsOpen] = useState(false); 


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