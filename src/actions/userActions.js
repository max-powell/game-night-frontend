import gnApi from '../api/gnApi';

export const fetchUser = () => {
  return gnApi.getProfile
    .then(user => dispatch({
      type: 'FETCH_USER',
      user: user
    }))
}
