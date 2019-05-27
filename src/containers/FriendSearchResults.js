import React from 'react'

import FriendSearchItem from '../components/FriendSearchItem';

const FriendSearchResults = ({results, addSentFriendRequest, sentFriendRequests, cancelFriendRequest}) => (
  <div className='dashboard-search-results'>
    {
      results.map(r => <FriendSearchItem key={r.id} result={r} addSentFriendRequest={addSentFriendRequest} sentFriendRequest={sentFriendRequests.find(fR => fR.friend.id === r.id)} cancelFriendRequest={cancelFriendRequest} />)
    }
  </div>
)

export default FriendSearchResults
