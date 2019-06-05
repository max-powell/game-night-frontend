import React from 'react'
import GameSearchItem from '../components/GameSearchItem';

const GameSearchResults = ({results, addGame, showSearch}) => (
  <div className='dashboard-search-results'>
    {results.map(r => <GameSearchItem key={r.bgaId} result={r} addGame={addGame} showSearch={showSearch} />)}
  </div>
)

export default GameSearchResults
