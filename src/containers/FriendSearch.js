import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

class FriendSearch extends Component {

  state = {
    friends: [],
    searchTerm: ''
  }

  updateSearch = searchTerm => {this.setState({searchTerm})}

  render() {

    const { friends, searchTerm } = this.state

    return (
      <div className='dashboard-item-search'>
        <input type='text' placeholder='Search users...' value={searchTerm}  />
      </div>
    )
  }

}

export default FriendSearch
