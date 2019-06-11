import React, { Component } from 'react'
import LoginSignUpButtons from '../components/LoginSignUpButtons'
import LoginForm from '../components/LoginForm';

import '../css/LoginSignUpContainer.css'

class LoginSignUpContainer extends Component {

  state = {
    showLogin: true
  }

  changeShowLogin = bool => {this.setState({showLogin: bool})}

  render() {

    const {history} = this.props
    const {showLogin} = this.state
    const {changeShowLogin} = this

    return (
      <div id='login-signup-container'>
        <LoginSignUpButtons
          changeShowLogin={changeShowLogin}
          showLogin={showLogin}
        />
      <LoginForm
        showLogin={showLogin}
        history={history}
      />
      </div>
    )
  }

}

export default LoginSignUpContainer
