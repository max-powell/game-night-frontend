import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell, faCheckCircle, faTimesCircle, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'

import Layout from './containers/Layout'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

import './css/App.css';

library.add(faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell, faCheckCircle, faTimesCircle, faTimes, faEllipsisH)

const App = () => (
  <div className="App">
    <Router>
      <Route
        exact path='/'
        render={routerProps => (
          <Layout
            routerProps={routerProps}
            child={<Dashboard routerProps={routerProps}/>}
          />
        )}
      />
      <Route
        path='/login'
        render={routerProps => (
          <Layout
            routerProps={routerProps}
            child={<Login routerProps={routerProps} />}
          />
        )}
      />
    </Router>
  </div>
)

export default App
