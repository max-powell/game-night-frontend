import React, { Component } from 'react'
import GameDisplayBanner from '../components/GameDisplayBanner'

import gnApi from '../api/gnApi'

import '../css/GameDisplay.css'

class GameDisplay extends Component {

  state = {
    games: [],
    message: 'HI'
  }

  componentDidMount () {
    gnApi.getItems('games')
      .then(games => this.setState({games}))
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedFriend !== prevProps.selectFriend) {
      // this.setState({
      //   message: 'BYE'
      // });
    }
  }

  render() {

    const { selectedFriend, selectFriend } = this.props

    return (
      <div id='game-display' className='dashboard-item'>
        <GameDisplayBanner selectedFriend={selectedFriend} selectFriend={selectFriend} />
        {this.state.message}
      </div>
    )
  }

}

export default GameDisplay
