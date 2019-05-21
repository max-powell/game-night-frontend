import React from 'react'

const EventListItem = ({event}) => {

  const daysToGo = (new Date(event.dateTime).setHours(0,0,0,0) - new Date().setHours(0,0,0,0))/(1000 * 60 * 60 * 24)

  return (
    <div className='event-list-item'>
      <h3>
      {`${event.dateTime.slice(0,3)},${event.dateTime.slice(3,15)}`} ({
        daysToGo === 1 ? `${daysToGo} day` : `${daysToGo} days`
      } to go)</h3>
    <p>Time: {event.dateTime.match(/\d{2}:\d{2}/)[0]}</p>
      <p>Where: {event.location}</p>
      <p>Game: {event.game.name}</p>
      <p>Who's bringing the game?: {event.gameOwner}</p>
    </div>
  )
}

export default EventListItem
