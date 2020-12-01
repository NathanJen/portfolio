import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
`

const Image = styled.img`
  width: 30%;
  border: 1px solid gray;
`

const Text = styled.p`
  width: 60%;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 20px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function TextBlock (props) {
  return (
    <Section>
      {props.title && <Title>{props.title}</Title>}
      <Row>
        <Image src={props.image} />
        <Text>{props.text}</Text>
      </Row>
    </Section>
  )
}