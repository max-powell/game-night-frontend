import React from 'react'

import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell, faCheckCircle, faTimesCircle, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'

import Header from './containers/Header'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

import './css/App.css';

library.add(faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell, faCheckCircle, faTimesCircle, faTimes, faEllipsisH)

const App = () => (
  <div className="App">
    <Header />
    <Dashboard />
  </div>
)

const mapStateToProps = state => {

}

export default connect()(App)
