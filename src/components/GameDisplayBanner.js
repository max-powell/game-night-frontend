import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameDisplayBanner = ({selectedFriend, search, showSearch, showCurrentUserList}) => (
  <div className='dashboard-item-banner'>
    <h2>
      {
        Object.keys(selectedFriend).length > 0 && !search
        ? selectedFriend.username.endsWith('s')
          ? `${selectedFriend.username}' `
          : `${selectedFriend.username}'s `
        : 'Your '
      }
      Games
    </h2>
    {
      Object.keys(selectedFriend).length > 0 || search
      ? <FontAwesomeIcon onClick={showCurrentUserList} icon="chevron-left" size='lg' />
      : <FontAwesomeIcon onClick={() => showSearch(true)} icon="plus" size='lg' />
    }
    <FontAwesomeIcon icon="sort" size='lg' />
  </div>
)

export default GameDisplayBanner
