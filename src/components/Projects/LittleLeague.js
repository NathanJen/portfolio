import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import Test from '../../assets/Projects/little-league/test.png'
import { useInView } from 'react-intersection-observer'
import TextBlock from './TextBlock'
import ImageBlock from './ImageBlock'

export default function LittleLeague () {
  const [ref, inView] = useInView({ threshold: 0 })
  const [ref2, inView2] = useInView({ threshold: 0 })
  const [ref3, inView3] = useInView({ threshold: 0 })
  const [ref4, inView4] = useInView({ threshold: 0 })
  const [ref5, inView5] = useInView({ threshold: 0 })
  const [ref6, inView6] = useInView({ threshold: 0 })

  return (
    <div>
      <ProjectIntro
        image={Test}
        name='Little League Responsive Website'
        timeline='Oct - Dec 2018'
        role='UX/UI Design'
        team='Corey Emery, Sasha Meng'
      />
      <main>
        <nav className={styles.sectionNav}>
          <ol>
            <li>
              <a href="#overview" className={inView ? styles.active : null}>Overview</a>
            </li>
            <li>
              <a href="#goals" className={inView2 && !inView ? styles.active : null}>Research</a>
            </li>
            <li>
              <a href="#implementation" className={inView3 && !inView && !inView2 ? styles.active : null}>Synthesis &amp; Analysis</a>
            </li>
            {/* <li>
              <a href="#implementation" className={inView4 && !inView && !inView3 ? styles.active : null}>Initial Work</a>
            </li>
            <li>
              <a href="#implementation" className={inView5 && !inView && !inView4 ? styles.active : null}>Final Designs</a>
            </li>
            <li>
              <a href="#implementation" className={inView6 && !inView && !inView5 ? styles.active : null}>Reflection</a>
            </li> */}
          </ol>
        </nav>
        <div inView={inView}>
          <section id="overview" ref={ref}>
            <h6>Overview</h6>
            <TextBlock title="Project Description">
              <p>
                For my Interaction Design Studio 1 class, my team and I designed a mobile responsive website to 
                alleviate Youth Little League Pain Points.
              </p>
            </TextBlock>
            <TextBlock title="The Problem">
              <p>
                How Can We Use Design To Help Little Leagues Improve Their Communication During Emergencies?
              </p>
            </TextBlock>
          </section>
          <section id="goals" ref={ref2}>
            <h6>Research</h6>
            <TextBlock title="Goals">
              <p>1. What's so bad about the current level of communication?</p>
              <p>2. What are the negative consequences of poor communication?</p>
              <p>3. How aware are people about this pain point?</p>
            </TextBlock>
            <TextBlock title="Background Research">
              <p>
                We learned that a lot of the frameworks that exist today aim to help coaches with registration and team management, 
                but struggle with group contact, coordination, and notifications.               
              </p>
            </TextBlock>
            <TextBlock title="Stakeholder Interviews">
              <p>
                Coaches:<br/>
                They understand the importance of communication, but believe that sending updates  is time consuming.        
              </p>
              <p>
                Parents:<br/>
                The majority believe that current little leagues struggle with a lack of communication, especially 
                when there is a field change or game cancellation.              
              </p>
              <p>
                League Owners:<br/>
                All believe that communication breakdown is a real issue, and believes that the root of the issue is that 
                alerts can come from many sources, such as text, email, or on the website. 
              </p>
            </TextBlock>
          </section>
          <section id="implementation" ref={ref3}>
            <h6>Synthesis &amp; Analysis</h6>
            <TextBlock title="Customer Journey Map">
              <p>
                The customer journey map allowed our team to visualize where the customer experiences pain in 
                their experience.
              </p>
            </TextBlock>
            <ImageBlock image={Test} />
          </section>
        </div>
      </main>
    </div>
  )
}