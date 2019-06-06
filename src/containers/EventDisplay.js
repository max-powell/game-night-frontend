import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'
import NewEventForm from './NewEventForm.js'

import '../css/EventDisplay.css'

class EventDisplay extends Component {

  state = {
    newEvent: false
  }

  showNewEvent = bool => {this.setState({newEvent: bool})}

  handleSubmit = event => {
    this.props.createEvent(event)
    event.location !== '' &&
    event.invited.length > 0 &&
    this.setState({
      newEvent: false
    })
  }

  render() {

    const { events, friends, updateEvent, leaveEvent } = this.props
    const { newEvent } = this.state
    const { showNewEvent, handleSubmit } = this

    const displayedEvents = events.filter(e => new Date(e.dateTime) > new Date()).sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))

    return (
      <div id='event-display' className='dashboard-item'>
        <EventDisplayBanner newEvent={newEvent} showNewEvent={showNewEvent} />
        {
          newEvent
          ? <NewEventForm friends={friends} handleSubmit={handleSubmit} />
        : <EventList events={displayedEvents} updateEvent={updateEvent} leaveEvent={leaveEvent} />
        }
      </div>
    )
  }

}

export default EventDisplay
