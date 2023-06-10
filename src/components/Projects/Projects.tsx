import { motion } from 'framer-motion';
import React from 'react'
import Section from '../Section/Section';
import styles from './Projects.module.scss';
import { Project } from '../../models/Project';
import { urlForImage } from '../../../sanity/lib/image';
import Image from 'next/image';

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    return (
        <Section title="Projects" id="projects" background={true}>

            <div className={styles.projects}>
                {projects.map((project, i) => (
                    <div key={i} className={styles.project}>
                        <motion.img
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{ once: true }}
                            className={styles.image}
                            src={urlForImage(project.image).url()}
                            alt={project.title}
                        />
                        <div className={styles.textarea}>
                            <h4 className={styles.projectName}>Project {i + 1} of {projects.length}: {project.title} </h4>
                            <div className={styles.iconContainer}>
                                {project?.technologies.map(tech => (
                                    <img alt="" className={styles.techIcon} key={tech._id} src={urlForImage(tech.image).url()} />
                                ))}
                            </div>
                            <p className={styles.projectSummary}>
                                {project.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


        </Section>
    )
}