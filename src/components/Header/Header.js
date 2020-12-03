import React, { useState } from "react"
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom"
import { Squash as Hamburger } from "hamburger-react"
import styled from "styled-components"
import Nav from './Nav'
import MobileHeader from './MobileHeader'

// responsive inspiration from https://github.com/trujic1000/react-navbar/

const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export default function Header () {
  const [menuOpen, setMenu] = useState(false);
  const toggleMenu = () => setMenu(() => !menuOpen);

  return (
    <HeaderContainer>
      <header>
        <h1 className={styles.logo}><NavLink to='/'>Nathan Jen</NavLink></h1>
        <Nav />
        <Hamburger className={styles.hamburger} toggled={menuOpen} toggle={toggleMenu} duration={.3} />
      </header>
      <MobileHeader menuOpen={menuOpen} />
    </HeaderContainer>
  )
}

