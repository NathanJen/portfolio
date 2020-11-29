import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from './Journey.module.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function DevTimeline () {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline className={styles.designLine}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2019 - Present"
          dateClassName={styles.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">CMU-IFF Website</h3>
          <h4 className="vertical-timeline-element-subtitle">UI Engineering</h4>
          <p>
            Developing the website for the 2019-2020 CMU International Film Festival
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Summer 2020"
          dateClassName={styles.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">ADC Housing Website</h3>
          <h4 className="vertical-timeline-element-subtitle">UI Engineering</h4>
          <p>
            Developing a redesigned website
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2020"
          dateClassName={styles.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Muddy Paws</h3>
          <h4 className="vertical-timeline-element-subtitle">Ecommerce Website</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2020"
          dateClassName={styles.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">SSUI</h3>
          <h4 className="vertical-timeline-element-subtitle">Ecommerce Website</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}