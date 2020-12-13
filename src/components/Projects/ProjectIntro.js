import React from 'react'
import styled from 'styled-components'

export default function ProjectIntro ({ image, name, timeline, role, team }) {
  return (
    <React.Fragment>
      <HeroImg src={image} alt="Project hero" />
      <Name>{name}</Name>
      <Row>
        <InformationContainer>
          <Title>Timeline:</Title>
          <p>{timeline}</p>
        </InformationContainer>
        <InformationContainer>
          <Title>Role:</Title>
          <p>{role}</p>
        </InformationContainer>
        <InformationContainer>
          <Title>Team:</Title>
          <p>{team}</p>
        </InformationContainer>
      </Row>
    </React.Fragment>
  )
}

const HeroImg = styled.img`
  width: 100%;
`

const Name = styled.h1`
  margin-top: 70px;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  word-spacing: 10px;

  @media screen and (max-width: 800px) {
    font-size: 36px;
    margin-top: 50px;
    width: 90%;
    margin-left: 5%;
  }
`

const Row = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    margin-top: 100px;
  }
`

const InformationContainer = styled.div`
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;
  }
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`