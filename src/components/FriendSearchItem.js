import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendSearchItem = ({result: {username, id}, addFriend}) => (
  <div className='dashboard-search-item'>
    <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
    <div>{username}</div>
    <FontAwesomeIcon icon='plus' size='lg' onClick={() => addFriend(id)}/>
  </div>
);

export default FriendSearchItem
