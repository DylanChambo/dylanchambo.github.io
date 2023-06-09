import Head from 'next/head'
import { GetStaticProps } from 'next'
import About from '../components/About/About'
import ContactMe from '../components/ContactMe/ContactMe'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import styles from '../styles/Home.module.scss'
import { getExperiences, getPageInfo, getProjects, getSkills, getSocials } from '../services/infoService'
import { Experience } from '../models/Experience'
import { PageInfo } from '../models/PageInfo'
import { Skill } from '../models/Skill'
import { Social } from '../models/Social'
import { Project } from '../models/Project'

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  skills: Skill[],
  projects: Project[],
  socials: Social[]
}

export default function Home(props: Props) {

  console.log(getSkills());

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await getPageInfo();
  const experiences = await getExperiences();
  const skills = await getSkills();
  const projects = await getProjects();
  const socials = await getSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects
    },
    revalidate: 60
  }
}
