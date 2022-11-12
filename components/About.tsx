import { motion } from 'framer-motion';
import React from 'react'
import styles from '../styles/About.module.scss';

type Props = {}

export default function About({}: Props) {
  return (
    <div className={styles.container}>
        <h3 className={styles.title}>About</h3>

        <motion.img 
            className={styles.image}
            src = "dylan.png" 
            initial = {{
                x: -200,
                opacity: 0,
            }}
            transition = {{
                duration: 1.2,
            }}
            whileInView = {{ 
                x: 0,
                opacity: 1,
            }}
            viewport = {{ 
                once: true
            }}
        />
    </div>
  )
}
