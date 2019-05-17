import React, { Component } from 'react'

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = ({target: {name, value}}) => {this.setState({[name]: value})}

  handleLogin = () => {
    
  }

  render() {

    const {handleInputChange} = this

    return (
      <div id='login-form'>
        <div className='form-field'>
          <div>Username</div>
          <input type='text' name='username' onChange={handleInputChange} />
        </div>
        <div className='form-field'>
          <div>Password</div>
          <input type='text' name='password' onChange={handleInputChange} />
        </div>
        <button>Login</button>
      </div>
    )
  }

}

export default LoginForm
