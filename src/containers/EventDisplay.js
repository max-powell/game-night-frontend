import React, { Component } from 'react'
import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'

import '../css/EventDisplay.css'

const EventDisplay = ({events, history}) => (
  <div id='event-display' className='dashboard-item'>
    <EventDisplayBanner history={history} />
    <EventList events={events} />
  </div>
)

export default EventDisplay
