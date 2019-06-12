import gnApi from '../api/gnApi'

export const selectFriend = friend => {
  return {
    type: 'SELECT_FRIEND',
    friend
  }
}

export const sendFriendRequest = user => {
  return dispatch => {
    gnApi.sendFriendRequest(user)
      .then(friendRequest => {
        dispatch({
          type: 'SEND_FRIEND_REQUEST',
          friendRequest
        })
      })
  }
}
