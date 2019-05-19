import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendListItem = ({friend: {username, gameCount}}) => (
  <div className='dashboard-list-item'>
    <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
    <div>
      <h2>{username}</h2>
      <p><FontAwesomeIcon icon='dice-d20'/>{gameCount} games</p>
      <p>See collection >></p>
    </div>
  </div>
)

export default FriendListItem