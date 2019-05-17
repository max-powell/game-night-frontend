import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login';

const MainContainer = () => (
  <div id='main-container'>
    {
      localStorage.token ? <Dashboard /> : <Login />
    }
  </div>
)

export default MainContainer
