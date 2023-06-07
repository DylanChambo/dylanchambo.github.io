import { IoCallSharp, IoMailSharp, IoLocationSharp } from 'react-icons/io5';
import styles from './ContactMe.module.scss';
import React from 'react'
import Section from '../Section/Section';

type Props = {}

export default function ContactMe({ }: Props) {
  return (
    <Section title="Contact">
      <h4 className={styles.header}>
        I have got just what you need.{" "}
        <span className={styles.underlined}>Lets Talk.</span>
      </h4>
      <div className={styles.contacts}>
        <div className={styles.contactContainer}>
          <IoCallSharp className={styles.contactItem} />
          <p className={styles.contactText}>+64 22 165 0708</p>
        </div>

        <div className={styles.contactContainer}>
          <IoMailSharp className={styles.contactItem} />
          <p className={styles.contactText}>dylan.chambo@gmail.com</p>
        </div>

        <div className={styles.contactContainer}>
          <IoLocationSharp className={styles.contactItem} />
          <p className={styles.contactText}>Auckland, New Zealand</p>
        </div>
      </div>

    </Section>
  )
}