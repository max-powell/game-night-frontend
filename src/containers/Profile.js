import React from 'react'
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({user}) => (
  <div id='profile' className='dashboard-item'>
    <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
    <div id='details'>
      <h2>{user.username}</h2>
      <p><FontAwesomeIcon icon='user'/>{user.friends.length} friends</p>
      <p><FontAwesomeIcon icon='dice-d20'/>{user.games.length} games</p>
    </div>
  </div>
)

export default Profile;
