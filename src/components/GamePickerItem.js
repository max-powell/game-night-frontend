import React from 'react';

const GamePickerItem = ({game}) => (
  <div className='game-picker-item'>
    <img src={game.imageUrl} alt='game pic' />
    <div>
      <h2>{game.name}</h2>
      <p>Player range: {game.minPlayers}-{game.maxPlayers}</p>
      <p>Playtime: {game.minPlaytime}-{game.maxPlaytime} mins</p>
      <p>Owner: {game.owner}</p>
    </div>
  </div>
)

export default GamePickerItem;
