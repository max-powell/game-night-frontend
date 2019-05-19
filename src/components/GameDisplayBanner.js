import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameDisplayBanner = ({selectedFriend, selectFriend}) => (
  <div className='dashboard-item-banner'>
    <h2>
      {
        selectedFriend
        ? selectedFriend.username.endsWith('s')
          ? `${selectedFriend.username}' `
          : `${selectedFriend.username}'s `
        : 'Your '
      }
      Games
    </h2>
    {
      selectedFriend
      ? <FontAwesomeIcon onClick={() => selectFriend(null) } icon="chevron-left" size='lg' />
      : <FontAwesomeIcon icon="plus" size='lg' />
    }
    <FontAwesomeIcon icon="sort" size='lg' />
  </div>
)

export default GameDisplayBanner
