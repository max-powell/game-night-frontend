import React, { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const userDetails = ({user}) => (
  <Fragment>
    <img src={user.avatarUrl} alt='user avatar' />
    <div id='details'>
      <h2>{user.username}</h2>
      <p><FontAwesomeIcon icon='user'/>{user.friends.length} friends</p>
      <p><FontAwesomeIcon icon='dice-d20'/>{user.games.length} games</p>
    </div>
  </Fragment>
)

export default userDetails
