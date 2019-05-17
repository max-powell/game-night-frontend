const gnApi = (() => {
  const _baseUrl = 'http://localhost:3000/'

  const _configBuilder = (method, body = '') => {
    return {
      method,
      headers: 'application/json',
      body: JSON.stringify(body)
    }
  }

  const login = creds => {
    fetch(_baseUrl + 'login')
  }

  return {
    post
  }
})()
