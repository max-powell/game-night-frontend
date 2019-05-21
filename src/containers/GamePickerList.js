import React from 'react'
import GamePickerItem from '../components/GamePickerItem'


const GamePickerList = ({games}) => (
  <div id='game-picker-list'>
    {games.map(g => <GamePickerItem game={g} />)}
  </div>
)

export default GamePickerList
