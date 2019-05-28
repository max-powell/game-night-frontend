import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'

import '../css/EventDisplay.css'

class EventDisplay extends Component {

  state = {
    newEvent: false
  }

  showNewEvent = bool => {this.setState({newEvent: bool})}

  render() {

    const { events } = this.props
    const { newEvent } = this.state
    const { showNewEvent } = this

    return (
      <div id='event-display' className='dashboard-item'>
        <EventDisplayBanner newEvent={newEvent} showNewEvent={showNewEvent} />
        <EventList events={events} />
      </div>
    )
  }

}

export default EventDisplay
