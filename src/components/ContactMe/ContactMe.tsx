import { IoCallSharp, IoMailSharp, IoLocationSharp } from 'react-icons/io5';
import styles from './ContactMe.module.scss';
import React from 'react'
import Section from '../Section/Section';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../../models/PageInfo';

type Props = {
  pageInfo: PageInfo
}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}.%0A${formData.message}`;
  };
  return (
    <Section title="Contact" id='contact'>
      <h4 className={styles.header}>
        <span className={styles.underlined}>{"Let's Talk."}</span>
      </h4>
      <div className={styles.contacts}>
        <div className={styles.contactContainer}>
          <IoCallSharp className={styles.contactItem} />
          <p className={styles.contactText}>{pageInfo.phoneNumber}</p>
        </div>

        <div className={styles.contactContainer}>
          <IoMailSharp className={styles.contactItem} />
          <p className={styles.contactText}>{pageInfo.email}</p>
        </div>

        <div className={styles.contactContainer}>
          <IoLocationSharp className={styles.contactItem} />
          <p className={styles.contactText}>{pageInfo.location}</p>
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