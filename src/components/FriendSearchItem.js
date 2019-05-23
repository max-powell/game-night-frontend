import React, { Component } from 'react'
import gnApi from '../api/gnApi'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class FriendSearchItem extends Component {

  handleClick = () => {
    gnApi.addFriend(this.props.result.id)
      .then(this.props.addFriend)
  }

  render() {

    const { result } = this.props

    return (
      <div className='dashboard-search-item'>
        <img src='https://imgflip.com/s/meme/Futurama-Fry.jpg' alt='user avatar' />
        <div>{result.username}</div>
        <FontAwesomeIcon icon='plus' size='lg' onClick={this.handleClick}/>
      </div>
    )
  }

}

export default FriendSearchItem
