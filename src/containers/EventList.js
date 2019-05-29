import React from 'react'
import EventListItem from '../components/EventListItem'

const EventList = ({events, updateEvent}) => (
  <div className='dashboard-item-list'>
    {events.map(e => <EventListItem key={e.id} event={e} updateEvent={updateEvent} />)}
  </div>
)

export default EventList
