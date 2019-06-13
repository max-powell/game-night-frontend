import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EventDisplayBanner = ({newEvent, showNewEvent}) => (
  <div className='dashboard-item-banner'>
    <h2>
      {
        newEvent
        ? 'Schedule a Game Night'
        : 'Upcoming Game Nights'
      }
    </h2>
    {
      newEvent
      ? <FontAwesomeIcon
        icon="chevron-left"
        size='2x'
        onClick={() => showNewEvent(false)}
      />
      : <FontAwesomeIcon
        icon="calendar-plus"
        size='2x'
        onClick={() => showNewEvent(true)}
      />
    }
  </div>
)

export default EventDisplayBanner
