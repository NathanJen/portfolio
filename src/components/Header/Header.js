import React, { useState, useContext } from "react"
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom"
import { Twirl as Hamburger } from "hamburger-react"
import styled from "styled-components"
import Nav from './Nav'
import MobileHeader from './MobileHeader'
import ThemeContext from "../../contexts/theme"

// responsive inspiration from https://github.com/trujic1000/react-navbar/
const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export default function Header () {
  const { theme } = useContext(ThemeContext)
  const [menuOpen, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menuOpen);

  return (
    <HeaderContainer>
      <header>
        <h1 className={styles.logo}><NavLink to='/'>Nathan Jen</NavLink></h1>
        <Nav toggleMenu={toggleMenu} /> 
        <Hamburger 
          className={styles.hamburger} 
          toggled={menuOpen} 
          toggle={toggleMenu} 
          duration={.3}
          color={theme === 'dark' ? "#FFFFFF" : "#000000"}
        />
      </header>
      <MobileHeader 
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
    </HeaderContainer>
  )
}

