import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Skills } from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.snap}>
      <Head>
        <title>Dylan&apos;s Portolio</title>
        <meta name="description" content="Dylan Chamberlain's Portfolio website" />
        <meta name="author" content="Dylan Chamberlain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className={styles.snapStart} id="hero">
        <Hero />
      </section>

      {/* About */}
      <section className={styles.snapCenter} id="about">
        <About />
      </section>

      {/* TODO: Experience */}
      <section className={styles.snapCenter} id="experience">
        <WorkExperience />
      </section>

      {/* TODO: Skills */}
      <section className={styles.snapCenter} id="skills">
        <Skills />
      </section>

      {/* TODO: Projects */}

      {/* TODO: Contact Me */}

    </div>
  )
}
