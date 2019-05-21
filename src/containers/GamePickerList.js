import React from 'react'
import GamePickerItem from '../components/GamePickerItem'


const GamePickerList = ({games, selectGame}) => (
  <div id='game-picker-list'>
    {games.map(g => <GamePickerItem key={g.id} game={g} selectGame={selectGame} />)}
  </div>
)

export default GamePickerList
