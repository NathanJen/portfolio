import React, { useContext } from 'react'
import { Section, SectionTitle } from '../../assets/StyledComponents/About'
import styled from 'styled-components'
import ThemeContext from "../../contexts/theme"
import BoyhoodPoster from '../../assets/About/boyhood-poster.png'
import ArrivalPoster from '../../assets/About/arrival-poster.png'
import MulhollandDrivePoster from '../../assets/About/mulholland-drive-poster.png'
import MoonriseKingdomPoster from '../../assets/About/moonrise-kingdom-poster.png'


const MovieCard = ({ poster, title, link }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Card href={link} rel="noreferrer" target="_blank" theme={theme}>
      <Poster src={poster} alt='Movie Poster' />
      <MovieTitle>{title}</MovieTitle>
    </Card>
  )
}

export default function Movies () {
  return (
    <Section>
      <SectionTitle>Favorite Movies   🍿</SectionTitle>
      <Row>
        <MovieCard 
          poster={BoyhoodPoster} 
          title='Boyhood (2014)' 
          link='https://www.imdb.com/title/tt1065073/?ref_=fn_al_tt_1'
        />
        <MovieCard 
          poster={ArrivalPoster} 
          title='Arrival (2016)'
          link='https://www.imdb.com/title/tt2543164/?ref_=nv_sr_srsg_0'
        />
        <MovieCard 
          poster={MulhollandDrivePoster} 
          title='Mulholland Drive (2001)'
          link='https://www.imdb.com/title/tt0166924/?ref_=nv_sr_srsg_0'
        />
        <MovieCard 
          poster={MoonriseKingdomPoster} 
          title='Moonrise Kingdom (2012)'
          link='https://www.imdb.com/title/tt1748122/?ref_=nv_sr_srsg_0'
        />
      </Row>
      <LetterboxdLink 
        href='https://letterboxd.com/nathanjen/'
        rel="noreferrer" target="_blank"
      >
        Check out my letterboxd to see what I’m currenty watching!
      </LetterboxdLink>
    </Section>
  )
}

const LetterboxdLink = styled.a `
  font-family: Poppins;
  font-size: 18px;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
`

const Poster = styled.img`
  width: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`

const Card = styled.a`
  width: 22%;
  background-color: ${props => props.theme === "dark" ? " #1E1E1E" : "white"};
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  transition: all 0.15s ease-out;

  &:hover {
    transform: translateY(-1vh);
    transition-timing-function: ease-in;
    transition: 0.25s;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 700px) {
    width: 47%;
    margin-bottom: 30px;
  }
`

const MovieTitle = styled.p`
  font-family: Circe;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
