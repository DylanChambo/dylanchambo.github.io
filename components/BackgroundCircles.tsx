import React from 'react';
import styles from "./BackgroundCircles.module.scss";

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div className={styles.container}>
        <div className={[styles.circle1, styles.circle, styles.ping].join(" ")} />
        <div className={[styles.circle2, styles.circle].join(" ")} />
        <div className={[styles.circle3, styles.circle].join(" ")} />
        <div className={[styles.circle4, styles.circle, styles.pulse].join(" ")} />
        <div className={[styles.circle5, styles.circle].join(" ")} />
    </div>
  )
}