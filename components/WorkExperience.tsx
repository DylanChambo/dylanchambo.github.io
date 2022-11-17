import React from 'react';
import styles from '../styles/WorkExperience.module.scss';
import { motion } from 'framer-motion';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        transition = {{ duration: 1.5 }}
        className={styles.container}
    >
        <h3 className={styles.title}>Experience</h3>
        <div className={styles.cardbox}>

        </div>
    </motion.div>
  );
}