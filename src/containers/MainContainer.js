import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './Dashboard'
import Login from './Login';

const MainContainer = () => (
  <div id='main-container'>
    <Router>
      <Route exact path ='/' render={routerProps => <Login {...routerProps} />} />
      <Route path ='/dashboard' render={routerProps => <Dashboard {...routerProps} />} />
    </Router>
  </div>
)

export default MainContainer
