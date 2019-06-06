import React, { Component } from 'react'
import LocationInput from '../components/LocationInput'
import DateTimePicker from '../components/DateTimePicker'
import Invitations from './Invitations'

import { Button } from 'semantic-ui-react'

import 'react-datepicker/dist/react-datepicker.css'

class NewEvent extends Component {

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
    const { friends, handleSubmit } = this.props
    const { handleLocationChange, changeDateTime, invite, uninvite } = this

    const notInvited = friends.filter(f => {
      return !invited.map(i => i.id).includes(f.id)
    }).sort((a,b) => {
      return a.username.toUpperCase() < b.username.toUpperCase() ? -1 : 1
    })

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
        <Button onClick={() => handleSubmit(this.state)}>Create event</Button>
      </div>
    )
  }

}

export default NewEvent
