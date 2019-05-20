import React from 'react'
import GameSearchItem from '../components/GameSearchItem';

const GameSearchResults = ({results}) => (
  <div className='dashboard-search-results'>
    {results.map(r => <GameSearchItem result={r} />)}
  </div>
)

export default GameSearchResults
