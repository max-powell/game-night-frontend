import React from 'react'

import GameListItem from '../components/GameListItem'

const GameList = ({games}) => (
  <div className='dashboard-item-list'>
    {games.map(g => <GameListItem game={g} />)}
  </div>
)

export default GameList
