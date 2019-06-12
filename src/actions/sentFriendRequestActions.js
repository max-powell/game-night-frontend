import gnApi from '../api/gnApi'

export const sendFriendRequest = user => {
  return dispatch => {
    gnApi.sendFriendRequest(user)
      .then(friendRequest => {
        disptach({
          type: 'SEND_FRIEND_REQUEST',
          friendRequest
        })
      })
  }
}
