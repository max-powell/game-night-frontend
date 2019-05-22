import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import gnApi from '../api/gnApi'

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
  }

  handleInputChange = ({target: {name, value}}) => {this.setState({[name]: value})}

  handleSubmit = () => {
    this.props.login
    ? this.login()
    : this.signUp()
  }

  login = async () => {
    await gnApi.login(this.state)
    this.props.history.push('/dashboard')
  }

  signUp = async () => {
    await gnApi.createUser(this.state)
    this.props.history.push('/dashboard')
  }

  render() {

    const {login} = this.props
    const { username, password } = this.state
    const {handleInputChange, handleSubmit} = this

    return (
      <div id='login-form'>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Username:</label>
            <input value={username} name='username' onChange={handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type='password' value={password} name='password' onChange={handleInputChange} />
          </Form.Field>
          {
            !login &&
            <Form.Field>
              <label>Avatar:</label>
              <input />
            </Form.Field>
          }
          <Button type='submit'>{login ? 'Login' : 'Sign Up'}</Button>
        </Form>
      </div>
    )
  }

}

export default LoginForm

{/*<div id='login-form'>
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
  </div>*/}
