import React, { Component } from 'react'

class EventList extends Component {

  state = {
    events: []
  }

  render() {

    const { events } = this.state

    return (
      <div className='dashboard-item-list'>
        {events.map(e => e.name)}
      </div>
    )
  }

}

export default EventList
