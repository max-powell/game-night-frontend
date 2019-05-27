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
      pendingFriends: [],
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

  addFriend = friend => {
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        pendingFriends: [
          ...this.state.currentUser.pendingFriends,
          friend
        ]
      }
    })
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

  acceptFriendRequest = friendRequest => {
    gnApi.acceptFriendRequest(friendRequest)
      .then(friend => {this.setState({
        currentUser: {
          ...this.state.currentUser,
          friends: [
            ...this.state.currentUser.friends,
            friend
          ],
          friendRequests: this.state.currentUser.friendRequests.filter(fR => fR.id !== friendRequest.id)
        }
      })
    })
  }

  acceptEventInvite = eventInvite => {
    gnApi.acceptEventInvite(eventInvite)
      .then(event => {this.setState({
        currentUser: {
          ...this.state.currentUser,
          events: [
            ...this.state.currentUser.events,
            event
          ],
          eventInvites: this.state.currentUser.eventInvites.filter(eI => eI.id !== eventInvite.id)
        }
      })
    })
  }

  render() {

    const { selectFriend, addFriend, addGame, acceptFriendRequest, acceptEventInvite } = this
    const { history } = this.props
    const { currentUser, selectedFriend } = this.state
    const { events, friends, pendingFriends, games } = currentUser

    return (
      <div id='dashboard' className='main-container-item'>
        {!!localStorage.token || history.push('/')}
        <Profile user={currentUser} acceptFriendRequest={acceptFriendRequest} acceptEventInvite={acceptEventInvite} />
        <EventDisplay history={history} events={events} />
        <FriendDisplay selectFriend={selectFriend} friends={friends} addFriend={addFriend} pendingFriends={pendingFriends} />
        <GameDisplay selectedFriend={selectedFriend} selectFriend={selectFriend} userGames={games} addGame={addGame} />
      </div>
    );
  }

}

export default Dashboard
