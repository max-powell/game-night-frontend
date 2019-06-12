import React, {Component} from 'react'
import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'
import FriendDisplay from './FriendDisplay'
import GameDisplay from './GameDisplay'

import gnApi from '../api/gnApi';

class Dashboard extends Component {

  state = {
    currentUser: {
      games: [],
      friends: [],
      sentFriendRequests: [],
      events: [],
      friendRequests: [],
      eventInvites: []
    },
    selectedFriend: {}
  }

  componentDidMount () {
    gnApi.getProfile()
      .then(currentUser => this.setState({currentUser}))
  }

  selectFriend = selectedFriend => {this.setState({selectedFriend})}

  addSentFriendRequest = fR => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        sentFriendRequests: [
          ...this.state.currentUser.sentFriendRequests,
          fR
        ]
      }
    })
  }

  cancelFriendRequest = friendRequest => {
    gnApi.cancelFriendRequest(friendRequest)
      .then(this.setState({
        currentUser: {
          ...this.state.currentUser,
          sentFriendRequests: this.state.currentUser.sentFriendRequests.filter(fR => fR.id !== friendRequest.id)
        }
      })
    )
  }

  addGame = game => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        games: [
          ...this.state.currentUser.games,
          game
        ]
      }
    })
  }

  render() {

    const { selectFriend, cancelFriendRequest, addGame } = this
    const { currentUser, selectedFriend } = this.state
    const { games } = currentUser

    return (
      <div id='dashboard' className='main-container-item'>
        <Profile />
        <EventDisplay />
        <FriendDisplay
          cancelFriendRequest={cancelFriendRequest}
        />
        <GameDisplay
          selectedFriend={selectedFriend}
          selectFriend={selectFriend}
          userGames={games}
          addGame={addGame}
        />
      </div>
    );
  }

}

export default Dashboard
