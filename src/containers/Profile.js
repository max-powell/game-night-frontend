import React, { Component } from 'react'
import AlertModal from './AlertModal'
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Profile extends Component {

  render() {

    const {user, acceptFriendRequest, rejectFriendRequest, acceptEventInvite, rejectEventInvite} = this.props

    return (
      <div id='profile' className='dashboard-item'>
        <img src={user.avatarUrl} alt='user avatar' />
        <div id='details'>
          <h2>{user.username}</h2>
          <p><FontAwesomeIcon icon='user'/>{user.friends.length} friends</p>
          <p><FontAwesomeIcon icon='dice-d20'/>{user.games.length} games</p>
        </div>
        <div id='alerts'>
          {
            (user.eventInvites.length > 0 ||
            user.friendRequests.length > 0)
            ? <div id='dot' />
            : <div id='clear-dot' />
          }
          <AlertModal
            user={user}
            acceptFriendRequest={acceptFriendRequest}
            rejectFriendRequest={rejectFriendRequest}
            acceptEventInvite={acceptEventInvite}
            rejectEventInvite={rejectEventInvite}
          />
        </div>
      </div>
    )
  }

}

export default Profile
