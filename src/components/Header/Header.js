import React from 'react'
import styles from './Header.module.scss'
import Lightsaber from '../../assets/Header/lightsaber.png'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>My Journey</li>
        <li><a href={Resume} rel="noreferrer" target="_blank">Resume</a></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}><NavLink to='/'>Nathan Jen</NavLink></h1>
      <Nav />
      <div className={styles.lightsaberContainer}>
        <img src={Lightsaber} alt='Lightsaber' />
      </div>
    </header>
  )
}

