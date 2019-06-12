import React, { Component } from 'react'
import AlertModal from './AlertModal'
import UserDetails from '../components/UserDetails'

import '../css/Profile.css'


class Profile extends Component {

  render() {

    const {user, acceptFriendRequest, rejectFriendRequest, acceptEventInvite, rejectEventInvite} = this.props

    return (
      <div id='profile' className='dashboard-item'>
        <UserDetails user={user} />
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
