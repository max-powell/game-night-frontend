import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FriendSearchItem = ({result, sendFriendRequest, sentFriendRequest, cancelFriendRequest}) => (
  <div className='dashboard-search-item'>
    <img src={result.avatarUrl} alt='user avatar' />
    <div>{result.username}</div>
    {
      sentFriendRequest
      ? <FontAwesomeIcon
        icon='times'
        size='lg'
        onClick={() => cancelFriendRequest(sentFriendRequest)}
      />
      : <FontAwesomeIcon
      icon='plus'
      size='lg'
      onClick={() => sendFriendRequest(result)}/>
    }
  </div>
)

export default FriendSearchItem
