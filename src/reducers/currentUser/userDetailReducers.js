import createReducer from '../createReducer'

const setId = (state, action) => {
  return action.user.id
}

export const idReducer = createReducer(0, {
  SET_USER: setId
})
