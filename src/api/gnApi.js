const gnApi = (() => {
  const _baseUrl = 'http://localhost:3000/'

  const _configBuilder = (method, body = '') => {
    return {
      method,
      headers: {
        'Authorisation': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: body})
    }
  }

  const login = creds => {
    return fetch(_baseUrl + 'login', _configBuilder('POST', creds))
      .then(res => res.json())
      .then(({jwt, error}) => {
        if (jwt) {
          localStorage.setItem('token', jwt)
        } else {
          alert(error)
        }
      }
    )
  }

  const createUser = creds => {
    return fetch(_baseUrl + 'users', _configBuilder('POST', creds))
      .then(res => res.json())
      .then(({jwt, error}) => {
        if (jwt) {
          localStorage.setItem('token', jwt)
        } else {
          alert(error.join('\n'))
        }
      }
    )
  }

  const getProfile = () => {
    return fetch(_baseUrl + 'profile', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      .then(res => res.json())
  }

  return {
    login,
    createUser,
    getProfile
  }
})()

export default gnApi
