import React, { Component } from 'react'
import EventListItem from '../components/EventListItem'

import gnApi from '../api/gnApi';

class EventList extends Component {

  state = {
    events: []
  }

  componentDidMount () {
    gnApi.getItems('events')
      .then(events => this.setState({
        events: events.map(e => {
          return {
            ...e,
            dateTime: new Date(e.dateTime)
          }
        })
      })
    )
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
