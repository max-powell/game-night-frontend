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
    const { addGame, excludedGames, showSearch } = this.props
    const { updateSearch, handleSubmit } = this

    const filteredResults = results.filter(r => !excludedGames.map(g => g.bgaId).includes(r.bgaId))

    return (
      <div className='dashboard-item-search'>
        <Search updateSearch={updateSearch} handleSubmit={handleSubmit} searchTerm={searchTerm} />
        <GameSearchResults results={filteredResults} addGame={addGame} />
      </div>
    )
  }

}

export default GameSearch
