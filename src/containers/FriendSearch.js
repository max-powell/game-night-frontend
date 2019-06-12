import React, { Component } from 'react'

import Search from '../components/Search'
import FriendSearchResults from './FriendSearchResults'

import gnApi from '../api/gnApi'

class FriendSearch extends Component {

  state = {
    results: [],
    searchTerm: ''
  }

  updateSearch = (e, {value: searchTerm}) => {this.setState({searchTerm})}

  handleSubmit = () => {
    gnApi.search(this.state.searchTerm)
      .then(results => {
        Array.isArray(results) && this.setState({results})
      }
    )
  }

  render() {

    const { updateSearch, handleSubmit } = this
    const { results, searchTerm } = this.state
    const { sendFriendRequest, friends, sentFriendRequests, cancelFriendRequest } = this.props

    const filteredResults = results.filter(r => !friends.includes(r.id))

    return (
      <div className='dashboard-item-search'>
        <Search
          searchTerm={searchTerm}
          updateSearch={updateSearch}
          handleSubmit={handleSubmit}
        />
        <FriendSearchResults
          results={filteredResults}
          sentFriendRequests={sentFriendRequests}
          sendFriendRequest={sendFriendRequest}
          cancelFriendRequest={cancelFriendRequest}
        />
      </div>
    )
  }

}

export default FriendSearch
