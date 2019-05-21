import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import Invitations from './Invitations'

import 'react-datepicker/dist/react-datepicker.css'
import '../css/NewEvent.css'

import gnApi from '../api/gnApi'

class NewEvent extends Component {

  state = {
    location: '',
    dateTime: new Date(),
    invited: [],
    notInvited: [],
    gameId: 0,
    gameOwner: '',
    availableGames: []
  }

  componentDidMount () {
    gnApi.getItems('friends')
      .then(notInvited => this.setState({notInvited}))
      gnApi.getItems('games')
      .then(games => this.setState({
        availableGames: games.map(g => {
          return {
            ...g,
            owner: 'You'
          }
        })
      })
    )
  }

  handleInputChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  changeDateTime = dateTime => {this.setState({dateTime})}

  invite = friend => {
    gnApi.getFriendsGames(friend)
      .then(games => this.setState({
        availableGames: [
          ...this.state.availableGames,
          ...games.map(g => {
            return {
              ...g,
              owner: friend.username
            }
          })
        ],
        invited: [...this.state.invited, friend],
        notInvited: this.state.notInvited.filter(f => f.id !== friend.id)
      })
    )
  }

  uninvite = friend => {
    this.setState({
      invited: this.state.invited.filter(f => f.id!== friend.id),
      notInvited: [...this.state.notInvited, friend],
      availableGames: this.state.availableGames.filter(g => g.owner !== friend.username)
    })
  }

  render() {

    const { location, dateTime, invited, notInvited, gameId, gameOwner } = this.state
    const { handleInputChange, changeDateTime, invite, uninvite } = this

    return (
      <div id='new-event' className='main-container-item'>
        <div id='new-event-title'><h1>Schedule a game night</h1></div>
          <div id='area1'>
            <div>
            <label>Location: </label>
              <Input name='location' value={location} onChange={handleInputChange} />
            </div>
            <div>
            <label>When: </label>
              <DatePicker
              selected={dateTime}
              showTimeInput
              dateFormat='dd/MM/yy h:mm aa'
              minDate={new Date()}
              name='dateTime'
              onChange={changeDateTime}
              />
            </div>
            <Invitations invited={invited} notInvited={notInvited} invite={invite} uninvite={uninvite}/>
          </div>
      </div>
    )
  }

}

export default NewEvent
