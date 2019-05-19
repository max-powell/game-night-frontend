import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendListItem = ({friend, selectFriend}) => (
  <div className='dashboard-list-item'>
    <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
    <div>
      <h2>{friend.username}</h2>
      <p><FontAwesomeIcon icon='dice-d20'/>{friend.gameCount} games</p>
      <p onClick={() => selectFriend(friend)}>See collection >></p>
    </div>
  </div>
)

export default FriendListItem
