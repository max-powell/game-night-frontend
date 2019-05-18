import React, { Component } from 'react'
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({profile: {username, friendCount, gameCount, avatarUrl}}) => (
  <div id='profile' className='dashboard-item'>
    <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
    <div id='details'>
      <h2>{username}</h2>
      <p><FontAwesomeIcon icon='user'/>{friendCount} friends</p>
      <p><FontAwesomeIcon icon='dice-d20'/>{gameCount} games</p>
    </div>
  </div>
)

export default Profile
