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
    const { addSentFriendRequest, friends, sentFriendRequests } = this.props

    const filteredResults = results.filter(r => !friends.includes(r.id))

    return (
      <div className='dashboard-item-search'>
        <Search updateSearch={updateSearch} handleSubmit={handleSubmit} searchTerm={searchTerm} />
        <FriendSearchResults results={filteredResults} addSentFriendRequest={addSentFriendRequest} sentFriendRequests={sentFriendRequests} />
      </div>
    )
  }

}

export default FriendSearch
