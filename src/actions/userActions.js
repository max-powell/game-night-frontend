import gnApi from '../api/gnApi';

export const login = creds => {
  return dispatch => {
    gnApi.login(creds)
      .then(user => {
        user &&
        dispatch({
          type: 'SET_USER',
          user
        })
      })
  }
}

export const signup = creds => {
  return dispatch => {
    gnApi.createUser(creds)
      .then(user => {
        user &&
        dispatch({
        type: 'SET_USER',
        user
        })
      })
  }
}

export const fetchUser = () => {
  return dispatch => {
    gnApi.getProfile()
      .then(user => {
        user &&
        dispatch({
        type: 'SET_USER',
        user
        })
      })
  }
}

export const logout = () => {
  return {type: 'LOGOUT'}
}
