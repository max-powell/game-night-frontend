import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendDisplayBanner = () => (
  <div className='dashboard-item-banner'>
    <h2>Your Friends</h2>
    <FontAwesomeIcon icon="plus" size='lg' />
    <FontAwesomeIcon icon="sort" size='lg' />
  </div>
)

export default FriendDisplayBanner
