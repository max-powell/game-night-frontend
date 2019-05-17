import React, { Component } from 'react'
import LoginSignUpButtons from '../components/LoginSignUpButtons'
import LoginForm from '../components/LoginForm';

import '../css/LoginSignUpContainer.css'

class LoginSignUpContainer extends Component {

  state = {
    login: true
  }

  showLogin = bool => {this.setState({login: bool})}

  render() {

    const {history} = this.props
    const {login} = this.state
    const {showLogin} = this

    return (
      <div id='login-signup-container'>
        <LoginSignUpButtons showLogin={showLogin} />
        <LoginForm login={login} history={history}/>
      </div>
    )
  }

}

export default LoginSignUpContainer
