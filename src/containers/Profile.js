import React, { Component } from 'react'
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import gnApi from '../api/gnApi';

class Profile extends Component {

  state = {
    profile: {
      username:'',
      gameCount: 0,
      friendCount: 0
    }
  }

  async componentDidMount () {
    const profile = await gnApi.getProfile()
    await this.setState({profile})
  }

  render() {

    return (
      <div id='profile' className='dashboard-item'>
        <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
        <div id='details'>
          <h2>{this.state.profile.username}</h2>
          <p><FontAwesomeIcon icon='user'/>{this.state.profile.friendCount} friends</p>
          <p><FontAwesomeIcon icon='dice-d20'/>{this.state.profile.gameCount} games</p>
        </div>
      </div>
    );
  }

}

export default Profile;
