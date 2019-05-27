import React, { Component } from 'react'
import FriendDisplayBanner from '../components/FriendDisplayBanner'
import FriendList from './FriendList'
import FriendSearch from './FriendSearch'

import '../css/FriendDisplay.css'

class FriendDisplay extends Component {

  state = {
    search: false
  }

  showSearch = bool => {this.setState({search: bool })}

  render() {

    const { search } = this.state
    const { friends, selectFriend, addFriend, pendingFriends } = this.props
    const { showSearch } = this

    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner showSearch={showSearch} search={search} />
        {
          search
          ? <FriendSearch addFriend={addFriend} friends={friends.map(f => f.id)} pendingFriends={pendingFriends} />
        : <FriendList friends={friends} selectFriend={selectFriend}/>
        }
      </div>
    )
  }

}

export default FriendDisplay
