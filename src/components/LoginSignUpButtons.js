import React, { Component } from 'react'

import '../css/LoginSignUpButtons.css'

class LoginSignUpButtons extends Component {

  render() {

    const {showLogin} = this.props

    return (
      <div id='login-signup-buttons'>
        <div className='login-signup-button' onClick={() => showLogin(true)}><div>Login</div></div>
        <div className='login-signup-button' onClick={() => showLogin(false)}><div>Signup</div></div>
      </div>
    )
  }

}

export default LoginSignUpButtons
