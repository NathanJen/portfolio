import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import Test from '../../assets/Projects/cmu-iff/test.png'
import { useInView } from 'react-intersection-observer'
import TextBlock from './TextBlock'

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
            <TextBlock title="Project Description">
              <p>
                For the 2020 CMU-IFF festival, I am serving as the webmaster. You can see 
                the current deployed website at: https://www.cmu.edu/faces/.
              </p>
            </TextBlock>
            <TextBlock title="The Problem">
              <p>
                The website acts as the primary source of information for The Carnegie Mellon 
                International Film Festival (CMU-IFF). Thus, the CMU-IFF website needs to have 
                a good UX/UI to promote awareness about the events and help facilitate the 
                purchase of tickets. 
              </p>
            </TextBlock>
          </section>
          <section id="goals" ref={ref2}>
            <h6>Goals</h6>
            <TextBlock title="Respnsiveness + Intuitive Navigation">
              <p>
                The current website is unresponsive, overloaded with information, and oversaturated with navigable tabs. 
                This is especially problematic as more people continuously access websites on mobile devices, and the 
                CMU-IFF attracts an older audience.
              </p>
            </TextBlock>
          </section>
          <section id="implementation" ref={ref3}>
            <h6>Implementation</h6>
            <TextBlock title="Description">
              <p>
                This website is created with HTML, CSS, and JavaScript. All the film information is stored in a JSON file, 
                which then gets dynamically rendered into the HTML page through Javascript. The live site can be viewed here 
                at: cmu.edu/faces
              </p>
            </TextBlock>
            <TextBlock title="Next Steps?">
              <p>
                While I made the decision to use HTML, CSS, and JavaScript to ensure that this website can be updated and 
                maintained by more people, looking back, I think that it would’ve been worth it to implement this website 
                with React. There are a lot of template pages, so code modularization though React Components would have 
                been especially useful for development time and quality.
              </p>
              <p>
                Additionally, this website does not have the best performance and I would like to see whether the performance 
                can be optimized through code splitting. 
              </p>
            </TextBlock>
          </section>
        </div>
      </main>
    </div>
  )
}