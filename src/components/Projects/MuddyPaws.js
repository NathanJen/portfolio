import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import TextBlock from './TextBlock'
import Test from '../../assets/Projects/cmu-iff/test.png'
import FadeIn from '../FadeIn/FadeIn'
import { Link } from "react-scroll"

export default function FilmFestival () {

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
        <Nav />
        <div >
          <FadeIn>
            <section id="overview" >
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
            <section id="paper" >
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
            <section id="paper" >
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
            <section id="paper" >
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
            <section id="paper" r>
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
            to="paper"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Paper Prototyping
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            className={styles.navLink}
            to="figma"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Prototyping with Figma
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            className={styles.navLink}
            to="html"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HTML / CSS Prototypes
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            className={styles.navLink}
            to="react"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Final Prototypes with React
          </Link>
        </li>
      </ol>
    </nav>
  )
}