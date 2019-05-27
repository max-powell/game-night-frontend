import React, { Component } from 'react'
import AlertMenu from './AlertMenu';
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Profile extends Component {

  state = {
    alerts: false
  }

  showAlerts = () => {this.setState({alerts: !this.state.alerts})}

  render() {

    const {user, acceptFriendRequest, rejectFriendRequest, acceptEventInvite, rejectEventInvite} = this.props
    const { alerts } = this.state
    const { showAlerts } = this

    return (
      <div id='profile' className='dashboard-item'>
        <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
        <div id='details'>
          <h2>{user.username}</h2>
          <p><FontAwesomeIcon icon='user'/>{user.friends.length} friends</p>
          <p><FontAwesomeIcon icon='dice-d20'/>{user.games.length} games</p>
        </div>
        <div id='alerts'>
          <FontAwesomeIcon icon='bell' size='lg' onClick={showAlerts} />
          {(user.eventInvites.length > 0 ||
            user.friendRequests.length > 0) &&
            <div id='dot' />}
          {
            alerts &&
            <AlertMenu
              user={user}
              acceptFriendRequest={acceptFriendRequest}
              rejectFriendRequest={rejectFriendRequest}
              acceptEventInvite={acceptEventInvite}
              rejectEventInvite={rejectEventInvite}
            />
          }
        </div>
      </div>
    )
  }

}

export default Profile
