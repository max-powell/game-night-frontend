import React, {Component} from 'react'
import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'
import FriendDisplay from './FriendDisplay'
import GameDisplay from './GameDisplay'

import gnApi from '../api/gnApi'

class Dashboard extends Component {

  state = {
    profile: {}
  }

  async componentDidMount () {
    const profile = await gnApi.getProfile()
    this.setState({profile})
  }

  render() {

    const {profile} = this.state
    const {history} = this.props

    return (
      <div id='dashboard' className='main-container-item'>
        {!!localStorage.token || history.push('/')}
        <Profile profile={profile} />
        <EventDisplay />
        <FriendDisplay />
        <GameDisplay />
      </div>
    );
  }

}

export default Dashboard
