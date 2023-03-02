import { motion } from 'framer-motion'
import styles from '../styles/ContactMe.module.scss';
import React from 'react'

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <motion.div
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        transition = {{ duration: 1.5 }}
        className={styles.container}
    >
        <h3 className={styles.title}>Contact</h3>
    </motion.div>
  )
}