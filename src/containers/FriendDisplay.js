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

  toggleSearch = () => {this.setState({search: !this.state.search })}

  render() {

    const { friends, search } = this.state
    const { toggleSearch } = this

    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner toggleSearch={toggleSearch} />
        {
          search
          ? <FriendSearch />
          : <FriendList friends={friends}/>
        }
      </div>
    )
  }

}

export default FriendDisplay
