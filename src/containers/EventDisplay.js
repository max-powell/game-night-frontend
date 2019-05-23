import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'

import '../css/EventDisplay.css'

class EventDisplay extends Component {

  render() {

    const { history, events } = this.props

    return (
      <div id='event-display' className='dashboard-item'>
        <EventDisplayBanner history={history} />
        <EventList events={events} />
      </div>
    )
  }

}

export default EventDisplay
