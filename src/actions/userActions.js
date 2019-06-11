import gnApi from '../api/gnApi';

export const login = creds => {
  return dispatch => {
    gnApi.login(creds)
      .then(user => dispatch({
        type: 'SET_USER',
        user
      }))
  }
}
