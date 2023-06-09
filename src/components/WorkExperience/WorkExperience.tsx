import React from 'react';
import styles from './WorkExperience.module.scss';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Section from '../Section/Section';
import { Experience } from '../../models/Experience';

type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <Section title="Experience" id="experience">
      <div className={styles.cardbox}>
        {experiences.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </Section>
  );
}