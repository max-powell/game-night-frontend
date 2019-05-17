import React, { Component } from 'react'
import gnApi from '../api/gnApi';

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = ({target: {name, value}}) => {this.setState({[name]: value})}

  handleLogin = () => {
    gnApi.login(this.state)
      .then(this.props.setUser)
  }

  render() {

    const {handleInputChange, handleLogin} = this

    return (
      <div id='login-form'>
        <h2>Login</h2>
        <div className='form-field'>
          <div>Username</div>
          <input type='text' name='username' onChange={handleInputChange} />
        </div>
        <div className='form-field'>
          <div>Password</div>
          <input type='text' name='password' onChange={handleInputChange} />
        </div>
        <button onClick={handleLogin} >Login</button>
      </div>
    )
  }

}

export default LoginForm
