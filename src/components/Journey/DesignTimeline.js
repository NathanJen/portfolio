import React from 'react'
import styles from './Journey.module.scss'
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function DesignTimeline ({ theme }) {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline className={`${theme}Line`}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2018"
          dateClassName={theme}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Data Driven Display</h3>
          <h4 className="vertical-timeline-element-subtitle">UX/UI Design</h4>
          <p>
            Designing a large environmental display for transporation
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2018"
          dateClassName={theme}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Little League</h3>
          <h4 className="vertical-timeline-element-subtitle">UX/UI Design</h4>
          <p>
            Designing a responsive website for Little Leagues
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Fall 2019"
          dateClassName={theme}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Box Fox</h3>
          <h4 className="vertical-timeline-element-subtitle">Service Design</h4>
          <p>
            Designing a service to simplify the return process
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Summer 2020"
          dateClassName={theme}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">ADC Housing Website Redesign</h3>
          <h4 className="vertical-timeline-element-subtitle">UX/UI Design</h4>
          <p>
            Redesigning an apartment listing website
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}