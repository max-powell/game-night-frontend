import React from 'react'

const InviteeItem = ({invitee, handleClick}) => (
  <div className='invitee-item' onClick={() => handleClick(invitee)}>
    <div><img src={invitee.avatarUrl} alt='user avatar' /></div>
    <div>{invitee.username}</div>
  </div>
)

export default InviteeItem
