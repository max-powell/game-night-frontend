import React from 'react'
import EventListItem from '../components/EventListItem'

const EventList = ({events}) => (
  <div className='dashboard-item-list'>
    {events.map(e => <EventListItem key={e.id} event={e} />)}
  </div>
)

export default EventList
