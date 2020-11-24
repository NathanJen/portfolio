import React from 'react'
import styles from './Footer.module.scss'
import LinkedIn from '../../assets/Footer/linkedin.png'
import Instagram from '../../assets/Footer/instagram.png'
import Letterboxd from '../../assets/Footer/film.png'
import Medium from '../../assets/Footer/medium.png'

const footerIcons = [
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/'
  }, 
  {
    icon: Instagram,
    link: 'https://www.linkedin.com/'
  }, 
  {
    icon: Letterboxd,
    link: 'https://www.linkedin.com/'
  }, 
  {
    icon: Medium,
    link: 'https://www.linkedin.com/'
  }
]

const IconRow = () => {
  return (
    <div className={styles.iconRow}>
      {footerIcons.map((icon, index) =>
        <a href={icon.link} className={styles.iconContainer} key={index}>
          <img src={icon.icon} alt='Footer' />
        </a>  
      )}
    </div>
  )
}

export default function Footer () {
  return (
    <footer>
      <IconRow />
      <p>Handcoded with React 💙</p>
    </footer>
  )
}