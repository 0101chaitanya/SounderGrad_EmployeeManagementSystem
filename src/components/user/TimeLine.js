import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcManager, FcBusinesswoman } from 'react-icons/fc';
import { GrProjects } from 'react-icons/gr';
import { BsApple } from 'react-icons/bs';
import { MdLunchDining } from 'react-icons/md';
import { SiMotorola } from 'react-icons/si';

import { Container } from 'react-bootstrap';

export default function TimeLine() {
  return (
    <Container>
      <p className='h1 text-success text-center mt-2 pt-2'>
        <u>Monthly activity</u>
      </p>

      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#0275d8', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #0275d8' }}
          date='28/10/21'
          iconStyle={{ background: '#0275d8', color: '#fff' }}
          icon={<FcManager />}>
          <h6 className='vertical-timeline-element-subtitle m-1'>
            Lunch with banglore textiles client
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='30/10/21'
          contentStyle={{ background: '#5cb85c', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5cb85c' }}
          iconStyle={{ background: '#5cb85c', color: '#fff' }}
          icon={<FcBusinesswoman />}>
          <h6 className='vertical-timeline-element-subtitle m-1'>
            Attended React conference
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='8/11/21'
          iconStyle={{ background: 'rgb(223, 156, 13)', color: '#fff' }}
          contentStyle={{ background: 'rgb(223, 156, 13)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(223, 156, 13)' }}
          icon={<GrProjects />}>
          <h6 className='vertical-timeline-element-subtitle m-1'>
            Topped office productivity charts
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='11/11/21'
          iconStyle={{ background: '#5bc0de', color: '#fff' }}
          contentStyle={{ background: '#5bc0de', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5bc0de' }}
          icon={<BsApple />}>
          <h6 className='vertical-timeline-element-subtitle m-1'>
            Played an important role in securing a project with Apple.Inc
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='15/11/21'
          iconStyle={{ background: '#d9534f', color: '#fff' }}
          contentStyle={{ background: '#d9534f', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #d9534f' }}
          icon={<MdLunchDining />}>
          <h6 className='vertical-timeline-element-subtitle m-1'>
            Had lunch with CEO Michael
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='24/11/21'
          iconStyle={{ background: '#f7f7f7', color: '##292b2c' }}
          contentStyle={{ background: '#f7f7f7', color: '##292b2c' }}
          contentArrowStyle={{ borderRight: '7px solid  #f7f7f7' }}
          icon={<SiMotorola />}>
          <h6 className='vertical-timeline-element-subtitle m-1'>
            Handed over project to client motorola
          </h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
