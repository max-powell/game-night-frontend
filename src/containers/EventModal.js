import React, { Component, Fragment } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gnApi from '../api/gnApi';
import LocationInput from '../components/LocationInput'
import DateTimePicker from '../components/DateTimePicker'

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
          dateTime: new Date(event.dateTime),
          game: event.game ,
          attendees: event.attendees,
          invited: event.invitedGuests,
          availableGames: event.availableGames,
          host: event['host?']
        })
      })
  }

  handleLocationChange = ({target: {value}}) => {this.setState({location: value})}

  changeDateTime = dateTime => {this.setState({dateTime})}

  render() {

    const { location, dateTime, attendees, invited } = this.state
    const { handleLocationChange, changeDateTime } = this

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
        </Modal.Content>
      </Modal>
    )
  }

}

export default EventModal
