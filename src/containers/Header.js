import React from 'react'
import '../css/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => (
  <div id='header'>
    <FontAwesomeIcon icon="dice-d20" size='2x' />
    <h1>Game Night</h1>
    {!!localStorage.token && <div>Logout</div>}
  </div>
);

export default Header
