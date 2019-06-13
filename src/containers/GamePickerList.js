import React from 'react'
import GamePickerItem from '../components/GamePickerItem'


const GamePickerList = ({games, selectGame, selectedGame}) => (
  <div id='game-picker-list'>
    {games.map(g => (
      <GamePickerItem
        key={g.id}
        game={g}
        selectGame={selectGame}
        selectedGame={selectedGame}
        />
    ))}
  </div>
)

export default GamePickerList
