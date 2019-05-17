import React, { Component } from 'react'
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends Component {

  render() {
    return (
      <div id='profile' className='dashboard-item'>
        <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
        <div id='details'>
          <h2>Max</h2>
          <p><FontAwesomeIcon icon='user'/>7 friends</p>
          <p><FontAwesomeIcon icon='dice-d20'/>4 games</p>
        </div>
      </div>
    )
  }

}

export default Profile
