import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login';

const MainContainer = ({user}) => (
  <div id='main-container'>
    {
      user
      ? <Dashboard />
    : <Login />
    }
  </div>
)

export default MainContainer
