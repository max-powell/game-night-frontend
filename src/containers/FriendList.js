import React from 'react'

import FriendListItem from '../components/FriendListItem.js';

const FriendList = ({friends, selectFriend}) => (
  <div className='dashboard-item-list'>
    {
      friends.map(f => {
        return (
          <FriendListItem
            key={f.id}
            friend={f}
            selectFriend={selectFriend}
          />
        )
      })
    }
  </div>
)

export default FriendList
