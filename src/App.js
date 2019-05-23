import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'

import Layout from './containers/Layout'

import './css/App.css';

library.add(faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell)

const App = () => (
  <div className="App">
    <Router>
      <Route exact path='/' render={routerProps => <Layout routerProps={routerProps} />} />
      <Route path='/dashboard' render={routerProps => <Layout routerProps={routerProps} display={'dashboard'} />} />
      <Route path='/new-event' render={routerProps => <Layout routerProps={routerProps} display={'new-event'} />} />
    </Router>
  </div>
)

export default App;
