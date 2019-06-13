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

export const rejectFriendRequest = friendRequest => {
  return dispatch => {
    gnApi.cancelFriendRequest(friendRequest)
      .then(() => {
        dispatch({
          type: 'REJECT_FRIEND_REQUEST',
          friendRequest
        })
      })
  }
}
