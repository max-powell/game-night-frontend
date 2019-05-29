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

  rejectFriendRequest = friendRequest => {
    gnApi.cancelFriendRequest(friendRequest)
      .then(friend => {this.setState({
        currentUser: {
          ...this.state.currentUser,
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

  rejectEventInvite = eventInvite => {
    gnApi.rejectEventInvite(eventInvite)
      .then(event => {this.setState({
        currentUser: {
          ...this.state.currentUser,
          eventInvites: this.state.currentUser.eventInvites.filter(eI => eI.id !== eventInvite.id)
        }
      })
    })
  }

  createEvent = event => {
    const newEvent = {
      location: event.location,
      dateTime: event.dateTime.toString(),
      invited_guest_ids: event.invited.map(i => i.id)
    }

    gnApi.createEvent(newEvent)
      .then(event => {
        event &&
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            events: [
              ...this.state.currentUser.events,
              event
            ]
          }
      })
    })
  }

  updateEvent = event => {
    const updatedEvent = {
      id: event.id,
      dateTime: event.dateTime.toString(),
      location: event.location,
      gameId: event.gameId
    }

    gnApi.updateEvent(event)
      .then(event => {
        event &&
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            events: [...this.state.currentUser.events.filter(e => e.id !== event.id), event]
          }
        })
      })
  }


  render() {

    const { selectFriend, addSentFriendRequest, cancelFriendRequest, addGame, acceptFriendRequest, rejectFriendRequest, acceptEventInvite, rejectEventInvite, createEvent, updateEvent } = this
    const { history } = this.props
    const { currentUser, selectedFriend } = this.state
    const { events, friends, sentFriendRequests, games } = currentUser

    return (
      <div id='dashboard' className='main-container-item'>
        {!!localStorage.token || history.push('/')}
        <Profile
          user={currentUser}
          acceptFriendRequest={acceptFriendRequest}
          rejectFriendRequest={rejectFriendRequest}
          acceptEventInvite={acceptEventInvite}
          rejectEventInvite={rejectEventInvite}
        />
        <EventDisplay
          events={events}
          friends={friends}
          createEvent={createEvent}
          updateEvent={updateEvent}
        />
        <FriendDisplay
          selectFriend={selectFriend}
          friends={friends}
          addSentFriendRequest={addSentFriendRequest}
          sentFriendRequests={sentFriendRequests}
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
