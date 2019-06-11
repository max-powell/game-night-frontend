import React, { Component } from 'react'

import '../css/LoginSignUpButtons.css'

class LoginSignUpButtons extends Component {

  render() {

    debugger;

    const {showLogin, changeShowLogin} = this.props

    let loginTabClass = 'login-signup-button'
    let signUpTabClass = 'login-signup-button'
    showLogin ? loginTabClass += ' selected' : signUpTabClass += ' selected'

    return (
      <div id='login-signup-buttons'>
        <div
          className={loginTabClass}
          onClick={() => changeShowLogin(true)}
        >
          <div>
            Login
          </div>
        </div>
        <div
          className={signUpTabClass}
          onClick={() => changeShowLogin(false)}
        >
          <div>
            Signup
          </div>
        </div>
      </div>
    )
  }

}

export default LoginSignUpButtons
