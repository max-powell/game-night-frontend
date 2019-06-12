import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEvent, updateEvent, leaveEvent } from '../actions/eventActions'

import EventDisplayBanner from '../components/EventDisplayBanner'
import EventList from './EventList'
import NewEvent from './NewEvent'

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
          ? <NewEvent friends={friends} handleSubmit={handleSubmit} />
        : <EventList events={displayedEvents} updateEvent={updateEvent} leaveEvent={leaveEvent} />
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    events: state.currentUser.events,
    friends: state.currentUser.friends
  }
}

export default connect(
  mapStateToProps,
  {
    createEvent,
    updateEvent,
    leaveEvent
  }
)(EventDisplay)
