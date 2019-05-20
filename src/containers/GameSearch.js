import React, { Component } from 'react'
import Search from '../components/Search'
import GameSearchResults from './GameSearchResults';

import gnApi from '../api/gnApi';

class GameSearch extends Component {

  state ={
    results: [],
    searchTerm: ''
  }

  updateSearch = (e, {value: searchTerm}) => {this.setState({searchTerm})}

  handleSubmit = () => {
    gnApi.searchGames(this.state.searchTerm)
      .then(results => this.setState({results}))
  }


  render() {

    const { searchTerm, results } = this.state
    const { updateSearch, handleSubmit } = this

    return (
      <div className='dashboard-item-search'>
        <Search updateSearch={updateSearch} handleSubmit={handleSubmit} searchTerm={searchTerm} />
        <GameSearchResults results={results} />
      </div>
    )
  }

}

export default GameSearch
