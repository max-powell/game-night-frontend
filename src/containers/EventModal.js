import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gnApi from '../api/gnApi';

class EventModal extends Component {

  state = {
    location: '',
    dateTime: null,
    game: null,
    attendees: [],
    invited: [],
    availableGames: [],
    host: false
  }

  componentDidMount () {
    gnApi.getEvent(this.props.event)
      .then(event => {
        this.setState({
          location: event.location,
          dateTime: event.dateTime,
          game: event.game ,
          attendees: event.attendees,
          invited: event.invitedGuests,
          availableGames: event.availableGames,
          host: event['host?']
        });
      })
  }

  render() {
    return (
      <Modal trigger={<FontAwesomeIcon icon="ellipsis-h" />} >
        <Modal.Header>Event Details</Modal.Header>
      </Modal>
    )
  }

}

export default EventModal
