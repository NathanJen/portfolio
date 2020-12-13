import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import TextBlock from './TextBlock'
import ImageTextBlock from './ImageTextBlock'
import Test from '../../assets/Projects/cmu-iff/test.png'
import OldWebsite from '../../assets/Projects/cmu-iff/cmuiff-old.png'
import OldMobile from '../../assets/Projects/cmu-iff/cmuiff-old-mobile.png'
import FadeIn from '../FadeIn/FadeIn'
import { Link } from "react-scroll"

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
      <main>
        <Nav />
        <div>
          <FadeIn>
            <section id="overview">
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
            <section id="goals">
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
            <section id="implementation">
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

const Nav = () => {
  return (
    <nav className={styles.sectionNav}>
      <ol>
        <li>
          <Link
            activeClass={styles.active}
            className={styles.navLink}
            to="overview"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Overview
          </Link>
        </li>
        <li>
        <Link
            activeClass={styles.active}
            className={styles.navLink}
            to="goals"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Goals
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            className={styles.navLink}
            to="implementation"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Implementation
          </Link>
        </li>
      </ol>
    </nav>
  )
}