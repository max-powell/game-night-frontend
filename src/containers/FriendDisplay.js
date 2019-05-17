import React, { Component } from 'react'
import FriendDisplayBanner from '../components/FriendDisplayBanner'

import '../css/FriendDisplay.css'

class FriendDisplay extends Component {

  render() {
    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner />
      </div>
    )
  }

}

export default FriendDisplay
