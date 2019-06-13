import React from 'react'
import { Header, Modal } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlertItem from '../components/AlertItem'


const AlertModal = ({user, acceptFriendRequest, rejectFriendRequest, acceptEventInvite, rejectEventInvite}) => (
  <Modal trigger={<FontAwesomeIcon icon='bell' size='lg' />}>
    <Modal.Header>
      Alerts
    </Modal.Header>
    <Modal.Content>
      <Header>Friend Requests</Header>
      {
        user.friendRequests.length > 0
        ? user.friendRequests.map(r => {
          return (
            <AlertItem
              key={`r${r.id}`}
              item={r}
              accept={acceptFriendRequest}
              reject={rejectFriendRequest}
              type='fR'
            />
          )
        })
        : <div className='alert-item no-alerts'>No friend requests</div>
      }
      <Header>Event Invites</Header>
      {
        user.eventInvites.length > 0
        ? user.eventInvites.map(i => {
          return (
            <AlertItem
              key={`i${i.id}`}
              item={i}
              accept={acceptEventInvite}
              reject={rejectEventInvite}
              type='eI'
            />
          )
        })
        : <div className='alert-item no-alerts'>No event invites</div>
      }
    </Modal.Content>
  </Modal>
)

export default AlertModal
