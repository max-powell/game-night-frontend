import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendDisplayBanner = ({search, showSearch}) => (
  <div className='dashboard-item-banner'>
    <h2>Your Friends</h2>
    {
      search
      ? <FontAwesomeIcon
        icon="chevron-left"
        size='lg'
        onClick={() => showSearch(false)}
      />
      : <FontAwesomeIcon
        onClick={() => showSearch(true)}
        icon="plus"
        size='lg'
      />
    }
  </div>
)

export default FriendDisplayBanner
