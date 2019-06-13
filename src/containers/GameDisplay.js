import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectFriend, clearSelectedFriend } from '../actions/friendActions'
import { addGame } from '../actions/gameActions'

import GameDisplayBanner from '../components/GameDisplayBanner'
import GameList from './GameList'
import GameSearch from './GameSearch'

import gnApi from '../api/gnApi'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    search: false
  }

  showSearch = bool => {this.setState({search: bool })}

  showCurrentUserList = () => {
    this.props.clearSelectedFriend()
    this.showSearch(false)
  }

  addGame = game => {
    this.props.addGame(game)
    this.showCurrentUserList()
  }

  render() {

    const { games, selectedFriend, selectedFriendGames } = this.props
    const { search } = this.state
    const { showCurrentUserList, showSearch, addGame } = this

    const displayedGames = selectedFriendGames.length > 0
      ? selectedFriendGames
      : games

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner
          selectedFriend={selectedFriend} showCurrentUserList={showCurrentUserList}
          showSearch={showSearch}
          search={search}
        />
        {
          search
          ? <GameSearch addGame={addGame} excludedGames={games} />
          : <GameList games={displayedGames} />
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    selectedFriend: state.selectedFriend,
    selectedFriendGames: state.selectedFriendGames,
    games: state.currentUser.games
  }
}

export default connect(
  mapStateToProps,
  {
    selectFriend,
    clearSelectedFriend,
    addGame
  }
)(GameDisplay)
