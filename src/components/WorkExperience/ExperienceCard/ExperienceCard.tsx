import React from 'react';
import styles from './ExperienceCard.module.scss';
import { motion } from 'framer-motion';
import { Experience } from '../../../models/Experience';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className={styles.container}>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                className={styles.image}
                src={urlForImage(experience?.companyImage).url()}
                alt=""
            />

            <div>
                <h4 className={styles.title}>{experience.jobTitle}</h4>
                <p className={styles.company}>{experience.company}</p>
                <div className={styles.tech_container}>
                    {/* Tech Used */}
                    {experience.technologies.map(tech => (
                        <Image alt="" className={styles.tech} key={tech._id} src={urlForImage(tech?.image).url()} />
                    ))}
                </div>
                <p className={styles.time}>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className={styles.list}>
                    {experience?.points?.map((point, id) => (
                        <li key={id}>{point}</li>
                    ))}
                </ul>
            </div>

        </article>
    )
}

