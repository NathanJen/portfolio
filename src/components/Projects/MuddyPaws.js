import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import { useInView } from 'react-intersection-observer'
import TextBlock from './TextBlock'
import Test from '../../assets/Projects/cmu-iff/test.png'
import FadeIn from '../FadeIn/FadeIn'

export default function FilmFestival () {
  const [ref, inView] = useInView({ threshold: 0 })
  const [ref2, inView2] = useInView({ threshold: 0 })
  const [ref3, inView3] = useInView({ threshold: 0 })

  return (
    <div>
      <ProjectIntro
        image={Test}
        name='Muddy Paws'
        timeline='Sep - Nov 2020'
        role='UI Engineer'
        team='Me :)'
      />
      <main>
        <nav className={styles.sectionNav}>
          <ol>
            <li>
              <a href="#overview" className={inView ? styles.active : null}>Overview</a>
            </li>
            <li>
              <a href="#paper" className={inView ? styles.active : null}>Paper Prototyping</a>
            </li>
            <li>
              <a href="#goals" className={inView2 ? styles.active : null}>Prototyping with Figma</a>
            </li>
            <li>
              <a href="#implementation" className={inView3 ? styles.active : null}>HTML / CSS Prototypes</a>
            </li>
            <li>
              <a href="#implementation" className={inView3 ? styles.active : null}>Final Prototypes with React</a>
            </li>
          </ol>
        </nav>
        <div inView={inView}>
          <FadeIn>
            <section id="overview" ref={ref}>
              <h6>Overview</h6>
              <TextBlock title="Project Description">
                <p>
                  For my Programming Usable Interfaces class, I had to iteratively design and prototype an ecommerce
                  website for <b>Muddy Pas Adventure Gear</b>, a fictional store that sells customizable hiking
                  and adventuring gear for pets. 
                </p>
              </TextBlock>
            </section>
          </FadeIn>
          <FadeIn>
            <section id="paper" ref={ref2}>
              <h6>Paper Prototyping</h6>
              <TextBlock title="Initial Work">
                <p>
                  The first step was to create paper prototypes for a desktop viewing experience for three screens:
                </p>
                <p>
                  1. Home Page <br/>
                  2. Product Browsing Page <br/>
                  3. Product Details Page
                </p>
              </TextBlock>
              <TextBlock title="First Iteration Feedback">
                <p>
                  After completing my prototypes, I then sought out 2 classmates to test my website with. For usability studies
                  to be successful, you need to
                </p>
                <p>
                  1. Home Page <br/>
                  2. Product Browsing Page <br/>
                  3. Product Details Page
                </p>
              </TextBlock>
              <TextBlock title="Second Iteration">
                <p>
                  After completing my prototypes, I then sought out 2 classmates to test my website with. For usability studies
                  to be successful, you need to
                </p>
                <p>
                  1. Home Page <br/>
                  2. Product Browsing Page <br/>
                  3. Product Details Page
                </p>
              </TextBlock>
            </section>
          </FadeIn>
          <FadeIn>
            <section id="paper" ref={ref2}>
              <h6>Prototyping with Figma</h6>
              <TextBlock title="Initial Work">
                <p>
                  The first step was to create paper prototypes for a desktop viewing experience for three screens:
                </p>
                <p>
                  1. Home Page <br/>
                  1. Product Browsing Page <br/>
                  1. Product Details Page
                </p>
              </TextBlock>
            </section>
          </FadeIn>
          <FadeIn>
            <section id="paper" ref={ref2}>
              <h6>HTML / CSS Prototypes</h6>
              <TextBlock title="Initial Work">
                <p>
                  The first step was to create paper prototypes for a desktop viewing experience for three screens:
                </p>
                <p>
                  1. Home Page <br/>
                  1. Product Browsing Page <br/>
                  1. Product Details Page
                </p>
              </TextBlock>
            </section>
          </FadeIn>
          <FadeIn>
            <section id="paper" ref={ref2}>
              <h6>Final Prototypes with React</h6>
              <TextBlock title="Initial Work">
                <p>
                  The first step was to create paper prototypes for a desktop viewing experience for three screens:
                </p>
                <p>
                  1. Home Page <br/>
                  1. Product Browsing Page <br/>
                  1. Product Details Page
                </p>
              </TextBlock>
            </section>
          </FadeIn>
        </div>
      </main>
    </div>
  )
}