import React from 'react'
import '../css/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => (
  <div id='header'>
    <FontAwesomeIcon icon="dice-d20" size='3x' />
    <h1>Game Night</h1>
  </div>
);

export default Header
