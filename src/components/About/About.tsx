import { motion } from 'framer-motion';
import React from 'react'
import Section from '../Section/Section';
import styles from './About.module.scss';
import { PageInfo } from '../../models/PageInfo';
import { urlForImage } from '../../../sanity/lib/image';

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        <Section title="About" id="about">
            <span className={styles.container}>
                <motion.img
                    className={styles.image}
                    src={urlForImage(pageInfo?.profilePic).url()}
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true
                    }}
                />

                <div className={styles.textContainer}>
                    <h4 className={styles.subheader}>Here is a little info about me</h4>
                    <p className={styles.text}>
                        {pageInfo?.backgroundInformation}
                    </p>
                </div>
            </span>
        </Section>
    )
}
