import React, { useContext } from "react"
import styles from './Header.module.scss'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import { NavLink } from "react-router-dom"
import ThemeContext from "../../contexts/theme"
import Lightsaber from '../../assets/Header/lightsaber.svg'
import DarkLightsaber from '../../assets/Header/dark-lightsaber.png'

export default function Nav ({ menuOpen, toggleMenu }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <nav>
        <ul className={`${theme}List`}>
          <li><NavLink to='/journey' onClick={() => menuOpen === true && toggleMenu()}>My Journey</NavLink></li>
          <li><a href={Resume} rel="noreferrer" target="_blank" onClick={() => menuOpen === true && toggleMenu()}>Resume</a></li>
          <li><NavLink to='/about' onClick={() => menuOpen === true && toggleMenu()}>About</NavLink></li>
        </ul>
      </nav>
      <div className={styles.lightsaberContainer} onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
        <img src={theme === "dark" ? Lightsaber : DarkLightsaber} alt='Lightsaber' />
      </div>
    </React.Fragment>
  )
}