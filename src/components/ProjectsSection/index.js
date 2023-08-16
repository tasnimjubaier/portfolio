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
              
              <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>Item 1 </motion.li>
        <motion.li variants={itemVariants}>Item 2 </motion.li>
        <motion.li variants={itemVariants}>Item 3 </motion.li>
        <motion.li variants={itemVariants}>Item 4 </motion.li>
        <motion.li variants={itemVariants}>Item 5 </motion.li>
      </motion.ul>
    </motion.nav>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection