import React, {Component} from 'react'
import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'
import FriendDisplay from './FriendDisplay'
import GameDisplay from './GameDisplay'

class Dashboard extends Component {

  render() {

    const { history } = this.props;

    return (
      <div id='dashboard' className='main-container-item'>
        {!!localStorage.token || history.push('/')}
        <Profile />
        <EventDisplay />
        <FriendDisplay />
        <GameDisplay />
      </div>
    );
  }

}

export default Dashboard
