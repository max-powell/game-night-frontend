import gnApi from '../api/gnApi';

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
