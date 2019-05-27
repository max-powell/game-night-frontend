import React from 'react'

import FriendSearchItem from '../components/FriendSearchItem';

const FriendSearchResults = ({results, addSentFriendRequest, sentFriendRequests}) => (
  <div className='dashboard-search-results'>
    {
      results.map(r => <FriendSearchItem key={r.id} result={r} addSentFriendRequest={addSentFriendRequest} sentFriendRequests={sentFriendRequests} />)
    }
  </div>
)

export default FriendSearchResults
