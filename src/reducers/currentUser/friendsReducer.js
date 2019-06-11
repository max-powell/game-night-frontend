import createReducer from '../createReducer'

const addFriend = (state, action) => {
  return [...state, action.friend]
}

const setFriends = (state, action) => {
  return action.user.friends
}

export default createReducer([], {
  SET_USER: setFriends,
  ACCEPT_FRIEND_REQUEST: addFriend
})
