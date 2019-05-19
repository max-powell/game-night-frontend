import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import FriendSearchResults from './FriendSearchResults';

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
    const { results, searchTerm} = this.state
    const { addFriend, friends } = this.props;

    const filteredResults = results.filter(r => !friends.includes(r.id))

    return (
      <div className='dashboard-item-search'>
        <Form onSubmit={handleSubmit}>
          <Form.Input icon='search' placeholder='Search users...' onChange={updateSearch} value={searchTerm} />
        </Form>
        <FriendSearchResults results={filteredResults} addFriend={addFriend} />
      </div>
    )
  }

}

export default FriendSearch
