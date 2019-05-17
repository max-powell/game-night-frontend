import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameDisplayBanner = () => (
  <div className='dashboard-item-banner'>
    <h2>Your Games</h2>
    <FontAwesomeIcon icon="plus" size='lg' />
    <FontAwesomeIcon icon="sort" size='lg' />
  </div>
)

export default GameDisplayBanner
