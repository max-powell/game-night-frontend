import React, { Component } from 'react'
import FriendDisplayBanner from '../components/FriendDisplayBanner'
import FriendList from './FriendList'
import FriendSearch from './FriendSearch';

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

  showSearch = bool => {this.setState({search: bool })}

  addFriend = friend => {
    console.log(friend)
  }

  render() {

    const { friends, search } = this.state
    const { showSearch, addFriend } = this

    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner showSearch={showSearch} search={search} />
        {
          search
          ? <FriendSearch addFriend={addFriend} />
          : <FriendList friends={friends}/>
        }
      </div>
    )
  }

}

export default FriendDisplay
