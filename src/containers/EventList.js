import React from 'react'
import EventListItem from '../components/EventListItem'

const EventList = ({events, updateEvent, leaveEvent}) => (
  <div className='dashboard-item-list'>
    {events.map(e => <EventListItem key={e.id} event={e} updateEvent={updateEvent} leaveEvent={leaveEvent} />)}
  </div>
)

export default EventList
