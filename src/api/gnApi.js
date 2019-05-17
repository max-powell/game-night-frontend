const gnApi = (() => {
  const _baseUrl = 'http://localhost:3000/'

  const _configBuilder = (method, body = '') => {
    return {
      method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: body})
    }
  }

  const login = creds => {
    return fetch(_baseUrl + 'login', _configBuilder('POST', creds))
      .then(res => res.json())
      .then(({user, jwt}) => {
        localStorage.setItem('token', jwt)
      })
  }

  const createUser = creds => {
    return fetch(_baseUrl + 'users', _configBuilder('POST', creds))
      .then(res => res.json())
      .then(({user, jwt}) => {
        localStorage.setItem('token', jwt)
      })
  }

  return {
    login,
    createUser
  }
})()

export default gnApi
