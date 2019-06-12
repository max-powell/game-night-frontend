import React from 'react'
import GameSearchItem from '../components/GameSearchItem';

const GameSearchResults = ({results, addGame, showSearch}) => (
  <div className='dashboard-search-results'>
    {results.map(r => <GameSearchItem key={r.id} result={r} addGame={addGame} />)}
  </div>
)

export default GameSearchResults
