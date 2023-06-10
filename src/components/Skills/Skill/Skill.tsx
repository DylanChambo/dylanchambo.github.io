import { motion } from 'framer-motion';
import React from 'react'
import styles from './Skill.module.scss';
import { Skill } from '../../../models/Skill';
import { urlForImage } from '../../../../sanity/lib/image';
import Image from 'next/image';

type Props = {
    skill: Skill
    directionLeft?: boolean;
}

export default function SkillComponent({ skill, directionLeft }: Props) {
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
            <Image
                className={styles.image}
                src={urlForImage(skill?.image).url()}
                alt={skill.title}
            />
            <div className={styles.container}>
                <p className={styles.profieciency}>{skill.progress}%</p>
            </div>
        </motion.div>
    )
}