import React from 'react'
import styles from './Header.module.scss'
import Lightsaber from '../../assets/Header/lightsaber.png'
import Resume from '../../assets/Header/Jen_Nathan_Resume.pdf'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>My Journey</li>
        <li><a href={Resume} rel="noreferrer" target="_blank">Resume</a></li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Nathan Jen</h1>
      <Nav />
      <div className={styles.lightsaberContainer}>
        <img src={Lightsaber} alt='Lightsaber' />
      </div>
    </header>
  )
}

