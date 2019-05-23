import React, { Component } from 'react'
import gnApi from '../api/gnApi'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class GameSearchItem extends Component {

  handleClick = () => {
    gnApi.addGame(this.props.result)
      .then(this.props.addGame)
    this.props.showSearch(false)
  }

  render() {

    const { result } = this.props
    const { handleClick } = this

    return (
      <div className='dashboard-search-item'>
        <img src={result.imageUrl} alt='game art' />
        <div>
          <p>Name: {result.name}</p>
          <p>
          Players: {
            result.minPlayers && result.maxPlayers
            ? `${result.minPlayers}-${result.maxPlayers}`
            : 'unavailable'
          }
          </p>
          <p>
          Playtime: {
            result.minPlaytime && result.maxPlaytime
            ? `${result.minPlaytime}-${result.maxPlaytime}`
            : 'unavailable'
          }
          </p>
        </div>
        <FontAwesomeIcon icon='plus' onClick={handleClick}/>
      </div>
    )
  }

}

export default GameSearchItem
