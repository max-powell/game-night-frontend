import React from 'react'

import FriendListItem from '../components/FriendListItem.js';

const FriendList = ({friends}) => (
  <div className='dashboard-item-list'>
    {
      friends.map(f => <FriendListItem key={f.id} friend={f} />)
    }
  </div>
)

export default FriendList
