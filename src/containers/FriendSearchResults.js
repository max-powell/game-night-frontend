import React from 'react'

import FriendSearchItem from '../components/FriendSearchItem';

const FriendSearchResults = ({results}) => (
  <div className='dashboard-search-results'>
    {
      results.length > 0 &&
      results.map(r => <FriendSearchItem result={r} />)
    }
  </div>
)

export default FriendSearchResults
