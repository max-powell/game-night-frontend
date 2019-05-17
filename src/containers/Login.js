import React from 'react'

import LoginSignUpContainer from './LoginSignUpContainer';

import '../css/Login.css'

const Login = ({setUser}) => (
  <div id='login'>
    <LoginSignUpContainer setUser={setUser} />
  </div>
);

export default Login
