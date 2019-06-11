import createReducer from '../createReducer'

const addSentFriendRequest = (state, action) => {
  return [...state, action.request]
}

const removeSentFriendRequest = (state, action) => {
  return state.filter(fR => fR.id !== action.request.id)
}

export default createReducer([], {
  SEND_FRIEND_REQUEST: addSentFriendRequest,
  CANCEL_FRIEND_REQUEST: removeSentFriendRequest
})
