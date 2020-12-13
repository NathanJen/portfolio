import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"

// code inspiration from https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/
export default function FadeIn(props) {
  const [isVisible, setVisible] = useState(false)
  const [hasViewed, setHasViewed] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting)
        entry.isIntersecting && setHasViewed(true)
      })
    })
    observer.observe(domRef.current)
  }, []);

  return (
    <Fade visible={isVisible || hasViewed} ref={domRef}>
      {props.children}
    </Fade>
  )
}

const Fade = styled.div`
  opacity: 0;
  transform: translateY(12vh);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;

  ${({ visible }) => visible && `
    opacity: 1;
    transform: none;
    visibility: visible;
  `}
`
