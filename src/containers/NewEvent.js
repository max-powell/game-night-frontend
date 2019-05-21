import React, { Component } from 'react'
import LocationInput from '../components/LocationInput'
import DateTimePicker from '../components/DateTimePicker'
import Invitations from './Invitations'
import SubmitButton from '../components/SubmitButton'
import GamePickerContainer from './GamePickerContainer'

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

  handleLocationChange = (e, {value}) => {
    this.setState({
      location: value
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

  selectGame = game => {
    this.setState({
      gameId: game.id,
      gameOwner: game.owner
    })
  }

  render() {

    const { location, dateTime, invited, notInvited, gameId, availableGames } = this.state
    const { handleLocationChange, changeDateTime, invite, uninvite, selectGame } = this

    return (
      <div id='new-event' className='main-container-item'>
        <div id='new-event-title'><h1>Schedule a game night</h1></div>
          <div id='area1'>
            <LocationInput location={location} handleLocationChange={handleLocationChange} />
            <DateTimePicker changeDateTime={changeDateTime} dateTime={dateTime} />
            <Invitations invited={invited} notInvited={notInvited} invite={invite} uninvite={uninvite}/>
          </div>
          <div id='area2'>
            <GamePickerContainer games={availableGames} selectGame={selectGame} selectedGame={gameId} />
            <SubmitButton />
          </div>
      </div>
    )
  }

}

export default NewEvent
