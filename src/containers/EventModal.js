import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gnApi from '../api/gnApi'
import EditEventForm from '../components/EditEventForm'
import EventDetails from '../components/EventDetails';

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
    const { updateEvent, leaveEvent } = this.props

    return (
      <Modal trigger={<FontAwesomeIcon icon="ellipsis-h" />} >
        <Modal.Header>
          {host ? 'Edit Event' : 'Event Details'}
        </Modal.Header>
        <Modal.Content>
          {
            host
            ? <EditEventForm
              location={location}
              dateTime={dateTime}
              gameId={gameId}
              attendees={attendees}
              invited={invited}
              availableGames={availableGames}
              handleLocationChange={handleLocationChange}
              changeDateTime={changeDateTime}
              selectGame={selectGame}
              />
            : <EventDetails
              location={location}
              dateTime={dateTime}
              gameId={gameId}
              attendees={attendees}
              invited={invited}
              availableGames={availableGames}
              />
          }
        </Modal.Content>
        <Modal.Actions>
          {host &&
            <Button color='green' onClick={() => updateEvent(this.state)}>
              <Icon name='checkmark' />Update Event
            </Button>
          }
          <Button color='red' onClick={() => leaveEvent(this.state)}>
            <Icon name='close' />{host ? 'Cancel Event' : 'Leave Event'}
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default EventModal
