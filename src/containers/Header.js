import React from 'react'
import '../css/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({history}) => {

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (<div id='header'>
    <FontAwesomeIcon icon="dice-d20" size='2x' />
    <h1>Game Night</h1>
    {!!localStorage.token && <button onClick={logout}>Logout</button>}
  </div>)
}

export default Header
