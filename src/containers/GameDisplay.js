import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectFriend } from '../actions/friendActions'
import { addGame } from '../actions/gameActions'

import GameDisplayBanner from '../components/GameDisplayBanner'
import GameList from './GameList'
import GameSearch from './GameSearch'

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

  addGame = game => {
    this.props.addGame(game)
    this.showCurrentUserList()
  }

  render() {

    const { selectedFriend, games } = this.props
    const { selectedFriendGames, search } = this.state
    const { showCurrentUserList, showSearch, addGame } = this

    const displayedGames = Object.keys(this.props.selectedFriend).length > 0
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
    games: state.currentUser.games
  }
}

export default connect(
  mapStateToProps,
  {
    selectFriend,
    addGame
  }
)(GameDisplay)
