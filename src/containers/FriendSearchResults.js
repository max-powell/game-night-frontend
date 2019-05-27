import React from 'react'

import FriendSearchItem from '../components/FriendSearchItem';

const FriendSearchResults = ({results, addFriend, pendingFriends}) => (
  <div className='dashboard-search-results'>
    {
      results.map(r => <FriendSearchItem key={r.id} result={r} addFriend={addFriend} pendingFriends={pendingFriends} />)
    }
  </div>
)

export default FriendSearchResults
