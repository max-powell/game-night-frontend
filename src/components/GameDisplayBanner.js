import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameDisplayBanner = ({selectedFriend, selectFriend, showSearch, search}) => (
  <div className='dashboard-item-banner'>
    <h2>
      {
        Object.keys(selectedFriend).length > 0
        ? selectedFriend.username.endsWith('s')
          ? `${selectedFriend.username}' `
          : `${selectedFriend.username}'s `
        : 'Your '
      }
      Games
    </h2>
    {
      Object.keys(selectedFriend).length > 0
      ? <FontAwesomeIcon onClick={() => selectFriend({}) } icon="chevron-left" size='lg' />
    : search
      ? <FontAwesomeIcon onClick={() => showSearch(false) } icon="chevron-left" size='lg' />
      : <FontAwesomeIcon onClick={() => showSearch(true)} icon="plus" size='lg' />
    }
    <FontAwesomeIcon icon="sort" size='lg' />
  </div>
)

export default GameDisplayBanner
