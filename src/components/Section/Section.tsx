import React from 'react'
import styles from './Section.module.scss';

type Props = {
    children?: React.ReactNode;
    title?: string,
    id?: string,
    background?: boolean;
}

export default function Section({ title, id, children, background = false }: Props) {
  return (
    <section className={styles.section} id={id}>
        <Title title={title} />
        <div className={styles.container}>
            {children}
        </div>
        <Background background={background}/>
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

function Background({ background }: Props) {
    if (background) {
        return(<div className={styles.stripe}/>)
    }
    else {
        return null;
    }
}
