import createReducer from './createReducer'

const selectFriend = (state, action) => {
  return action.friend
}

const clearSelectedFriend = (state, action) => {
  return null
}

export default createReducer(null, {
  SELECT_FRIEND: selectFriend
})
