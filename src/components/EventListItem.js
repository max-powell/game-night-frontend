import React from 'react'

const EventListItem = ({event}) => (
  <div className='event-list-item'>
    <h3>
    {event.dateTime.toDateString()} ({
      Math.floor((event.dateTime - Date.now())/(1000 * 60 * 60 * 24))
    } days to go)</h3>
    <p>Time: {event.dateTime.toTimeString().slice(0,5)}</p>
    <p>Where: {event.location}</p>
    <p>Game: {event.game.name}</p>
    <p>Who's bringing the game?: {event.gameOwner}</p>
  </div>
)

export default EventListItem
