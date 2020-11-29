import React from 'react'
import styles from './Journey.module.scss'
import Plant from '../../assets/Journey/growing.png'
import Design from '../../assets/Journey/paint-palette.png'
import Dev from '../../assets/Journey/coding.png'
import Fabrication from '../../assets/Journey/3d-printer.png'
import DesignTimeline from './DesignTimeline'

function Intro () {
  return (
    <div className={styles.row}>
      <div className={styles.introImgContainer}>
        <img src={Plant} alt="Plant growing" />
      </div>
      <div className={styles.introTxtContainer}>
        <p>
          While I want to use this portfolio to showcase the work that I am the most proud of, I also 
          want it to be a place that shows my progress as a designer, developer, and fabricator. 
        </p>
        <p>
          In this page, I want to showcase previous work that is imperfect so that I can reflect and learn more 
          from my past experiences. Additionally, I want to inspire others by showing where I started from Additionally
          where hard work took me. 
        </p>
      </div>
    </div>
  )
}

function CategoryCard ({ img, alt, name }) {
  return (
    <div className={styles.categoryCard}>
      <img src={img} alt={alt} />
      <h2>{name}</h2>
    </div>
  )
}

export default function Journey () {
  return (
    <div className='contentContainer'>
      <h1 className={styles.title}>My Journey</h1>
      <Intro />
      <div className={styles.categoryRow}>
        <CategoryCard img={Design} alt="Paintbrush and paint palette" name="Design" />
        <CategoryCard img={Dev} alt="Coding text editor" name="Development" />
        <CategoryCard img={Fabrication} alt="3D printer" name="Fabrication" />
      </div>
      <DesignTimeline />
    </div>
  )
}