import React, { Component } from 'react'

import '../css/LoginSignUpButtons.css'

class LoginSignUpButtons extends Component {

  render() {

    const {showLogin, login} = this.props

    let loginTabClass = 'login-signup-button'
    let signUpTabClass = 'login-signup-button'
    login ? loginTabClass += ' selected' : signUpTabClass += ' selected'

    return (
      <div id='login-signup-buttons'>
        <div className={loginTabClass} onClick={() => showLogin(true)}><div>Login</div></div>
        <div className={signUpTabClass} onClick={() => showLogin(false)}><div>Signup</div></div>
      </div>
    )
  }

}

export default LoginSignUpButtons
