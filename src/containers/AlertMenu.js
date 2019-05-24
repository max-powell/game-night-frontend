import React from 'react'
import AlertItem from '../components/AlertItem'

const AlertMenu = ({user, acceptFriendRequest, acceptEventInvite}) => {

  return (
    <div id='alert-menu'>
    <h3>Friend Requests</h3>
      {
        user.friendRequests.length > 0
        ? user.friendRequests.map(r => <AlertItem key={`r${r.id}`} item={r} accept={acceptFriendRequest} type='fR' />)
        : <div className='alert-item no-alerts'>No friend requests</div>
      }
    <h3>Event Invites</h3>
    {
      user.eventInvites.length > 0
      ? user.eventInvites.map(i => <AlertItem key={`i${i.id}`} item={i} accept={acceptEventInvite} type='eI' />)
      : <div className='alert-item no-alerts'>No event invites</div>
    }
    </div>
  )
}

export default AlertMenu
