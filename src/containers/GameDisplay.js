import React, { Component } from 'react'
import GameDisplayBanner from '../components/GameDisplayBanner'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    games: []
  }

  componentDidMount () {
    
  }

  render() {

    const { selectedFriend, selectFriend } = this.props

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner selectedFriend={selectedFriend} selectFriend={selectFriend} />
      </div>
    )
  }

}

export default GameDisplay
