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
      events: []
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
        friends: [
          ...this.state.currentUser.friends,
          friend
        ]
      }
    })
  }

  render() {

    const { selectFriend, addFriend } = this
    const { history } = this.props
    const { currentUser, selectedFriend } = this.state
    const { events, friends, games } = currentUser

    return (
      <div id='dashboard' className='main-container-item'>
        {!!localStorage.token || history.push('/')}
        <Profile user={currentUser} />
        <EventDisplay history={history} events={events} />
        <FriendDisplay selectFriend={selectFriend} friends={friends} addFriend={addFriend} />
        <GameDisplay selectedFriend={selectedFriend} selectFriend={selectFriend}/>
      </div>
    );
  }

}

export default Dashboard
