import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameSearchItem = ({result, addGame}) => (
  <div className='dashboard-search-item'>
    <img src={result.imageUrl} alt='game art' />
    <div>
      <p>Name: {result.name}</p>
      <p>
      Players: {
        result.minPlayers && result.maxPlayers
        ? `${result.minPlayers}-${result.maxPlayers}`
        : 'unavailable'
      }
      </p>
      <p>
      Playtime: {
        result.minPlaytime && result.maxPlaytime
        ? `${result.minPlaytime}-${result.maxPlaytime}`
        : 'unavailable'
      }
      </p>
    </div>
    <FontAwesomeIcon icon='plus' onClick={() => addGame(result)}/>
  </div>
)

export default GameSearchItem
