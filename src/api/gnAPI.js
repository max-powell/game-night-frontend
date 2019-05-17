// const gnAPI = {
//   _baseUrl: 'http://localhost',
//   _configBuilder: (method, body) => {
//     return {
//       method,
//       headers: 'application/json'
//       body: JSON.stringify(body)
//     }
//   }
// }

const gnApi = (() => {
  const _baseUrl = 'http://localhost:3000'
  const _configBuilder = (method, body = '') => {
    return {
      method,
      headers: 'application/json',
      body: JSON.stringify(body)
    }
  }
  const post = body => fetch(_baseUrl, _configBuilder('POST', body)).then(res => res.json())
  return {
    post
  }
})()
