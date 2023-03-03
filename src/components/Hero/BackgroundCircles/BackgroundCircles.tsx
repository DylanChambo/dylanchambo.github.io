import React from 'react';
import styles from "./BackgroundCircles.module.scss";
import { motion } from "framer-motion";

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial = {{
        opacity: 0,
        scale: 1,
      }}
      animate = {{
        scale: [1, 3, 0.1, 1],
        opacity: 1.0,
      }}
      transition = {{
        duration: 2,
      }}
      className={styles.container}
    >
        <div className={styles.pingCircle} />
        <div className={styles.pulseCircle} />
    </motion.div>
  )
}