import createReducer from './createReducer'

const removeFriendRequest = (state, action) => {
  return state.filter(fR => fR.id !== action.friendRequest.id)
}

export default createReducer([], {
  ACCEPT_FRIEND_REQUEST: removeFriendRequest,
  REJECT_FRIEND-REQUEST: removeFriendRequest
})
