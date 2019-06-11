import React from 'react'
import '../css/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({showLogout}) => {

  const logout = () => {
    localStorage.removeItem('token')
  }

  return (<div id='header'>
    <FontAwesomeIcon icon="dice-d20" size='2x' />
    <h1>Game Night</h1>
    {showLogout && <button onClick={logout}>Logout</button>}
  </div>)
}

export default Header
