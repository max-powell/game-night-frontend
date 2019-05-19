import React, { Component } from 'react'
import GameDisplayBanner from '../components/GameDisplayBanner'
import GameList from './GameList'
import GameSearch from './GameSearch';

import gnApi from '../api/gnApi'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    games: [],
    search: false
  }

  componentDidMount () {
    gnApi.getItems('games')
      .then(games => this.setState({games}))
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedFriend !== prevProps.selectedFriend) {
      if (Object.keys(this.props.selectedFriend).length > 0) {
        gnApi.getFriendsGames(this.props.selectedFriend)
          .then(games => this.setState({games}))
      } else {
        gnApi.getItems('games')
          .then(games => this.setState({games}))
      }
    }
  }

  showSearch = bool => {this.setState({search: bool })}

  showCurrentUserList = () => {
    this.props.selectFriend({})
    this.showSearch(false)
  }

  render() {

    const { selectedFriend } = this.props
    const { games, search } = this.state
    const { showCurrentUserList, showSearch } = this

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner selectedFriend={selectedFriend} showCurrentUserList={showCurrentUserList} showSearch={showSearch} search={search} />
        {
          search
          ? <GameSearch />
          : <GameList games={games} />
        }
      </div>
    )
  }

}

export default GameDisplay
