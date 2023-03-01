import { motion } from 'framer-motion';
import React from 'react'
import styles from '../styles/Projects.module.scss';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial = {{ opacity: 0 }}
            whileInView = {{ opacity: 1 }}
            transition = {{ duration: 1.5 }}
            
            className={styles.container}>
            <h3 className={styles.title}>Projects</h3>

            <div className={styles.projects}>
                {projects.map((project, i) => (
                    <div className={styles.project}>
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
                            viewport={{once: true}}
                            className={styles.image}
                            src="https://media.npr.org/assets/img/2022/12/01/jerrylawson-googlehomepage_custom-b28d7e7d4efdaa0c831c97bdaedb9c189897c37e-s1100-c50.jpg"
                            alt=""
                        />
                        <div className={styles.textarea}>
                            <h4 className={styles.projectName}>Project {i+1} of {projects.length}: Google clone</h4>
                            <p className={styles.projectSummary}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra malesuada bibendum.
                                Nulla tristique id turpis eu mollis. In eleifend justo eu egestas maximus. Sed interdum eros aliquam felis pulvinar,
                                vel placerat nisl pharetra. Fusce cursus tortor iaculis mi accumsan ultrices. Phasellus dictum eu elit et pharetra.
                                Aenean cursus enim sit amet nunc hendrerit sollicitudin. Cras quis dui sit amet ligula elementum semper ut quis dui.
                                Mauris malesuada, leo vitae sollicitudin ultricies, libero purus aliquet orci, quis pharetra lacus purus in risus.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.stripe}/>
        </motion.div>
    )
}