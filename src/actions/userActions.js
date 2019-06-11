import gnApi from '../api/gnApi';

// export const fetchUser = () => {
//   return gnApi.getProfile
//     .then(user => dispatch({
//       type: 'FETCH_USER',
//       user: user
//     }))
// }

export const login = creds => {
  return dispatch => {
    gnApi.login(creds)
      .then(user => dispatch({
        type: 'SET_USER',
        user
      }))
  }
}
