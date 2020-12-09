import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from './Journey.module.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function FabricationTimeline ({ theme }) {
  return (
    <div className={styles.timeline}>
      <VerticalTimeline className={`${theme}Line`}>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          dateClassName={theme}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Fabrication Portfolio</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Documenting my 3D printing struggles as a beginenr
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Spring 2020"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">Applied Fabrication for HCI</h3>
          <h4 className="vertical-timeline-element-subtitle">3D Printing, CNC Milling, Laser Cutting</h4>
          <p>
            Documenting my 3D printing struggles as a beginenr
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Spring 2020"
          dateClassName={theme}
        >
          <h3 className="vertical-timeline-element-title">3D Printer Calibration</h3>
          <h4 className="vertical-timeline-element-subtitle">3D Printing</h4>
          <p>
            Documenting my 3D printing struggles as a beginenr
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}