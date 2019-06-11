import createReducer from '../createReducer'

const addFriend = (state, action) => {
  return [...state, action.friend]
}

export default createReducer([], {
  ACCEPT_FRIEND_REQUEST: addFriend
})
