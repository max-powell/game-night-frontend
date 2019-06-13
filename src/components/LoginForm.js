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

  validate = (validation) => {
    validation(this.state)
      .then(() => {
        !!localStorage.getItem('token') &&
        this.props.routerProps.history.push('/')
      }
      )
  }

  handleSubmit = () => {
    this.props.showLogin
    ? this.validate(gnApi.login)
    : this.validate(gnApi.createUser)
  }

  render() {

    const {showLogin} = this.props
    const { username, password, avatarUrl } = this.state
    const {handleInputChange, handleSubmit} = this

    return (
      <div id='login-form'>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>
              Username:
            </label>
            <input
              name='username'
              value={username}
              onChange={handleInputChange} />
          </Form.Field>
          <Form.Field>
            <label>
              Password:
            </label>
            <input
              name='password'
              type='password'
              value={password}
              onChange={handleInputChange} />
          </Form.Field>
          {
            !showLogin &&
            <Form.Field>
              <label>
                Avatar (optional):
              </label>
              <input
                name='avatarUrl'
                value={avatarUrl}
                onChange={handleInputChange}
              />
            </Form.Field>
          }
          <Button
            type='submit'
          >
            {
              showLogin ? 'Login' : 'Sign Up'
            }
          </Button>
        </Form>
      </div>
    )
  }

}

export default LoginForm
