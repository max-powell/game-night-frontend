import React, { Component, Fragment } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gnApi from '../api/gnApi';
import LocationInput from '../components/LocationInput'
import DateTimePicker from '../components/DateTimePicker'
import GamePickerContainer from './GamePickerContainer'

class EventModal extends Component {

  state = {
    id: null,
    location: '',
    dateTime: null,
    gameId: null,
    attendees: [],
    invited: [],
    availableGames: [],
    host: false
  }

  componentDidMount () {
    gnApi.getEvent(this.props.event)
      .then(event => {
        this.setState({
          id: event.id,
          location: event.location,
          dateTime: new Date(event.dateTime),
          gameId: event.game ? event.game.id : null,
          attendees: event.attendees,
          invited: event.invitedGuests,
          availableGames: event.availableGames,
          host: event['host?']
        })
      })
  }

  handleLocationChange = ({target: {value}}) => {this.setState({location: value})}

  changeDateTime = dateTime => {this.setState({dateTime})}

  selectGame = game => {this.setState({gameId: game.id})}

  render() {

    const { location, dateTime, attendees, invited, availableGames, gameId, host } = this.state
    const { handleLocationChange, changeDateTime, selectGame } = this
    const { updateEvent } = this.props

    return (
      <Modal trigger={<FontAwesomeIcon icon="ellipsis-h" />} >
        <Modal.Header>
          Edit Event
        </Modal.Header>
        <Modal.Content>
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
        </Modal.Content>
        <Modal.Actions>
          {host &&
            <Button color='green' onClick={() => updateEvent(this.state)}>
              <Icon name='checkmark' />Update Event
            </Button>
          }
          <Button color='red'>
            <Icon name='close' />{host ? 'Cancel Event' : 'Leave Event'}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default EventModal
