import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'

import '../css/Dashboard.css'

import Profile from './Profile'
import EventDisplay from './EventDisplay'
import FriendDisplay from './FriendDisplay'
import GameDisplay from './GameDisplay'

class Dashboard extends Component {

  componentDidMount () {
    !!localStorage.getItem('token') &&
    this.props.fetchUser()
  }

  render() {
    !!localStorage.getItem('token') ||
    this.props.routerProps.history.push('/login')

    return (
      <div id='dashboard' className='main-container-item'>
        <Profile />
        <EventDisplay />
        <FriendDisplay />
        <GameDisplay />
      </div>
    )
  }

}

export default connect(null, {fetchUser})(Dashboard)
