import React, { useContext } from 'react'
import styles from './HomePage.module.scss'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import Headshot from '../../assets/HomePage/headshot.png'
import Baseball from '../../assets/HomePage/baseball.png'
import FilmFestival from '../../assets/HomePage/film-festival.png'
import ThemeContext from "../../contexts/theme"

function Intro () {
  return (
    <div className={styles.introRow}>
      <div className={styles.introText}>
        <h1>Hi! I'm Nathan</h1>
        <p>
          I'm a <b>Designer</b> and <b>Developer</b> who is 
          currently a Master of HCI student at&nbsp;
          <a href='https://www.hcii.cmu.edu/' className={styles.cmu} rel="noreferrer" target="_blank">Carnegie Mellon</a>.
        </p>
        <p>
          * Fall 2020 pieces coming soon! (I hope)
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
        link='/work/little-league'
        image={Baseball}
      />
      <ProjectsCard 
        name="CMU-IFF 2020 Festival Website"
        description="Implementing the 2020 website for the Carnegie Mellon International Film Festival using HTML, CSS, and Javascript."
        category="UI Engineering"
        dates="Jan 2019 - Present"
        link='/work/cmu-iff'
        image={FilmFestival}
      />
    </div>
  )
}

function ProjectsCard ({ name, description, category, dates, link, image, squareImg }) {
  const { theme } = useContext(ThemeContext)

  return (
    <NavLink to={link}>
      <div className={`${styles.projectsCard} projectsCard${theme}`}>
        <div className={styles.projectInfo}>
          <div className={styles.row}>
            <p className={styles.category}>{category}</p>
            <p className={styles.dates}>{dates}</p>
          </div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.description}>{description}</p>
          <p className={styles.projectLink}>See More</p>
        </div>
        <ProjectImgContainer image={image} squareImg={squareImg}></ProjectImgContainer>
      </div>
    </NavLink>
  )
}

export default function HomePage () {
  return (
    <div className='contentContainer'>
      <Intro />
      <Projects />
    </div>
  )
}

const ProjectImgContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1240px) {
    width: 45%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 300px;
  }
`