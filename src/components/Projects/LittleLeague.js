import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import Test from '../../assets/Projects/little-league/test.png'

export default function LittleLeague () {
  return (
    <div>
      <ProjectIntro
        image={Test}
        name='Little League Responsive Website'
        timeline='Oct - Dec 2018'
        role='UX/UI Design'
        team='Corey Emery, Sasha Meng'
      />
    </div>
  )
}