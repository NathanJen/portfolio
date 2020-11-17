import React from 'react'
import styles from './Header.module.scss'
import Lightsaber from '../../assets/Header/lightsaber.png'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>My Journey</li>
        <li>Resume</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default function Header () {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Nathan Jen</h1>
      <Nav />
      <div className={styles.lightsaberContainer}>
        <img src={Lightsaber} alt='Lightsaber' />
      </div>
    </div>
  )
}

