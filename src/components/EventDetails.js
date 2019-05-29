import React, { Fragment } from 'react'

const EventDetails = ({location, dateTime, attendees, invited, gameId, availableGames}) => (
  <Fragment>
    <p>Location: {location}</p>
    <p>When: {`${dateTime.toString().match(/\d{2}:\d{2}/)}, ${dateTime.toString().slice(0,3)},${dateTime.toString().slice(3,15)}`}</p>
    <div id='guests'>
      <label>Going:</label>
      <ul>
        {attendees.map(a => <li key={a.id}>{a.username}</li>)}
      </ul>
      {
        invited.length > 0 &&
        <Fragment>
          <label>Invited:</label>
          <ul>
            {invited.map(i => <li key={i.id}>{i.username}</li>)}
          </ul>
        </Fragment>
      }
    </div>
    <p>Game: {availableGames.find(g => g.id === gameId).name}</p>
  </Fragment>
)

export default EventDetails
