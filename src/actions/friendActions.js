import gnApi from '../api/gnApi'

export const selectFriend = friend => {
  return dispatch => {
    gnApi.getFriendsGames(friend)
      .then(games => {
        dispatch({
          type: 'SELECT_FRIEND',
          games,
          friend
        })
      })
  }
}

export const clearSelectedFriend = () => {
  return {type: 'CLEAR_SELECTED_FRIEND'}
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

export const cancelFriendRequest = friendRequest => {
  return dispatch => {
    gnApi.cancelFriendRequest(friendRequest)
      .then(() => {
        dispatch({
          type: 'CANCEL_FRIEND_REQUEST',
          friendRequest
        })
      })
  }
}
