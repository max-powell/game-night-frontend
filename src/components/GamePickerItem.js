import React, { Component } from 'react';

class GamePickerItem extends Component {

  render() {

    const { game, selectGame, selectedGame } = this.props

    let classNames = 'game-picker-item'
    if (game.id === selectedGame) {
      classNames += ' selected-game'
    }

    return (
      <div className={classNames} onClick={() => selectGame(game)}>
        <img src={game.imageUrl} alt='game pic' />
        <div>
          <h2>{game.name}</h2>
          <p>Player range: {game.minPlayers}-{game.maxPlayers}</p>
          <p>Playtime: {game.minPlaytime}-{game.maxPlaytime} mins</p>
          <p>Owner: {game.owner}</p>
        </div>
      </div>
    )
  }

}

export default GamePickerItem;
