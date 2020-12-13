import React, { useContext, useState } from 'react'
import styles from './About.module.scss'
import Pokemon from '../../assets/About/pokemon.jpeg'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import ThemeContext from "../../contexts/theme"
import styled, { keyframes } from 'styled-components'
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
      {!expanded && 
        <SVGWrapper onClick={() => setExpanded(true)}>
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <Shape height="60" width="320" />
          </svg>
          <Text>Click to Learn More About Me!</Text>
        </SVGWrapper>
      }
      {expanded &&
        <React.Fragment>
          <Movies />
          <p></p>
        </React.Fragment>
      }
    </div>
  )
}

// animation inspiration from https://codepen.io/seanmccaffery/pen/xBpbG
const draw = keyframes`
  0% {
    stroke-dasharray: 270 540;
    stroke-dashoffset: -405;
    stroke-width: 8px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 4px;
  }
`

const Shape = styled.rect`
  fill: transparent;
  stroke-dasharray: 270 540;
  stroke-dashoffset: -405;
  stroke-width: 8px;
  stroke: #1D90FF;
`

const SVGWrapper = styled.div`
  height: 60px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;

  &:hover {
    cursor: pointer;
  }

  &:hover ${Shape} {
    animation: 0.3s ${draw} linear forwards;
  }
`

const Text = styled.p`
  color: #1D90FF;
  font-size: 18px;
  line-height: 34px;
  position: relative;
  top: -48px;
  text-align: center;
`