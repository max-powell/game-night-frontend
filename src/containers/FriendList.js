import React from 'react'

const FriendList = ({friends}) => (
  <div>
    {
      friends.map(f => <div>{f.username}</div>)
    }
  </div>
)

export default FriendList
