import createReducer from '../createReducer'

const removeEventInvite = (state, action) => {
  return state.filter(eI => eI.id !== action.invite.id)
}

const setEventInvites = (state, action) => {
  return action.user.eventInvites
}

export default createReducer([], {
  SET_USER: setEventInvites,
  ACCEPT_EVENT_INVITE: removeEventInvite,
  REJECT_EVENT_INVITE: removeEventInvite
})
