import React from 'react'
import InviteeItem from '../components/InviteeItem'

const Invitations = ({invited, notInvited, invite, uninvite}) => (
  <div id='invitations'>
    <label>Invitations: </label>
    <div className='invitation-display'>
      <div className='invitation-list-banner'>Friends</div>
        <div className='invitation-list'>
          {notInvited.map(i => <InviteeItem key={i.id} invitee={i} handleClick={invite} />)}
        </div>
    </div>
    <div className='invitation-display'>
      <div className='invitation-list-banner'>Invited</div>
        <div className='invitation-list'>
          {invited.map(i => <InviteeItem key={i.id} invitee={i} handleClick={uninvite} />)}
        </div>
    </div>
  </div>
)

export default Invitations
