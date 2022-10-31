import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.snap}>
      <Head>
        <title>Dylan's Portolio</title>
        <meta name="description" content="Dylan Chamberlain's Portfolio website" />
        <meta name="author" content="Dylan Chamberlain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* TODO: Hero */}
      <section className={styles.snapItem} id="hero">
        <Hero />
      </section>

      {/* TODO: About */}

      {/* TODO: Experience */}

      {/* TODO: Skills */}

      {/* TODO: Projects */}

      {/* TODO: Contact Me */}

    </div>
  )
}
