import React from 'react'
import styles from './Section.module.scss';

type Props = { 
    title?: string,
    id?: string
}

export default function Section({ title,id }: Props) {
  return (
    <section className={styles.section} id={id}>
        <Title title={title} />
        <div className={styles.container}></div>
    </section>
  )
}

function Title({ title }: Props) {
    if (title) {
        return(<h3 className={styles.title}>{title}</h3>)
    }
    else {
        return null;
    }
}
