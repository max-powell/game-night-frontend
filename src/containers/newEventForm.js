import React, { Component } from 'react'
import LocationInput from '../components/LocationInput'
import DateTimePicker from '../components/DateTimePicker'
import Invitations from './Invitations'

import 'react-datepicker/dist/react-datepicker.css'


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

  invite = friend => {
    this.setState({
      invited: [...this.state.invited, friend]
    })
  }

  uninvite = friend => {
    this.setState({
      invited: this.state.invited.filter(f => f.id!== friend.id)
    })
  }

  render() {

    const { location, dateTime, invited } = this.state
    const { friends } = this.props
    const { handleLocationChange, changeDateTime, invite, uninvite } = this

    const notInvited = friends.filter(f => !invited.map(i => i.id).includes(f.id))

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
        <Invitations
          invited={invited}
          notInvited={notInvited}
          invite={invite}
          uninvite={uninvite}
        />
      </div>
    )
  }

}

export default NewEventForm
