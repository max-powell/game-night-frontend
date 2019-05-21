import React, { Component } from 'react'
import EventListItem from '../components/EventListItem'

import gnApi from '../api/gnApi';

class EventList extends Component {

  state = {
    events: []
  }

  componentDidMount () {
    gnApi.getItems('events')
      .then(events => this.setState({events}))
  }

  render() {

    const { events } = this.state

    return (
      <div className='dashboard-item-list'>
        {events.map(e => <EventListItem key={e.id} event={e} />)}
      </div>
    )
  }

}

export default EventList
