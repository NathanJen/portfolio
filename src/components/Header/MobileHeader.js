import React, { useEffect } from "react"
import styled from "styled-components"
import Nav from './Nav'

const MobileNavbar = ({ menuOpen, toggleMenu }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen]);

  return (
    <React.Fragment>
      {menuOpen && (
        <MobileNav>
          <Nav toggleMenu={toggleMenu} />
        </MobileNav>
      )}
    </React.Fragment>
  );
};

export default MobileNavbar;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(40px);
`