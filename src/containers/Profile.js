import React, { Component } from 'react'
import { connect } from 'react-redux'

import { acceptEventInvite } from '../actions/eventInviteActions'

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

export default connect(
  state => ({
    user: state.currentUser
  }),
  {
    acceptEventInvite
  }
)(Profile)
