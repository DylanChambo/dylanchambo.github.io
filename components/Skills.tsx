import { motion } from 'framer-motion';
import React from 'react'
import styles from '../styles/Skills.module.scss';

type Props = {}

export function Skills({}: Props) {
  return (
    <motion.div 
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        transition = {{ duration: 1.5 }}
        className={styles.container}
        >
        <h3 className={styles.title}>Skills</h3>
        <h3 className={styles.header}>Hover over a skill for current profieciency</h3>
    </motion.div>
  )
}
