import React from 'react'

import FriendListItem from '../components/FriendListItem.js';

const FriendList = ({friends}) => (
  <div className='dashboard-item-list'>
    {
      friends.map(f => <FriendListItem friend={f} />)
    }
  </div>
)

export default FriendList
