import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner';

import '../css/EventDisplay.css'

class EventDisplay extends Component {

  render() {
    return (
      <div id='event-display' className='dashboard-item'>
        <EventDisplayBanner />
      </div>
    )
  }

}

export default EventDisplay
