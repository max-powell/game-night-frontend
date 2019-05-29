import React, {Fragment} from 'react'
import GamePickerList from './GamePickerList'

const GamePickerContainer = ({games, selectGame, selectedGame}) => (
  <Fragment>
  <div id='game-picker-header'>
    <h3>Available games:</h3>
    <p>More games will become available as guests accept their invitations:</p>
  </div>
  <div id='game-picker-body'>
    <div id='game-picker-container'>
      <GamePickerList games={games} selectGame={selectGame} selectedGame={selectedGame}/>
    </div>
  </div>
  </Fragment>
)

export default GamePickerContainer
