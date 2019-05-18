import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser, faCalendarPlus, faPlus, faSort } from '@fortawesome/free-solid-svg-icons'

import Layout from './containers/Layout'
// import MainContainer from './containers/MainContainer';

import './css/App.css';

library.add(faDiceD20, faUser, faCalendarPlus, faPlus, faSort)

const App = () => (
  <div className="App">
    <Router>
      <Route exact path='/' render={routerProps => <Layout routerProps={routerProps} display={'login'} />} />
      <Route path='/dashboard' render={routerProps => <Layout routerProps={routerProps} display={'dashboard'} />} />
    </Router>
  </div>
)

export default App;
