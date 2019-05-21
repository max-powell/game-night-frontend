import React, {Fragment} from 'react'
import GamePickerList from './GamePickerList'

const GamePickerContainer = ({games}) => (
  <Fragment>
  <div id='game-picker-header'>
    <h2>Available games:</h2>
    <p>More games will become available as invite more friends</p>
  </div>
  <div id='game-picker-body'>
    <div id='game-picker-container'>
      <GamePickerList games={games} />
    </div>
  </div>
  </Fragment>
)

export default GamePickerContainer
