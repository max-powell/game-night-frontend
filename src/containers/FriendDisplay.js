import React, { Component } from 'react'
import FriendDisplayBanner from '../components/FriendDisplayBanner'
import FriendList from './FriendList'

import gnApi from '../api/gnApi';

import '../css/FriendDisplay.css'

class FriendDisplay extends Component {

  state = {
    friends: [],
    search: false
  }

  componentDidMount () {
    gnApi.getItems('friends')
      .then(friends => this.setState({friends}))
  }

  toggleSearch = () => {this.setState({search: !this.state.search })}

  render() {

    const { friends } = this.state;

    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner />
        <FriendList friends={friends}/>
      </div>
    )
  }

}

export default FriendDisplay
