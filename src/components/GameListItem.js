import React from 'react'

const GameListItem = ({game}) => (
  <div className='dashboard-list-item'>
    <img src={game.imageUrl} alt='game pic' />
    <div>
      <h2>{game.name}</h2>
      <p>Player range: {game.minPlayers}-{game.maxPlayers}</p>
      <p>Playtime: {game.minPlaytime}-{game.maxPlaytime} mins</p>
    </div>
  </div>
)

export default GameListItem
