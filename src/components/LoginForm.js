import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import gnApi from '../api/gnApi'

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    avatarUrl: undefined
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value === '' ? undefined : value
    })
  }

  handleSubmit = () => {
    this.props.login
    ? this.login()
    : this.signUp()
  }

  login = async () => {
    await gnApi.login(this.state)
    this.props.history.push('/dashboard')
  }

  signUp = () => {
    gnApi.createUser(this.state)
      .then(() => this.props.history.push('/dashboard'))
  }

  render() {

    const {login} = this.props
    const { username, password, avatarUrl } = this.state
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
              <input value={avatarUrl} name='avatarUrl' onChange={handleInputChange} />
            </Form.Field>
          }
          <Button type='submit'>{login ? 'Login' : 'Sign Up'}</Button>
        </Form>
      </div>
    )
  }

}

export default LoginForm
