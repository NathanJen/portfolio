import React, { useContext } from 'react'
import styles from './Footer.module.scss'
import ThemeContext from "../../contexts/theme"
import LinkedIn from '../../assets/Footer/linkedin.png'
import Letterboxd from '../../assets/Footer/film.png'
// import Medium from '../../assets/Footer/medium.png'
import LinkedInDark from '../../assets/Footer/linkedinDark.svg'
import LetterboxdDark from '../../assets/Footer/clapperboard.svg'
// import MediumDark from '../../assets/Footer/medium.svg'
import Email from '../../assets/Footer/email.svg'
import EmailDark from '../../assets/Footer/emailDark.svg'


const footerIcons = [
  {
    icon: LinkedIn,
    darkIcon: LinkedInDark,
    link: 'https://www.linkedin.com/in/nathanjen/'
  }, 
  {
    icon: Letterboxd,
    darkIcon: LetterboxdDark,
    link: 'https://letterboxd.com/nathanjen/'
  }, 
  {
    // from https://www.flaticon.com/free-icon/email_725643?term=email&page=1&position=4&related_item_id=725643
    icon: Email,
    darkIcon: EmailDark,
    link: 'mailto:nathanjen@me.com'
  }
  // {
  //   icon: Medium,
  //   darkIcon: MediumDark,
  //   link: 'https://www.medium.com/'
  // }
]

const IconRow = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.iconRow}>
      {footerIcons.map((icon, index) =>
        <a href={icon.link} rel="noreferrer" target="_blank" className={styles.iconContainer} key={index}>
          <img src={theme === "dark" ? icon.darkIcon : icon.icon} alt='Footer' />
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