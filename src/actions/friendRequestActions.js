import gnApi from '../api/gnApi'

export const acceptFriendRequest = friendRequest => {
  return dispatch => {
    gnApi.acceptFriendRequest(friendRequest)
      .then(friend => {
        dispatch({
          type: 'ACCEPT_FRIEND_REQUEST',
          friendRequest,
          friend
        })
      })
  }
}
