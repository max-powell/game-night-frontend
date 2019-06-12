import React, { Component } from 'react'

import GameDisplayBanner from '../components/GameDisplayBanner'
import GameList from './GameList'
import GameSearch from './GameSearch';

import gnApi from '../api/gnApi'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    selectedFriendGames: [],
    search: false
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedFriend !== prevProps.selectedFriend
    && Object.keys(this.props.selectedFriend).length > 0) {
        gnApi.getFriendsGames(this.props.selectedFriend)
          .then(selectedFriendGames => this.setState({selectedFriendGames}))
    }
  }

  showSearch = bool => {this.setState({search: bool })}

  showCurrentUserList = () => {
    this.props.selectFriend({})
    this.showSearch(false)
  }

  render() {

    const { selectedFriend, userGames, addGame } = this.props
    const { selectedFriendGames, search } = this.state
    const { showCurrentUserList, showSearch } = this

    const displayedGames = Object.keys(this.props.selectedFriend).length > 0 ? selectedFriendGames : userGames

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner
          selectedFriend={selectedFriend} showCurrentUserList={showCurrentUserList}
          showSearch={showSearch}
          search={search}
          />
        {
          search
          ? <GameSearch
            addGame={addGame}
            excludedGames={userGames}
            showSearch={showSearch}
          />
        : <GameList games={displayedGames} />
        }
      </div>
    )
  }

}

export default GameDisplay
