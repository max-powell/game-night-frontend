import React, {Fragment} from 'react'
import GamePickerList from './GamePickerList'

const GamePickerContainer = ({games, selectGame, selectedGame, showFilter, changeFilter}) => (
  <Fragment>
    <div id='game-picker-header'>
      <h3>Available games:</h3>
      <p>More games will become available as guests accept their invitations</p>
      <label>Filter games for no. of guests attending:</label>
      <input
        type='checkbox'
        checked={showFilter}
        onChange={changeFilter}
      />
    </div>
    <div id='game-picker-body'>
      <div id='game-picker-container'>
        <GamePickerList
          games={games}
          selectGame={selectGame}
          selectedGame={selectedGame}
        />
      </div>
    </div>
  </Fragment>
)

export default GamePickerContainer
