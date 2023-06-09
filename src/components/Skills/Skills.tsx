import { motion } from 'framer-motion';
import React from 'react'
import styles from './Skills.module.scss';
import Section from '../Section/Section';
import { Skill } from '../../models/Skill';
import SkillComponent from './Skill/Skill';

type Props = {
  skills: Skill[]
}

export default function Skills({ skills }: Props) {
  return (
    <Section title="Skills" id="skills">
      <h3 className={styles.header}>Hover over a skill for current profieciency</h3>

      <div className={styles.gridContainer}>
        {skills.map((skill, id) => (
          <SkillComponent key={skill._id} skill={skill} directionLeft={(id % 4) < 2} />
        ))}
      </div>
    </Section>
  )
}
