import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from './Journey.module.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function DevTimeline ({ theme }) {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline className={`${theme}Line`}>
        <VerticalTimelineElement
          contentStyle={theme === 'dark' ? { background: '#1E1E1E' } : { background: 'white' }}
          className="vertical-timeline-element--work"
          date="Fall 2020"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">RemoteHQ</h3>
          <h4 className="vertical-timeline-element-subtitle">React/JS | Firebase | HTML | SCSS</h4>
          <p>
            A virtual hub that allows teams to store their documents.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={theme === 'dark' ? { background: '#1E1E1E' } : { background: 'white' }}
          className="vertical-timeline-element--work"
          date="Fall 2020"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">SSUI</h3>
          <h4 className="vertical-timeline-element-subtitle">React/JS | HTML | SCSS</h4>
          <p>
          Creating an ecommerce website for a fictional clothing store.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={theme === 'dark' ? { background: '#1E1E1E' } : { background: 'white' }}
          className="vertical-timeline-element--work"
          date="Fall 2020"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">Muddy Paws</h3>
          <h4 className="vertical-timeline-element-subtitle">React/JS | Firebase | HTML | SCSS</h4>
          <p>
            Creating an ecommerce website for a fictional pet adventure supplies company.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={theme === 'dark' ? { background: '#1E1E1E' } : { background: 'white' }}
          className="vertical-timeline-element--work"
          date="Fall 2019 - Present"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">CMU-IFF Website</h3>
          <h4 className="vertical-timeline-element-subtitle">JS | HTML | CSS</h4>
          <p>
            Developing the website for the 2019-2020 CMU International Film Festival.
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2020"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">ADC Housing Website</h3>
          <h4 className="vertical-timeline-element-subtitle">UI Engineering</h4>
          <p>
            Developing a redesigned website
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  )
}