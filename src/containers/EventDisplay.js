import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'

import '../css/EventDisplay.css'

class EventDisplay extends Component {

  render() {

    const { history } = this.props

    return (
      <div id='event-display' className='dashboard-item'>
        <EventDisplayBanner history={history} />
        <EventList />
      </div>
    )
  }

}

export default EventDisplay
