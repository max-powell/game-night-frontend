import createReducer from '../createReducer'

const addSentFriendRequest = (state, action) => {
  return [...state, action.friendRequest]
}

const removeSentFriendRequest = (state, action) => {
  return state.filter(fR => fR.id !== action.friendRequest.id)
}

const setSentFriendRequests = (state, action) => {
  return action.user.sentFriendRequests
}

export default createReducer([], {
  SET_USER: setSentFriendRequests,
  SEND_FRIEND_REQUEST: addSentFriendRequest,
  CANCEL_FRIEND_REQUEST: removeSentFriendRequest
})
