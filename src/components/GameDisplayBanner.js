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
      ? <FontAwesomeIcon
        icon="chevron-left"
        size='lg'
        onClick={showCurrentUserList}
      />
      : <FontAwesomeIcon
        icon="plus"
        size='lg'
        onClick={() => showSearch(true)}
      />
    }
  </div>
)

export default GameDisplayBanner
