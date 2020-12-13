import React from 'react'
import styles from './Journey.module.scss'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import { NavLink } from 'react-router-dom'

export default function DesignTimeline ({ theme }) {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline className={`${theme}Line`}>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2020"
          dateClassName={theme}
        >
          <NavLink to='/work/little-league'>
            <h3 className="vertical-timeline-element-title">ADC Housing Website Redesign</h3>
          </NavLink>
          <h4 className="vertical-timeline-element-subtitle">UX/UI Design</h4>
          <p>Redesigning an apartment listing website</p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          contentStyle={theme === 'dark' ? { background: '#1E1E1E' } : { background: 'white' }}
          className="vertical-timeline-element--work"
          date="Fall 2019"
          dateClassName={theme}
        >
          <NavLink to='/work/little-league'>
            <h3 className="vertical-timeline-element-title">Box Fox</h3>
          </NavLink>
          <h4 className="vertical-timeline-element-subtitle">Service Design</h4>
          <p>
            Designing a service to simplify the return process
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={theme === 'dark' ? { background: '#1E1E1E' } : { background: 'white' }}
          className="vertical-timeline-element--work"
          date="Fall 2018"
          dateClassName={theme}
        >
          <NavLink to='/work/little-league'>
            <h3 className="vertical-timeline-element-title">Little League</h3>
          </NavLink>
          <h4 className="vertical-timeline-element-subtitle">UX/UI Design</h4>
          <p>
            Designing a responsive website for Little Leagues
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Fall 2018"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">Data Driven Display</h3>
          <h4 className="vertical-timeline-element-subtitle">UX/UI Design</h4>
          <p>
            Designing a large environmental display for transporation
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  )
}