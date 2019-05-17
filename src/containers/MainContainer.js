import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login';

const MainContainer = ({user, setUser}) => (
  <div id='main-container'>
    {
      user ? <Dashboard /> : <Login setUser={setUser} />
    }
  </div>
)

export default MainContainer
