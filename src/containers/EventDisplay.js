import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'
import NewEventForm from './NewEventForm'

import '../css/EventDisplay.css'

class EventDisplay extends Component {

  state = {
    newEvent: false
  }

  showNewEvent = bool => {this.setState({newEvent: bool})}

  handleSubmit = event => {
    this.props.createEvent(event)
    event.location !== '' &&
    event.invited_guests.length > 0 &&
    this.setState({
      newEvent: false
    })
  }

  render() {

    const { events, friends } = this.props
    const { newEvent } = this.state
    const { showNewEvent, handleSubmit } = this

    return (
      <div id='event-display' className='dashboard-item'>
        <EventDisplayBanner newEvent={newEvent} showNewEvent={showNewEvent} />
        {
          newEvent
          ? <NewEventForm friends={friends} handleSubmit={handleSubmit} />
          : <EventList events={events} />
        }
      </div>
    )
  }

}

export default EventDisplay
