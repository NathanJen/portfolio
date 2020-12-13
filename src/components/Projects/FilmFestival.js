import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import { useInView } from 'react-intersection-observer'
import TextBlock from './TextBlock'
import ImageTextBlock from './ImageTextBlock'
import Test from '../../assets/Projects/cmu-iff/test.png'
import OldWebsite from '../../assets/Projects/cmu-iff/cmuiff-old.png'
import OldMobile from '../../assets/Projects/cmu-iff/cmuiff-old-mobile.png'
import FadeIn from '../FadeIn/FadeIn'

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
              <a href="#goals" className={inView2 ? styles.active : null}>Goals</a>
            </li>
            <li>
              <a href="#implementation" className={inView3 ? styles.active : null}>Implementation</a>
            </li>
          </ol>
        </nav>
        <div inView={inView}>
          <FadeIn>
            <section id="overview" ref={ref} style={{paddingTop: "0px"}}>
              <h6>Overview</h6>
              <TextBlock title="Project Description">
                <p>
                  For the 2020 CMU-IFF festival, I am serving as the webmaster. You can see 
                  the current deployed website at: <a href="https://www.cmu.edu/faces/" rel="noreferrer" target="_blank">cmu.edu/faces</a>.
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
          </FadeIn>
          <FadeIn>
            <section id="goals" ref={ref2}>
              <h6>Goals</h6>
              <ImageTextBlock
                title="Improved Responsiveness + Intuitive Navigation"
                image={OldWebsite}
                text="
                      The old website was overloaded with informaiton and oversaturated with navigation tabs,
                      meaning that people had a hard time finding out when events were or buying tickets.
                      "
              />
              <ImageTextBlock
                image={OldMobile}
                text="
                      The old website was also not designed and implemented for smaller screens, which was especially
                      probelmatic as more people today are accessing websites on mobile devices.
                      "
              />
            </section>
          </FadeIn>
          <FadeIn>
            <section id="implementation" ref={ref3}>
              <h6>Implementation</h6>
              <TextBlock title="Details">
                <p>
                  This website is created with HTML, CSS, and JavaScript. All the film information is stored in a JSON file, 
                  which then gets dynamically rendered into the HTML page through Javascript. The live site can be viewed here 
                  at: <a href="https://www.cmu.edu/faces/" rel="noreferrer" target="_blank">cmu.edu/faces</a>
                </p>
                <p>
                  While I was strongly considering Bootstrap for this project, I decided against it because the UI design of the
                  website is so incredibly unique and detailed that I would spend more time fighting and customizing Bootstrap than
                  I would save actually using it.  
                </p>
              </TextBlock>
              <TextBlock title="Next Steps?">
                <p>
                  While I made the decision to use HTML, CSS, and JavaScript to ensure that this website can be updated and 
                  maintained by more people, looking back, I think that it would’ve been worth it to implement this website 
                  with React. There are a lot of pages that use the same design, so code modularization though React Components would have 
                  been especially useful for development time and quality.
                </p>
                <p>
                  Finally, because this was the largest and most complex website that I worked on at the time, there
                  are a lot of changes that I would make if I were to redo this project with my current skills. However, perhaps the biggest change
                  that I would make is to add some interactivity to bring some life into the website. This would help make the
                  website feel less dead or static, and would also just add to the overall enjoyment of using the website. 
                </p>
              </TextBlock>
            </section>
          </FadeIn>
        </div>
      </main>
    </div>
  )
}