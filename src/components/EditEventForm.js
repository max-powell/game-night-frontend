import React, {Fragment} from 'react'
import LocationInput from './LocationInput'
import DateTimePicker from './DateTimePicker'
import GamePickerContainer from '../containers/GamePickerContainer'

const EditEventForm = ({location, dateTime, gameId, attendees, invited, availableGames, handleLocationChange, changeDateTime, selectGame}) => (
  <Fragment>
    <LocationInput
      location={location}
      handleLocationChange={handleLocationChange}
    />
    <DateTimePicker
      dateTime={dateTime}
      changeDateTime={changeDateTime}
    />
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
    <GamePickerContainer
      games={availableGames}
      selectGame={selectGame}
      selectedGame={gameId}
    />
  </Fragment>
)

export default EditEventForm
