const gnAPI = {
  baseUrl: 'http://localhost:3000/',
  headers: 'application/json',
  user: {
    loginUrl: baseUrl + 'login',
    userUrl: baseUrl + 'users',
    login: (loginCreds) => {
      const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(loginCreds)
      }
      fetch(loginUrl, config)
    }
  }
}
