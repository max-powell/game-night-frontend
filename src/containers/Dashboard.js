import React, {Component} from 'react'
import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'
import FriendDisplay from './FriendDisplay'
import GameDisplay from './GameDisplay'

class Dashboard extends Component {

  state = {
    selectedFriend: {}
  }

  selectFriend = selectedFriend => {this.setState({selectedFriend})}

  render() {

    const { selectFriend } = this
    const { history } = this.props
    const { selectedFriend } = this.state

    return (
      <div id='dashboard' className='main-container-item'>
        {!!localStorage.token || history.push('/')}
        <Profile />
        <EventDisplay />
        <FriendDisplay selectFriend={selectFriend} />
        <GameDisplay selectedFriend={selectedFriend} selectFriend={selectFriend}/>
      </div>
    );
  }

}

export default Dashboard
