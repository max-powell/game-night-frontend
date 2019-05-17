import React from 'react'

import LoginSignUpContainer from './LoginSignUpContainer';

import '../css/Login.css'

const Login = ({history}) => (
  <div id='login'>
    {!!localStorage.token && history.push('/dashboard')}
    <LoginSignUpContainer history={history} />
  </div>
);

export default Login
