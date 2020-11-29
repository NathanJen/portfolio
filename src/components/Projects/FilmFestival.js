import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import Test from '../../assets/Projects/cmu-iff/test.png'

export default function FilmFestival () {
  return (
    <div>
      <ProjectIntro
        image={Test}
        name='CMU-IFF Website'
        timeline='Oct - Dec 2018'
        role='UI Engineer'
        team='Shannon Ding'
      />
    </div>
  )
}