import React from 'react'
import styles from './Projects.module.scss'
import ProjectIntro from './ProjectIntro'
import Test from '../../assets/Projects/little-league/test.png'
import { useInView } from 'react-intersection-observer'
import TextBlock from './TextBlock'
import FadeIn from '../FadeIn/FadeIn'
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
            <li>
              <a href="#initial" className={inView4 && !inView && !inView3 ? styles.active : null}>Initial Work</a>
            </li>
            <li>
              <a href="#final" className={inView5 && !inView && !inView4 ? styles.active : null}>Final Designs</a>
            </li>
            <li>
              <a href="#reflection" className={inView6 && !inView && !inView5 ? styles.active : null}>Reflection</a>
            </li>
          </ol>
        </nav>
        <div inView={inView}>
          <FadeIn>
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
          </FadeIn>
          <FadeIn>
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
          </FadeIn>
          <FadeIn>
            <section id="implementation" ref={ref3}>
              <h6>Synthesis &amp; Analysis</h6>
              <TextBlock title="Customer Journey Map">
                <p>
                  The customer journey map allowed our team to visualize where the customer experiences pain in 
                  their experience.
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
              <TextBlock title="Personas">
                <p>
                  Based on our research we created three personas, one from the parents perspective, coach’s perspective, and league owner’s perspective. 
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
              <TextBlock title="Scenarios &amp; Storyboards">
                <p>
                  By including contexts, problems, solutions, and resolutions on our storyboards, we gave context to how our responsive website can help our stakeholders. 
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
            </section>
          </FadeIn>
          <FadeIn>
            <section id="initial" ref={ref4}>
              <h6>Initial Work</h6>
              <TextBlock title="Screen Map">
                <p>
                  Our group created a screen map to helps us avoid a complex layout for our website that can potentially create friction in helping our users accomplish their goals.
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
              <TextBlock title="Lo-Fi Wireframes">
                <p>
                  Our main goal was to figure out how to position the major components within the screen to maximize their visibility or accessibility. Starting from mobile web pages, 
                  we established a website that was mainly focused on notifications.
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
              <TextBlock title="Med-Fi Wireframes">
                <p>
                  Our main goal here was to further flesh out components and features of the screens that we created wireframes for. 
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
            </section>
          </FadeIn>
          <FadeIn>
            <section id="final" ref={ref5}>
              <h6>Final Designs</h6>
              <TextBlock title="Notification Screen">
                <p>
                  This notification system is for emergencies only, so when parents see a text message from the little league, they know it’s urgent and will not ignore it. 
                  We chose a lot of drop-downs to limit the coach’s freedom on what they can do, and drop-down menus are faster than text fields.
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
              <TextBlock title="Push Notications">
                <p>
                  The push notification screen is designed to contain only the vital information that a parent needs to know during an emergency. We made the message content all 
                  caps to draw the users attention, and we underlined the entire message since to communicate that it's a link to a more detailed page about the emergency notification. 
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
              <TextBlock title="Desktop Page">
                <p>
                  The design of our homepage was optimized for external stakeholders, such as grandparents, so we placed a large amount of emphasis on changes to game times and cancellations. 
                  We also decided to add the red warning bar to the top of the page to ensure that any status changes would not be missed by users visiting the site. 
                </p>
                <p>
                  For the game notification bar, we added a stamp that intentionally cover team logos to any games that were delayed or cancelled. To handle multiple changes to game 
                  times/locations, our idea was to add a second warning bar at the top of the page where the various messages would be displayed in sequence, with a fade-in/fade-out transition 
                  between different updates. 
                </p>
              </TextBlock>
              <ImageBlock image={Test} />
            </section>
          </FadeIn>
          <FadeIn>
            <section id="reflection" ref={ref6}>
              <h6>Reflection</h6>
              <TextBlock title="Future Work">
                <p>
                  The first revision that our team would make to our design is to eliminate the share icons at the end of the new notification screen. These icons were too confusing 
                  with the league’s social media icons at the bottom of the page, and were also not relevant with our solution centered around notifications.
                </p>
                <p>
                  Moving forward, we would also remove the redundancy and provide our users clearer desktop web pages. Moreover, we could consider the personal needs of potential 
                  users such as color-blind friendly and low-vision friendly.
                </p>
                <p>
                  Finally, there is still room for improving our visual design and making the web pages more intuitive. For example, we could use flashing colors to indicate the 
                  most recent game plan. Being radical, we could also add functions which support conversational UI so that users can get the information through a different way.
                </p>
              </TextBlock>
            </section>
          </FadeIn>
        </div>
      </main>
    </div>
  )
}