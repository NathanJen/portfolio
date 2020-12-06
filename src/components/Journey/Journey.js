import React, { useState, useContext } from 'react'
import styles from './Journey.module.scss'
import Design from '../../assets/Journey/paint-palette.png'
import Dev from '../../assets/Journey/coding.png'
import Fabrication from '../../assets/Journey/3d-printer.png'
import DesignTimeline from './DesignTimeline'
import DevTimeline from './DevTimeline'
import FabTimeline from './FabricationTimeline'
import ThemeContext from "../../contexts/theme"

function Intro () {
  return (
    <div className={styles.row}>
      <div className={styles.introTxtContainer}>
        <p>
          While I want to use this portfolio to showcase the work that I am the most proud of, I also 
          want it to be a place that shows my progress as a designer, developer, and fabricator. 
        </p>
        <p>
          In this page, I want to showcase previous work that is imperfect so that I can reflect and learn more 
          from my past experiences.
        </p>
      </div>
    </div>
  )
}

function CategoryCard ({ img, alt, name, onclick }) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${styles.categoryCard} ${theme}Card`} onClick={() => onclick(name)}>
      <img src={img} alt={alt} />
      <h2>{name}</h2>
    </div>
  )
}

export default function Journey () {
  const [category, setCategory] = useState('Design');

  return (
    <div className='contentContainer'>
      <h1 className={styles.title}>My Journey</h1>
      <Intro />
      <div className={styles.categoryRow}>
        <CategoryCard img={Design} alt="Paintbrush and paint palette" name="Design" onclick={setCategory} />
        <CategoryCard img={Dev} alt="Coding text editor" name="Development" onclick={setCategory} />
        <CategoryCard img={Fabrication} alt="3D printer" name="Fabrication" onclick={setCategory} />
      </div>
      {category === 'Design' && <DesignTimeline />}
      {category === 'Development' && <DevTimeline />}
      {category === 'Fabrication' && <FabTimeline />}
    </div>
  )
}