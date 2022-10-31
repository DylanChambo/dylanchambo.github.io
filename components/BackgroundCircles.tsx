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
        <div className={[styles.circle1, styles.circle, styles.ping].join(" ")} />
        <div className={[styles.circle2, styles.circle].join(" ")} />
        <div className={[styles.circle3, styles.circle].join(" ")} />
        <div className={[styles.circle4, styles.circle, styles.pulse].join(" ")} />
        <div className={[styles.circle5, styles.circle].join(" ")} />
    </motion.div>
  )
}