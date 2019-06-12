import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchUser } from './actions/userActions'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell, faCheckCircle, faTimesCircle, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'

import Header from './containers/Header'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

import './css/App.css';

library.add(faDiceD20, faUser, faCalendarPlus, faPlus, faSort, faChevronLeft, faBell, faCheckCircle, faTimesCircle, faTimes, faEllipsisH)

class App extends Component {

  componentDidMount () {
    if (!!localStorage.getItem('token') && !this.props.userId) {
      this.props.fetchUser()
    }
  }

  render() {

    const { userId } = this.props

    return (
      <div className="App">
        <Header showLogout={!!userId} />
        {
          userId
          ? <Dashboard />
          : <Login />
        }
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    userId: state.currentUser.id
  }
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(App)
