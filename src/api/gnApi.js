const gnApi = (() => {
  const _baseUrl = 'http://localhost:3000/'

  const _auth = () => ({'Authorization': `Bearer ${localStorage.getItem('token')}`})

  const _configBuilder = (method, body = '', wrapper = 'user') => {
    return {
      method,
      headers: {
        ..._auth(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({[wrapper]: body})
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
    return fetch(_baseUrl + 'profile', {headers: _auth()})
      .then(res => res.json())
  }

  const getItems = route => {
    return fetch(_baseUrl + route, {headers: _auth()})
      .then(res => res.json())
  }

  const search = searchTerm => {
    return fetch(_baseUrl + 'search/' + searchTerm, {headers: _auth()})
      .then(res => res.json())
  }

  const addFriend = id => {
    return fetch(_baseUrl + 'friends', _configBuilder('POST', {id}, 'friend'))
      .then(res => res.json())
  }

  return {
    login,
    createUser,
    getProfile,
    getItems,
    search,
    addFriend
  }
})()

export default gnApi
