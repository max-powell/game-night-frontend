import React from 'react'

import LoginSignUpContainer from './LoginSignUpContainer';

import '../css/Login.css'

const Login = ({routerProps}) => {
  !!localStorage.getItem('token') && routerProps.history.push('/')
  return (
  <div className='main-container-item'>
    <LoginSignUpContainer routerProps={routerProps} />
  </div>
)}

export default Login
