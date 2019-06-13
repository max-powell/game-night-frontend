import React from 'react'
import EventModal from '../containers/EventModal'

const EventListItem = ({event, updateEvent, leaveEvent}) => {

  const daysToGo = (new Date(event.dateTime).setHours(0,0,0,0) - new Date().setHours(0,0,0,0))/(1000 * 60 * 60 * 24)

  const dateString = new Date(event.dateTime).toString()

  return (
    <div className='event-list-item'>
      <div>
        <h3>
          {`${dateString.slice(0,3)},${dateString.slice(3,15)}`} ({
            daysToGo === 1 ? `${daysToGo} day` : `${daysToGo} days`
          } to go)</h3>
          <p>Time: {event.dateTime.match(/\d{2}:\d{2}/)[0]}</p>
          <p>Where: {event.location}</p>
          <p>Game: {event.game}</p>
      </div>
      <div className='event-options'>
        <EventModal
          event={event}
          updateEvent={updateEvent}
          leaveEvent={leaveEvent}
        />
      </div>
    </div>
  )
}

export default EventListItem
