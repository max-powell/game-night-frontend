import React, { Component } from 'react'
import gnApi from '../api/gnApi'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class FriendSearchItem extends Component {

  sendRequest = () => {
    gnApi.sendFriendRequest(this.props.result)
      .then(this.props.addSentFriendRequest)
  }

  render() {

    const { result, sentFriendRequest, cancelFriendRequest } = this.props

    return (
      <div className='dashboard-search-item'>
        <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
        <div>{result.username}</div>
        {
          sentFriendRequest
          ? <FontAwesomeIcon icon='times' size='lg' onClick={() => cancelFriendRequest(sentFriendRequest)} />
        : <FontAwesomeIcon icon='plus' size='lg' onClick={this.sendRequest}/>
        }
      </div>
    )
  }
}

export default FriendSearchItem
