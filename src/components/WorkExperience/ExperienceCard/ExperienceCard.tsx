import React from 'react';
import styles from './ExperienceCard.module.scss';
import {motion} from 'framer-motion';

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className={styles.container}>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{duration: 1 }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            viewport={{once: true}}
            className={styles.image} 
            src="https://mms.businesswire.com/media/20171101005965/en/621854/5/vista_highres.jpg"
            alt=""
        />

        <div>
            <h4 className={styles.title}>Software Engineering Intern</h4>
            <p className={styles.company}>Vista</p>
            <div className={styles.tech_container}>
                {/* Tech Used */}
                <img className={styles.tech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"/>
                <img className={styles.tech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"/>
                <img className={styles.tech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"/>
            </div>
            <p className={styles.time}>Nov 28 2022 - Feb 24 2023</p>
            <ul className={styles.list}>
                <li>Frontend Development with Angular</li>
                <li>Backend Development with .NET</li>
                <li>Worked with a team of interns to develop Vista Media Library from scratch</li>
            </ul>
        </div>
        
    </article>
  )
}

