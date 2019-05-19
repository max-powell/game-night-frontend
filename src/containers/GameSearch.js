import React, { Component } from 'react'
import Search from '../components/Search';

class GameSearch extends Component {

  state ={
    games: [],
    searchTerm: ''
  }

  updateSearch = (e, {value: searchTerm}) => {this.setState({searchTerm})}

  handleSubmit = () => {
    console.log(this.state.searchTerm)
  }


  render() {

    const { searchTerm } = this.state
    const { updateSearch } = this

    return (
      <div className='dashboard-item-search'>
        <Search onChange={updateSearch} handleSubmit={handleSubmit} value={searchTerm} />
      </div>
    )
  }

}

export default GameSearch
