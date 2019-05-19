import React, { Component } from 'react'
import GameDisplayBanner from '../components/GameDisplayBanner'

import gnApi from '../api/gnApi'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    games: [],
    count: 0
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

  render() {

    const { selectedFriend, selectFriend } = this.props

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner selectedFriend={selectedFriend} selectFriend={selectFriend} />
        {this.state.count}
      </div>
    )
  }

}

export default GameDisplay
