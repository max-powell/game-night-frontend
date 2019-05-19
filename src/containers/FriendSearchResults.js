import React from 'react'

import FriendSearchItem from '../components/FriendSearchItem';

const FriendSearchResults = ({results, addFriend}) => (
  <div className='dashboard-search-results'>
    {
      results.length > 0 &&
      results.map(r => <FriendSearchItem key={r.id} result={r} addFriend={addFriend} />)
    }
  </div>
)

export default FriendSearchResults
