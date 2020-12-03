import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 20px;
  font-family: 'Open Sans';
`

export default function TextBlock (props) {
  return (
    <Section>
      <Title>{props.title}</Title>
      {props.children}
    </Section>
  )
}