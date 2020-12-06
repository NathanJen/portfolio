import React, { useContext } from "react"
import styles from './Header.module.scss'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import { NavLink } from "react-router-dom"
import ThemeContext from "../../contexts/theme"
import Lightsaber from '../../assets/Header/lightsaber.png'
import DarkLightsaber from '../../assets/Header/dark-lightsaber.png'

export default function Nav ({ toggleMenu }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><NavLink to='/journey' onClick={() => toggleMenu()}>My Journey</NavLink></li>
          <li><a href={Resume} rel="noreferrer" target="_blank" onClick={() => toggleMenu()}>Resume</a></li>
          <li><NavLink to='/about' onClick={() => toggleMenu()}>About</NavLink></li>
        </ul>
      </nav>
      <div className={styles.lightsaberContainer} onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
        <img src={theme === "dark" ? Lightsaber : DarkLightsaber} alt='Lightsaber' />
      </div>
    </React.Fragment>
  )
}