import createReducer from './createReducer'

const selectFriend = (state, action) => {
  return action.friend
}

export default createReducer({}, {
  SELECT_FRIEND: selectFriend
})
