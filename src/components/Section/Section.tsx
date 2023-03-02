import React from 'react'
import styles from './Section.module.scss';

type Props = {
    children?: React.ReactNode;
    title?: string,
    id?: string
}

export default function Section({ title, id, children }: Props) {
  return (
    <section className={styles.section} id={id}>
        <Title title={title} />
        <div className={styles.container}>
            {children}
        </div>
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
