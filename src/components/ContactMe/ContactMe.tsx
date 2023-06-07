import { IoCallSharp, IoMailSharp, IoLocationSharp } from 'react-icons/io5';
import styles from './ContactMe.module.scss';
import React from 'react'
import Section from '../Section/Section';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:dylan.chambo@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.%0A${formData.message}`;
  };
  return (
    <Section title="Contact" id='contact'>
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

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formTop}>
          <input {...register('name')} className={styles.inputBox} type="text" placeholder='Name' />
          <input {...register('email')} className={styles.inputBox} type="email" placeholder='Email' />
        </div>
        <input {...register('subject')} className={styles.inputBox} type="text" placeholder='Subject' />
        <textarea {...register('message')} placeholder='Message' className={styles.inputBox} />
        <button type="submit" className={styles.button}>Submit</button>
      </form>

    </Section>
  )
}