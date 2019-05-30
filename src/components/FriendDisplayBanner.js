import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendDisplayBanner = ({search, showSearch}) => (
  <div className='dashboard-item-banner'>
    <h2>Your Friends</h2>
    {
      search
      ? <FontAwesomeIcon onClick={() => showSearch(false)} icon="chevron-left" size='lg' />
      :<FontAwesomeIcon onClick={() => showSearch(true)} icon="plus" size='lg' />
    }
  </div>
)

export default FriendDisplayBanner
