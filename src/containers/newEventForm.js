import React, { Component } from 'react'
import LocationInput from '../components/LocationInput'
import DateTimePicker from '../components/DateTimePicker'
import Invitations from './Invitations'

class NewEventForm extends Component {

  state = {
    location: '',
    dateTime: new Date(),
    invited: []
  }

  handleLocationChange = (e, {value}) => {
    this.setState({
      location: value
    })
  }

  changeDateTime = dateTime => {this.setState({dateTime})}

  render() {

    const { location, dateTime, invited } = this.state
    const { handleLocationChange, changeDateTime } = this

    return (
      <div id='new-event' className='dashboard-item-search'>
        <LocationInput
          location={location}
          handleLocationChange={handleLocationChange}
        />
        <DateTimePicker
          dateTime={dateTime}
          changeDateTime={changeDateTime}
        />
      </div>
    )
  }

}

export default NewEventForm
