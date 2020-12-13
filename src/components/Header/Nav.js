import React, { useContext } from "react"
import styles from './Header.module.scss'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import { NavLink } from "react-router-dom"
import ThemeContext from "../../contexts/theme"
import Lightsaber from './Lightsaber'

export default function Nav ({ menuOpen, toggleMenu }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <nav>
        <ul className={`${theme}List`}>
          <li><NavLink to='/work' onClick={() => menuOpen === true && toggleMenu()}>Work</NavLink></li>
          <li><a href={Resume} rel="noreferrer" target="_blank" onClick={() => menuOpen === true && toggleMenu()}>Resume</a></li>
          <li><NavLink to='/about' onClick={() => menuOpen === true && toggleMenu()}>About</NavLink></li>
        </ul>
      </nav>
      <div className={styles.lightsaberContainer} onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
        <Lightsaber theme={theme} />
      </div>
    </React.Fragment>
  )
}