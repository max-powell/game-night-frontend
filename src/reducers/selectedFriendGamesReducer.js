import createReducer from './createReducer'

const setFriendsGames = (state, action) => {
  return action.games
}

const clearFriendsGames = (state, action) => {
  return []
}

export default createReducer([], {
  SELECT_FRIEND: setFriendsGames,
  CLEAR_SELECTED_FRIEND: clearFriendsGames
})
