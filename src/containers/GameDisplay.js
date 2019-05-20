import React, { Component } from 'react'
import GameDisplayBanner from '../components/GameDisplayBanner'
import GameList from './GameList'
import GameSearch from './GameSearch';

import gnApi from '../api/gnApi'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    currentUserGames: [],
    selectedFriendGames: [],
    search: false
  }

  componentDidMount () {
    gnApi.getItems('games')
      .then(currentUserGames => this.setState({currentUserGames}))
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

  addGame = game => {
    gnApi.addGame(game)
      .then(this.setState({
        currentUserGames: [...this.state.currentUserGames, game],
        search: false
      })
    )
  }

  render() {

    const { selectedFriend } = this.props
    const { currentUserGames, selectedFriendGames, search } = this.state
    const { showCurrentUserList, showSearch, addGame } = this

    const displayedGames = Object.keys(this.props.selectedFriend).length > 0 ? selectedFriendGames : currentUserGames

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner selectedFriend={selectedFriend} showCurrentUserList={showCurrentUserList} showSearch={showSearch} search={search} />
        {
          search
          ? <GameSearch addGame={addGame} excludedGames={currentUserGames} />
        : <GameList games={displayedGames} />
        }
      </div>
    )
  }

}

export default GameDisplay
