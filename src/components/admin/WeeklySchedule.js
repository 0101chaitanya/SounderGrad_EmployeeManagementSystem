import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import events from '../../events';
import { Container } from 'react-bootstrap';
const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  });

export default function WeeklySchedule(props) {
  return (
    <Container>
      <Calendar
        localizer={localizer}
        events={events}
        views={allViews}
        step={60}
        showMultiDayTimes
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, marginTop: 10 }}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper,
        }}
      />
    </Container>
  );
}
