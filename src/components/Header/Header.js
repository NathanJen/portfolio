import React, { useContext } from "react"
import styles from './Header.module.scss'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import { NavLink } from "react-router-dom"
import ThemeContext from "../../contexts/theme"
import Lightsaber from '../../assets/Header/lightsaber.png'
import DarkLightsaber from '../../assets/Header/dark-lightsaber.png'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/journey'>My Journey</NavLink></li>
        <li><a href={Resume} rel="noreferrer" target="_blank">Resume</a></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default function Header () {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}><NavLink to='/'>Nathan Jen</NavLink></h1>
      <Nav />
      <div className={styles.lightsaberContainer} onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
        <img src={theme === "dark" ? Lightsaber : DarkLightsaber} alt='Lightsaber' />
      </div>
    </header>
  )
}

