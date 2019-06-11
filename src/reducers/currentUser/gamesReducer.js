import createReducer from '../createReducer'

const addGame = (state, action) => {
  return [...state, action.game]
}

const setGames = (state, action) => {
  return action.user.games
}

export default createReducer([], {
  SET_USER: setGames,
  ADD_GAME: addGame
})
