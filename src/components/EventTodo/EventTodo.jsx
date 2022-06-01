import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {MdStar} from 'react-icons/md'

function EventTodo() {
    return (
        <VerticalTimeline animate={true} layout="2-columns" lineColor='gray'>
            <VerticalTimelineElement 
                className="vertical-timeline-element--work "
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
            >
                <h3 className="p-4 vertical-timeline-element-title title has-text-white">{"Preparation before expert talk"}</h3>
                {/* <h4 className="vertical-timeline-element-subtitle subtitle has-text-white">Miami, FL</h4> */}
                {/* <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: 'tomato', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title title has-text-white">{"After Expert talk"}</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<MdStar/>}
            />
        </VerticalTimeline>
    )
}

export default EventTodo