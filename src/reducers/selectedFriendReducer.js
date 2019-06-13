import createReducer from './createReducer'

const selectFriend = (state, action) => {
  return action.friend
}

const clearSelectedFriend = (state, action) => {
  return {}
}

export default createReducer({}, {
  SELECT_FRIEND: selectFriend,
  CLEAR_SELECTED_FRIEND: clearSelectedFriend
})
