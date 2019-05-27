import React, { Component } from 'react'
import gnApi from '../api/gnApi'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class FriendSearchItem extends Component {

  handleClick = () => {
    gnApi.sendFriendRequest(this.props.result)
      .then(this.props.addFriend)
  }

  render() {

    const { result, pendingFriends } = this.props

    const requestSent = pendingFriends.map(f => f.id).includes(result.id)

    return (
      <div className='dashboard-search-item'>
        <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
        <div>{result.username}</div>
        {
          requestSent
          ? <FontAwesomeIcon icon='envelope-open' size='lg' />
          : <FontAwesomeIcon icon='plus' size='lg' onClick={this.handleClick}/>
        }
      </div>
    )
  }
}

export default FriendSearchItem
