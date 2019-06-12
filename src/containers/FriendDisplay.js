import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectFriend } from '../actions/friendActions'

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
    const { friends, selectFriend, addSentFriendRequest, sentFriendRequests, cancelFriendRequest } = this.props
    const { showSearch } = this

    return (
      <div id='friend-display' className='dashboard-item'>
        <FriendDisplayBanner showSearch={showSearch} search={search} />
        {
          search
          ? <FriendSearch addSentFriendRequest={addSentFriendRequest} friends={friends.map(f => f.id)} sentFriendRequests={sentFriendRequests} cancelFriendRequest={cancelFriendRequest} />
        : <FriendList friends={friends} selectFriend={selectFriend}/>
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    friends: state.currentUser.friends,
    sentFriendRequests: state.currentUser.sentFriendRequests
  }
}

export default connect(
  mapStateToProps,
  {
    selectFriend
  }
  )(FriendDisplay)
