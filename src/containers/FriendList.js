import React from 'react'

const FriendList = ({friends}) => (
  <div className='dashboard-item-list'>
    {
      friends.map(f => <div>{f.username}</div>)
    }
  </div>
)

export default FriendList
