const gnApi = (() => {
  const _baseUrl = 'https://gamenightapi.herokuapp.com/'

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
      .then(({user, jwt, error}) => {
        if (jwt) {
          localStorage.setItem('token', jwt)
          return user
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

  const search = searchTerm => {
    return fetch(_baseUrl + 'search/' + searchTerm, {headers: _auth()})
      .then(res => res.json())
  }

  const getFriendsGames = friend => {
    return fetch(`${_baseUrl}/users/${friend.id}/games`, {headers: _auth()})
      .then(res => res.json())
  }

  const searchGames = searchTerm => {
    return fetch(`${_baseUrl}/games?name=${searchTerm}`, {headers: _auth()})
      .then(res => res.json())
  }

  const addGame = game => {
    return fetch(_baseUrl + 'games', _configBuilder('POST', game, 'game'))
      .then(res => res.json())
  }

  const createEvent = event => {
    return fetch(_baseUrl + 'events', _configBuilder('POST', event, 'event'))
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          alert(json.error.join('\n'))
        } else {
          return json
        }
      })
  }

  const updateEvent = event => {
    return fetch(`${_baseUrl}events/${event.id}`, _configBuilder('PATCH', event, 'event'))
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          alert(json.error.join('\n'))
        } else {
          return json
        }
      })
  }

  const leaveEvent = event => {
    return fetch(`${_baseUrl}events/${event.id}`, _configBuilder('DELETE'))
      .then(res => res.json())
  }

  const getEvent = event => {
    return fetch(`${_baseUrl}events/${event.id}`, {headers: _auth()})
      .then(res => res.json())
  }

  const sendFriendRequest = friend => {
    return fetch(_baseUrl + 'friend_requests', _configBuilder('POST', {friend_id: friend.id}, 'friendRequest'))
      .then(res => res.json())
  }

  const acceptFriendRequest = fR => {
    return fetch(`${_baseUrl}friend_requests/${fR.id}`, _configBuilder('PATCH'))
      .then(res => res.json())
  }

  const acceptEventInvite = eI => {
    return fetch(`${_baseUrl}event_invites/${eI.id}`, _configBuilder('PATCH'))
      .then(res => res.json())
  }

  const rejectEventInvite = eI => {
    return fetch(`${_baseUrl}event_invites/${eI.id}`, _configBuilder('DELETE'))
  }

  const cancelFriendRequest = fR => {
    return fetch(`${_baseUrl}friend_requests/${fR.id}`, _configBuilder('DELETE'))
  }

  return {
    login,
    createUser,
    getProfile,
    search,
    getFriendsGames,
    searchGames,
    addGame,
    createEvent,
    updateEvent,
    leaveEvent,
    getEvent,
    sendFriendRequest,
    acceptFriendRequest,
    cancelFriendRequest,
    acceptEventInvite,
    rejectEventInvite
  }
})()

export default gnApi
