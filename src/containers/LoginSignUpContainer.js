import React, { Component } from 'react'
import LoginSignUpButtons from '../components/LoginSignUpButtons'
import LoginForm from '../components/LoginForm';

import '../css/LoginSignUpContainer.css'

class LoginSignUpContainer extends Component {

  state = {
    login: true
  }

  showForm = bool => {this.setState({login: bool})}

  render() {

    const {login} = this.state
    const {setUser} = this.props

    return (
      <div id='login-signup-container'>
        <LoginSignUpButtons />
        {
          login
          ? <LoginForm setUser={setUser} />
          : 'Hi'
        }
      </div>
    )
  }

}

export default LoginSignUpContainer
