import React from 'react'

const GameSearchItem = ({result}) => (
  <div className='dashboard-search-item'>
    <img src={result.imageUrl} alt='game art' />
    <div>
      <p>Name: {result.name}</p>
      <p>
      Player range: {
        result.minPlayers && result.maxPlayers
        ? `${result.minPlayers}-${result.maxPlayers}`
        : 'unavailable'
      }
      </p>
      <p>
      Player range: {
        result.minPlaytime && result.maxPlaytime
        ? `${result.minPlaytime}-${result.maxPlaytime}`
        : 'unavailable'
      }
      </p>
    </div>
  </div>
)

export default GameSearchItem
