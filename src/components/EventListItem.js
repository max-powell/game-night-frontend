import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EventListItem = ({event}) => {

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
        <FontAwesomeIcon icon="ellipsis-h" />
      </div>
    </div>
  )
}

export default EventListItem
