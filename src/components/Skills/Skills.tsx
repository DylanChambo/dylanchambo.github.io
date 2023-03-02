import { motion } from 'framer-motion';
import React from 'react'
import styles from './Skills.module.scss';
import Skill from './Skill/Skill';
import Section from '../Section/Section';

type Props = {}

export default function Skills({}: Props) {
  return (
    <Section title="Skills" id="skills">
        <h3 className={styles.header}>Hover over a skill for current profieciency</h3>

        <div className={styles.gridContainer}>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
      </Section>
  )
}
