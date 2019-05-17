import React, { Component } from 'react'

import '../css/LoginSignUpButtons.css'

class LoginSignUpButtons extends Component {

  render() {
    return (
      <div id='login-signup-buttons'>
        <div className='login-signup-button'><div>Login</div></div>
        <div className='login-signup-button'><div>Signup</div></div>
      </div>
    )
  }

}

export default LoginSignUpButtons
