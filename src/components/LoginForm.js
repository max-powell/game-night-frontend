import React, { Component } from 'react'
import gnApi from '../api/gnApi';

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = ({target: {name, value}}) => {this.setState({[name]: value})}

  handleSubmit = () => {
    this.props.login
    ? this.login()
    : this.signUp()
  }

  login = () => {
    gnApi.login(this.state)
      .then(this.props.history.push('/dashboard'))
  }

  signUp = () => {
    gnApi.createUser(this.state)
      .then(this.props.history.push('/dashboard'))
  }

  render() {

    const {login} = this.props
    const {handleInputChange, handleSubmit} = this

    return (
      <div id='login-form'>
        <h2>{login ? 'Login' : 'Sign Up'}</h2>
        <div className='form-field'>
          <div>Username</div>
          <input type='text' name='username' onChange={handleInputChange} />
        </div>
        <div className='form-field'>
          <div>Password</div>
          <input type='text' name='password' onChange={handleInputChange} />
        </div>
        <button onClick={handleSubmit} >{login ? 'Login' : 'Sign Up'}</button>
      </div>
    )
  }

}

export default LoginForm
