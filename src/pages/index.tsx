import Head from 'next/head'
import About from '../components/About/About'
import ContactMe from '../components/ContactMe/ContactMe'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Section from '../components/Section/Section'
import Skills from '../components/Skills/Skills'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.snapBox}>
      <Head>
        <title>Dylan&apos;s Portolio</title>
        <meta name="description" content="Dylan Chamberlain's Portfolio website" />
        <meta name="author" content="Dylan Chamberlain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <About />

      <WorkExperience />

      <Skills />

      <Projects />

      <ContactMe />
    </div>
  )
}
