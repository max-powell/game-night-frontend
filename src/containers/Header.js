import React from 'react'

import { connect } from 'react-redux'

import { logout } from '../actions/userActions'

import '../css/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => {

  const logout = () => {
    localStorage.removeItem('token')
    props.logout()
    props.routerProps.history.push('/login')
  }

  return (<div id='header'>
    <FontAwesomeIcon icon="dice-d20" size='2x' />
    <h1>Game Night</h1>
    {
      localStorage.getItem('token') &&
      <button onClick={logout}>Logout</button>
    }
  </div>)
}

export default connect(null, {logout})(Header)
