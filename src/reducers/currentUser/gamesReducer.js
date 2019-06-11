import createReducer from '../createReducer'

const addGame = (state, action) => {
  return [...state, action.game]
}

export default createReducer([], {
  ADD_GAME: addGame
})
