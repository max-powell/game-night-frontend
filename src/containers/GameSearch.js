import React, { Component } from 'react'
import Search from '../components/Search';

class GameSearch extends Component {

  state ={
    results: [],
    searchTerm: ''
  }

  updateSearch = (e, {value: searchTerm}) => {this.setState({searchTerm})}

  handleSubmit = () => {
    console.log(this.state.searchTerm)
  }


  render() {

    const { searchTerm } = this.state
    const { updateSearch, handleSubmit } = this

    return (
      <div className='dashboard-item-search'>
        <Search updateSearch={updateSearch} handleSubmit={handleSubmit} searchTerm={searchTerm} />
      </div>
    )
  }

}

export default GameSearch
