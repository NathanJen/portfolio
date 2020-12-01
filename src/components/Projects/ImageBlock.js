import React from 'react'
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  height: auto;
`

export default function ImageBlock (props) {
  return (
    <Image src={props.image} />
  )
}