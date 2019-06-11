import createReducer from '../createReducer'

const removeFriendRequest = (state, action) => {
  return state.filter(fR => fR.id !== action.friendRequest.id)
}

const setFriendRequests = (state, action) => {
  return action.user.friendRequests
}

export default createReducer([], {
  SET_USER: setFriendRequests,
  ACCEPT_FRIEND_REQUEST: removeFriendRequest,
  REJECT_FRIEND_REQUEST: removeFriendRequest
})
