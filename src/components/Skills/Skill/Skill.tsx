import { motion } from 'framer-motion';
import React from 'react'
import styles from './Skill.module.scss';

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <motion.div 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        className={styles.skill}>
        <img
            className={styles.image}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            alt=""
        />
        <div className={styles.container}>
            <p className={styles.profieciency}>85%</p>
        </div>
    </motion.div>
  )
}