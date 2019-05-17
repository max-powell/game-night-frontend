import React, { Component } from 'react'
import GameDisplayBanner from '../components/GameDisplayBanner'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  render() {
    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner />
      </div>
    )
  }

}

export default GameDisplay
