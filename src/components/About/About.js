import React, { useContext, useState } from 'react'
import styles from './About.module.scss'
import Pokemon from '../../assets/About/pokemon.jpeg'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import ThemeContext from "../../contexts/theme"
import styled from 'styled-components'
import Movies from './Movies'

function Intro () {
  return (
    <div className={styles.aboutRow}>
      <div className={styles.aboutImageContainer}>
        <img src={Pokemon} alt='Me with Pokemon Plushies' />
      </div>
      <div className={styles.aboutTextContainer}>
        <h1>So, who am I?</h1>
        <p>
          I’m a Designer and Devloper and currently pursuing a Master of HCI at CMU. I also just recently 
          graduated from CMU with a degree in Information Systems.
        </p>
        <p>
          While I don’t consider myself a designer in the traditional sense, I constantly strive to solve 
          problems and giving people joy. This desire coupled with my passion for technology means that I 
          dream to deliver people joy by designing meaninful experiences that use technology to solve very 
          real problems. 
        </p>
        <p>
          Outside of school and work, I am a huge fan of movies, video games, and LA sports 🤓!
        </p>
      </div>
    </div>
  )
}

function Contact ({ theme }) {
  return (
    <div className={`${styles.contactContainer} ${theme}ContactCard`}>
      <h6>Lets Talk! ☎</h6>
      <p>
        I’m always looking to meet new people so I can become a better designer by continuing to learn 
        new perspectives, while also hopefully imparting knowledge that I am so greateful and lucky to have. 
      </p>
      <div className={styles.linksRow}>
        <a href="mailto:nathanjen@me.com">Email</a>
        <a href="https://www.linkedin.com/in/nathanjen/" rel="noreferrer" target="_blank">LinkedIn</a>
        <a href={Resume} rel="noreferrer" target="_blank">Resume</a>
      </div>
    </div>
  )
}

export default function About () {
  const { theme } = useContext(ThemeContext)
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='contentContainer'>
      <Intro />
      <Contact theme={theme} />
      {!expanded && <Button theme={theme} onClick={() => setExpanded(true)}>Click for Fun Facts About Me!</Button>}
      {expanded &&
        <React.Fragment>
          <Movies />
          <p></p>
        </React.Fragment>
      }
    </div>
  )
}

const Button = styled.button`
  margin: 0 auto;
  display: block;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${props => props.theme === "dark" ? "#121212" : "white"};
  font-size: 18px;
  color: #1D90FF;
  border: 2px solid #1D90FF;
`