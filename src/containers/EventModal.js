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
    host: false,
    showFilter: false
  }

  async componentDidMount () {
    await gnApi.getEvent(this.props.event)
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
    this.gameStillValid()
  }

  handleLocationChange = ({target: {value}}) => {this.setState({location: value})}

  changeDateTime = dateTime => {this.setState({dateTime})}

  selectGame = game => {this.setState({gameId: game.id})}

  changeFilter = () => {this.setState({showFilter: !this.state.showFilter})}

  gameStillValid = () => {
    if (this.state.host && this.state.gameId && !this.state.availableGames.map(g => g.id).includes(this.state.gameId)) {
      alert(`The user who owns the selected game for your game night on ${this.state.dateTime.toDateString()} has left the event. Please select another game.`)
    }
  }

  render() {

    const { location, dateTime, attendees, invited, availableGames, gameId, host, showFilter } = this.state
    const { handleLocationChange, changeDateTime, selectGame, changeFilter, gameStillValid } = this
    const { updateEvent, leaveEvent } = this.props

    const uniqueAvailableGames = []
    availableGames.forEach(g => {
      if (!uniqueAvailableGames.map(g => g.id).includes(g.id)) {
        uniqueAvailableGames.push(g)
      }
    })

    const filteredGames = uniqueAvailableGames.filter(g => {
      return (g.minPlayers <= attendees.length &&
      g.maxPlayers >= attendees.length)
    })

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
              availableGames={showFilter ? filteredGames : uniqueAvailableGames}
              showFilter={showFilter}
              handleLocationChange={handleLocationChange}
              changeDateTime={changeDateTime}
              selectGame={selectGame}
              changeFilter={changeFilter}
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
