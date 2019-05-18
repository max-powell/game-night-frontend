import React, { Component } from 'react'
import FriendDisplayBanner from '../components/FriendDisplayBanner'

import gnApi from '../api/gnApi';

import '../css/FriendDisplay.css'

class FriendDisplay extends Component {

  state = {
    friends: []
  }

  componentDidMount () {
    gnApi.getItems('friends')
      .then(friends => this.setState({friends}))
  }

  render() {
    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner />
      </div>
    )
  }

}

export default FriendDisplay
