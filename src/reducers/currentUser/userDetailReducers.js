import createReducer from '../createReducer'

const setId = (state, action) => {
  return action.user.id
}

export const idReducer = createReducer(0, {
  SET_USER: setId
})


const setUsername = (state, action) => {
  return action.user.username
}

export const usernameReducer = createReducer('', {
  SET_USER: setUsername
})


const setAvatarUrl = (state, action) => {
  return action.user.avatarUrl
}

export const avatarUrlReducer = createReducer('', {
  SET_USER: setAvatarUrl
})
