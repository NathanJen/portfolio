import React, { useEffect } from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import Test from '../../assets/Projects/cmu-iff/test.png'
import { useInView } from 'react-intersection-observer';

// Code inspiration from https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

export default function FilmFestival () {
  const [ref, inView] = useInView({ threshold: 0 })
  const [ref2, inView2] = useInView({ threshold: 0 })
  const [ref3, inView3] = useInView({ threshold: 0 })

  return (
    <div>
      <ProjectIntro
        image={Test}
        name='CMU-IFF Website'
        timeline='Oct - Dec 2018'
        role='UI Engineer'
        team='Shannon Ding'
      />
      <main>
        <nav className={styles.sectionNav}>
          <ol>
            <li>
              <a href="#overview" className={inView ? styles.active : null}>Overview</a>
            </li>
            <li>
              <a href="#goals" className={inView2 && !inView ? styles.active : null}>Goals</a>
            </li>
            <li>
              <a href="#implementation" className={inView3 && !inView && !inView2 ? styles.active : null}>Implementation</a>
            </li>
          </ol>
        </nav>
        <div inView={inView}>
          <section id="overview" ref={ref}>
            <h6>Overview</h6>
            <p>Project Description</p>
            <p>
              For the 2020 CMU-IFF festival, I am serving as the webmaster. You can see 
              the current deployed website at: https://www.cmu.edu/faces/.
            </p>
            <p>The Problem</p>
            <p>
              The website acts as the primary source of information for The Carnegie Mellon 
              International Film Festival (CMU-IFF). Thus, the CMU-IFF website needs to have 
              a good UX/UI to promote awareness about the events and help facilitate the 
              purchase of tickets. 
            </p>
          </section>
          <section id="goals" ref={ref2}>
            <h6>Goals</h6>
            <p>Project Description</p>
            <p>
              For the 2020 CMU-IFF festival, I am serving as the webmaster. You can see 
              the current deployed website at: https://www.cmu.edu/faces/.
            </p>
            <p>The Problem</p>
            <p>
              The website acts as the primary source of information for The Carnegie Mellon 
              International Film Festival (CMU-IFF). Thus, the CMU-IFF website needs to have 
              a good UX/UI to promote awareness about the events and help facilitate the 
              purchase of tickets. 
            </p>
          </section>
          <section id="implementation" ref={ref3}>
            <h6>Implementation</h6>
            <p>Project Description</p>
            <p>
              For the 2020 CMU-IFF festival, I am serving as the webmaster. You can see 
              the current deployed website at: https://www.cmu.edu/faces/.
            </p>
            <p>The Problem</p>
            <p>
              The website acts as the primary source of information for The Carnegie Mellon 
              International Film Festival (CMU-IFF). Thus, the CMU-IFF website needs to have 
              a good UX/UI to promote awareness about the events and help facilitate the 
              purchase of tickets. 
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}