import React from 'react';
import styles from './WorkExperience.module.scss';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Section from '../Section/Section';

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <Section title="Experience" id="experience">
        <div className={styles.cardbox}>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
    </Section>
  );
}