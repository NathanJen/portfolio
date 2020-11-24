import React from 'react'
import styles from './HomePage.module.scss'
import Headshot from '../../assets/HomePage/headshot.png'
import Baseball from '../../assets/HomePage/baseball.png'

function Intro () {
  return (
    <div className={styles.row}>
      <div className={styles.introText}>
        <h1>Hi! I'm Nathan</h1>
        <p>
          I'm a <b>Designer</b> and <b>Developer</b> who is 
          currently a Master of HCI candidate at
          <a href='https://www.hcii.cmu.edu/' className={styles.cmu}> Carnegie Mellon</a>.
        </p>
      </div>
      <div className={styles.headshotContainer}>
        <img src={Headshot} alt='Headshot' />
      </div>
    </div>
  )
}

function Projects () {
  return (
    <div className={styles.projectsContainer}>
      <h2>Featured Projects</h2>
      <ProjectsCard 
        name="Little League Responsive Website"
        description="Designing a mobile-responsibe website that woud help Little Leagues increase communication during emergencies."
        category="UX/UI Design"
        dates="Oct - Dec 2018"
        image={Baseball}
      />
    </div>
  )
}

function ProjectsCard ({ name, description, category, dates, image }) {
  return (
    <div className={styles.projectsCard}>
      <div className={styles.projectInfo}>
        <div className={styles.row}>
          <p className={styles.category}>{category}</p>
          <p className={styles.dates}>{dates}</p>
        </div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.projectLink}>See More</p>
      </div>
      <div className={styles.projectImageContainer}>
        <img src={image} alt="Project" />
      </div>
    </div>
  )
}

export default function HomePage () {
  return (
    <div className={styles.contentContainer}>
      <Intro />
      <Projects />
    </div>
  )
}
